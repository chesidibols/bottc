const Discord =require("discord.js");
const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");
const assert = require("assert");
//Connect to database
mongoose.connect(botconfig.mongoPass, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex:true,
    useUnifiedTopology: true
});

// MODELS
const Data = require("../models/data.js");

module.exports.run = async (bot, message, args) =>{
    let geChannel = "701993793838252103";
    if(message.channel.id != "701993793838252103")
    {
        message.channel.send({embed:{color:'a20a28', description:`**Please Use <#${geChannel.toString()}> channel.**`}}); 
        return;
    }

    let timeout = 86400000;
    let reward = 500;

    let logsCoin = bot.channels.cache.get('711554230661677056');

    Data.findOne({
        userID: message.author.id
    },(err, data) => {
        if(err) console.log(err);
        if(data)
        {
            let thisUser = message.author.tag;
            Data.findOneAndUpdate({userID:message.author.id},{name:thisUser}).then(function(){
                Data.findOne({userID:message.author.id}).then(function(result){
                assert(result.name === thisUser)
                console.log(`${thisUser} name was updated to the database`)
                return;
                })
            });
        }
        if(!data) {
            const newData = new Data({
                name: message.author.tag,
                userID: message.author.id,
                lb:"all",
                money: reward,
                daily: Date.now(),
            })

            newData.save().catch(err => console.log(err));
            return message.channel.send({embed:{color:'a20a28', description:`**${message.author.tag}** has ${reward} <:coinns:715103658601218088>`}});
        } else {
            if(timeout - (Date.now() - data.daily) > 0){
                let time = ms(timeout - (Date.now() - data.daily));

                return message.channel.send({embed:{color:'a20a28', description:`**You already collected your daily reward! Collect again in ${time.hours}h ${time.minutes}m**`}});
            } else {
                data.money +=reward;
                data.daily = Date.now();
                data.save().catch(err => console.log(err));

                message.channel.send({embed:{color:'a20a28', description:`**You recieved ${reward} <:coinns:715103658601218088>**`}});
                logsCoin.send({embed:{color:'a20a28', description:`**${message.author.username} recieved ${reward} <:coinns:715103658601218088>**`}});
                return;
            }
        }
    })
}

module.exports.help = {
    name:"daily",
    aliases:["araw"]
}