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
    
        let members = guild.roles.cache.find(roleName).members; // returns Collection (GuildMember)
        console.log(members.map(member => member.user.username));

}

module.exports.help = {
    name:"prasdasdasda",
    aliases:["disableddddd"]
}