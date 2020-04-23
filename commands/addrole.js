const Discord =require("discord.js");
const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");

//Connect to database
mongoose.connect(botconfig.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const LGBT_ROLE = "700338294814408820";

module.exports.run = async (bot, message, args) =>{


    if(args[0].toLowerCase() == "LGBT"){
        message.member.roles.remove(LGBT_ROLE);
        message.channel.send("removed");
        return;
    }
}

module.exports.help = {
    name:"remove",
    aliases:["tinda"]
}