const Discord =require("discord.js");
const bot = new Discord.Client({disableEveryone: true});


module.exports.run = async (bot, message, args) =>{


    let roled = member.roles.cache.find(r => r.name=== '700338294814408820');
    if(message.content.startsWith("1")){
    member.addRole(roled);
    message.send("congrats");
    return;
    }
}

module.exports.help = {
    name:"buy",
    aliases:["tinda"]
}