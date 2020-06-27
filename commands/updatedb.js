const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");
const Discord = require("discord.js");

//Connect to database
mongoose.connect(botconfig.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// MODELS
const Data = require("../models/data.js");


module.exports.run = async (bot, message, args) =>{

    Data.findByIdAndUpdate({
        userID: message.author.id
    }, (err, userData) =>{
        if(err) console.log(err);
        if(parseInt(args[1]) < 10) return message.channel.send({embed:{color:'a20a28', description:"You cannot pay less than 10 <:coinns:715103658601218088>"}});

        if(!userData) {
            const newData = new Data({
                name: bot.users.cache.get(user.id).tag,
                userID: message.author.id,
                lb:"all",
                money: parseInt(args[1]),
                daily: 0,
            })
            newData.save().catch(err => console.log(err));
        }
 message.channel.send("done");
})
}

module.exports.help = {
    name:"update",
    aliases:["disableddddd"]
}