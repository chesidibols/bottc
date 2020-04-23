const Discord =require("discord.js");
const botconfig = require("../botconfig.json");
const LGBT_ROLE = "700338294814408820";

module.exports.run = async (bot, message, args) =>{

        if(message.content.startsWith == "1"){
            message.member.addRole(LGBT_ROLE);
            message.channel.send("added");
            return;
        }

    
}

module.exports.help = {
    name:"buy",
    aliases:["asd"]
}