const Discord =require("discord.js");
const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");

//Connect to database
mongoose.connect(botconfig.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports.run = async (bot, message, args) =>{

    let thisRole = message.mentions.first;
    let myRole = message.guild.roles.cache.find(role => role.name === thisRole);
    console.log(myRole);

}

module.exports.help = {
    name:"asd",
    aliases:["asd"]
}