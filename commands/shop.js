const Discord =require("discord.js");
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args , member, guild) =>{


    var role= member.guild.roles.cache.find(role => role.name === "LGBT");
    if(message.content.startsWith("1")){
    member.roles.add(role);
    message.send("congrats");
    return;
    }
}

module.exports.help = {
    name:"buy",
    aliases:["tinda"]
}