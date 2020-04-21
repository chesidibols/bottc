const Discord = require("discord.js");


module.exports.run = async (bot, message, args) =>{

    if(!message.member.hasPermission("Board Of Directors")) return message.send({embed:{color:'a20a28', description:"*You don't have the permission to this"}});
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.channel.send({embed:{color:'a20a28', description:"Couldn't find that user, please specify"}});
    let role = args.join("").slice(22);
    if(!role) return message.channel.send({embed:{color:'a20a28', description:"Specify a Role!"}});
    let gRole = message.guild.roles.find(`name`,role);
    if(!gRole) return message.channel.send({embed:{color:'a20a28', description:"Couldn't find that role."}});

    if(rMember.roles.has(gRole.id));
    await(rMember.addRole(gRole.id));

    message.channel.send({embed:{color:'a20a28', description:`Congrats to <@${rMember.id}>, they have been given role ${gRole.name}. wushuu!`}});

}

module.exports.help = {
    name:"addrole",
    aliases:["roleadd"]
}