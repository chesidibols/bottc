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
    
        let embed = new discord.RichEmbed({
            "title": `Users with the ${roleName} role`,
            "description": message.guild.roles.cache.get(roleName).members.map(m=>m.user.tag).join('\n'),
            "color": 0xFFFF
        });
    
        return message.channel.send({embed});

}

module.exports.help = {
    name:"pr",
    aliases:["disableddddd"]
}