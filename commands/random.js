const Discord =require("discord.js");
const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");

//Connect to database
mongoose.connect(botconfig.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



module.exports.run = async (bot, message, args) =>{

    let r = Math.random().toString(36).substring(7);
message.channel.send(r);
}

module.exports.help = {
    name:"gen",
    aliases:[""]
}