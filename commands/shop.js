const Discord =require("discord.js");
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args , member,) =>{


    let roled = member.roles.cache.id === '700338294814408820';
    if(message.content.startsWith("1")){
    member.roles.add(roled);
    message.send("congrats");
    return;
    }
}

module.exports.help = {
    name:"buy",
    aliases:["tinda"]
}