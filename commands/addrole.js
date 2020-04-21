const Discord =require("discord.js");
const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");

//Connect to database
mongoose.connect(botconfig.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports.run = async (bot, message, args) =>{


    let embed = new Discord.MessageEmbed();
        embed.setTitle("SHOP");
        embed.setColor("a20a28");
        embed.addField("tae");

        message.channel.send(embed);
}

module.exports.help = {
    name:"shop",
    aliases:["tinda"]
}