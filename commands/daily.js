const ms = require("parse-ms");
const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");

//Connect to database
mongoose.connect(botconfig.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// MODELS
const Data = require("../models/data.js");

module.exports.run = async (bot, message, args) =>{

    let timeout = 86400000;
    let reward = 500;

    let logsCoin = bot.channels.cache.get('711554230661677056');

    Data.findOne({
        userID: message.author.id
    },(err, data) => {
        if(err) console.log(err);
        if(!data) {
            const newData = new Data({
                name: message.author.tag,
                userID: message.author.id,
                lb:"all",
                money: reward,
                daily: Date.now(),
            })

            newData.save().catch(err => console.log(err));
            return message.channel.send({embed:{color:'a20a28', description:`**${message.author.tag}** has ${reward} <:coinnss:699944502856646716>`}});
        } else {
            if(timeout - (Date.now() - data.daily) > 0){
                let time = ms(timeout - (Date.now() - data.daily));

                return message.channel.send({embed:{color:'a20a28', description:`**You already collected your daily reward! Collect again in ${time.hours}h ${time.minutes}m**`}});
            } else {
                data.money +=reward;
                data.daily = Date.now();
                data.save().catch(err => console.log(err));

                message.channel.send({embed:{color:'a20a28', description:`You recieved ${reward} <:coinnss:699944502856646716>`}});
                logsCoin.send({embed:{color:'a20a28', description:`${message.author.username}recieved ${reward} <:coinnss:699944502856646716>`}});
                return;
            }
        }
    })
}

module.exports.help = {
    name:"daily",
    aliases:["araw"]
}