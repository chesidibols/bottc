const Discord =require("discord.js");
const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");
const assert = require("assert");
const ms = require("parse-ms");
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

    let logsCoin = bot.channels.cache.get('711554230661677056');

    let timeout = 14400000;
    let reward = 200;

    Data.findOne({
        userID: message.author.id
    },(err, data) => {
        if(err) console.log(err);
        /*if(data)
        {
            let thisUser = message.author.tag;
            Data.findOneAndUpdate({userID:message.author.id},{name:thisUser}).then(function(){
                Data.findOne({userID:message.author.id}).then(function(result){
                assert(result.name === thisUser)
                console.log(`${thisUser} name was updated to the database`)
                return;
                })
            });
        }*/

        if(!data) {
            const newData = new Data({
                name: message.author.tag,
                userID: message.author.id,
                lb:"all",
                money: reward,
                work: Date.now(),
            })

            newData.save().catch(err => console.log(err));
            return message.channel.send({embed:{color:'a20a28', description:`**${message.author.tag}** has ${reward} <:coinns:715103658601218088>`}});
        } else {
            if(timeout - (Date.now() - data.work) > 0){
                let time = ms(timeout - (Date.now() - data.work));

                return message.channel.send({embed:{color:'a20a28', description:`**You already collected your wages. Work again in ${time.hours}h ${time.minutes}m**`}});
            } else {
                data.money +=reward;
                data.work = Date.now();
                data.save().catch(err => console.log(err));

                message.channel.send({embed:{color:'a20a28', description:`**You worked hard here's your pay check! ${reward} <:coinns:715103658601218088>**`}});
                logsCoin.send({embed:{color:'a20a28', description:`**${message.author.username} worked hard here is the pay check! ${reward} <:coinns:715103658601218088>**`}});
                return;
            }
        }
    })
}

module.exports.help = {
    name:"work",
    aliases:["w"]
}