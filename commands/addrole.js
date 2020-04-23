const Discord =require("discord.js");
const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");

//Connect to database
mongoose.connect(botconfig.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const LGBT_ROLE = "700338294814408820";

module.exports.run = async (bot, message, args) =>{

    let user = message.mentions.members.first() || bot.users.cache.get(args[0]);
    if(!user) return message.channel.send({embed:{color:'a20a28', description:"**Sorry, couldn't find that user.**"}});
    
    if(args[1].toLowerCase() == "LGBT"){
        message.member.roles.remove(LGBT_ROLE);
        message.channel.send("removed");
        return;
    }
}

module.exports.help = {
    name:"remove",
    aliases:["tinda"]
}