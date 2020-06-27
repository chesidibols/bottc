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


    if(message.mentions.roles.first()){
        let roleName = message.content.split(" ").slice(1).join(" ");
    
        //Filtering the guild members only keeping those with the role
        //Then mapping the filtered array to their usernames
        let membersWithRole = message.guild.members.cache.filter(member => { 
            return member.roles.cache.find("name", roleName);
        }).map(member => {
            return member.user.username;
        })
    
        let embed = new discord.RichEmbed({
            "title": `Users with the ${roleName} role`,
            "description": membersWithRole.join("\n"),
            "color": 0xFFFF
        });
    
        return message.channel.send({embed});
    }

}

module.exports.help = {
    name:"pr",
    aliases:["disableddddd"]
}