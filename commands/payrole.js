const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");
const Discord = require("discord.js");

//Connect to database
mongoose.connect(botconfig.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// MODELS
const Data = require("../models/data.js");


module.exports.run = async (bot, message, args) =>{

        let roleName = message.mentions.roles.first()
    
        //Filtering the guild members only keeping those with the role
        //Then mapping the filtered array to their usernames
        let membersWithRole = message.member.roles.cache.filter(member => { 
            return member.roles.cache.find("name", roleName);
        }).map(member => {
            return member.user.username;
        })
    
        let embed = new Discord.RichEmbed({
            "title": `Users with the ${roleName} role`,
            "description": membersWithRole.join("\n"),
            "color": 0xFFFF
        });
    
        return message.channel.send({embed});

}

module.exports.help = {
    name:"pr",
    aliases:["disableddddd"]
}