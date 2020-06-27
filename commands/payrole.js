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

    let etoRole = message.mentions.roles.first().id;

    const ListEmbed = new Discord.MessageEmbed({
        "title":`Users under the role`,
        "description": message.guild.roles.cache.get(etoRole).members.map(m=>m.user.username.tag).join('\n'),
        "color" : 0xffff
    })
        
        message.channel.send(ListEmbed);

}

module.exports.help = {
    name:"pr",
    aliases:["disableddddd"]
}