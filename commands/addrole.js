const Discord = require("discord.js");


module.exports.run = async (bot, message, args) =>{

    let myRole = message.guild.roles.find(role => role.name === "Board Of Directors");
    if(!myRole) return message.channel.send("you dont have permissions");
    let user = message.mentions.members.first() || bot.users.cache.get(args[0]);
    let role = message.guild.roles.find(r => r.name === user);
    if(role) return message.channel.send("congrats!");

}

module.exports.help = {
    name:"addrole",
    aliases:["roleadd"]
}