const Discord =require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) =>{


    
    let embed = new Discord.MessageEmbed();
        embed.setTitle("SHOP");
        embed.setColor("a20a28");
        embed.addField("tc.buy # of item to buy.")
        embed.addFields(
            { name: '**1.Change Nickname**', value: '100 000 coins', inline: true },
            { name: '**2.Color Role**', value: '100 000 coins (DM higher role to change to desired color.)', inline: true },
        )

        message.channel.send(embed);
}


module.exports.help = {
    name:"shop",
    aliases:["shoppee"]
}