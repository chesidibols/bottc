const Discord =require("discord.js");
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args) =>{


    let memRole = members.guild.roles.find(role => role.id == "700338294814408820");
    if(message.content.startsWith("1")){
    members.addRole(memRole);
    message.channel.send("You have the LGBT role");
    return;


    } 
}

module.exports.help = {
    name:"buy",
    aliases:["tinda"]
}