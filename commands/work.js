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
    let logsCoin = bot.channels.cache.get('711554230661677056');

    let timeout = 14400000;
    let reward = 200;

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
                work: Date.now(),
            })

            newData.save().catch(err => console.log(err));
            return message.channel.send({embed:{color:'a20a28', description:`**${message.author.tag}** has ${reward} <:coinnss:699944502856646716>`}});
        } else {
            if(timeout - (Date.now() - data.work) > 0){
                let time = ms(timeout - (Date.now() - data.work));

                return message.channel.send({embed:{color:'a20a28', description:`**You already collected your wages. Work again in ${time.hours}h ${time.minutes}m**`}});
            } else {
                data.money +=reward;
                data.work = Date.now();
                data.save().catch(err => console.log(err));

                message.channel.send({embed:{color:'a20a28', description:`**You worked hard here's your pay check! ${reward} <:coinnss:699944502856646716>**`}});
                logsCoin.send({embed:{color:'a20a28', description:`**${message.author.username} worked hard here is the pay check! ${reward} <:coinnss:699944502856646716>**`}});
                return;
            }
        }
    })
}

module.exports.help = {
    name:"work",
    aliases:["w"]
}