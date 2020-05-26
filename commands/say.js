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
    if(!message.member.roles.cache.get('334327971194077196')) return message.channel.send("wala");
    let msgContent = message.content;
    let menChannel = message.mentions.channels.first();
    if (message.content.startsWith(`tc.say ${menChannel}`)) {
        menChannel.send(msgContent.replace(`tc.say ${menChannel}`, ''));
        return;
        }

    }

module.exports.help = {
    name:"give",
    aliases:["g"]
}