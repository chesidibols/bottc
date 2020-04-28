const Discord =require("discord.js");
const botconfig = require("../botconfig.json");





module.exports.run = async (bot, message, args) =>{

    const blue_hawaii = message.member.roles.cache.get("704649829460082759").toLocaleString();
    
    let embed = new Discord.MessageEmbed();
        embed.setTitle("SHOP");
        embed.setColor("a20a28");
        embed.addFields(
            { name: '**1.50 Pesos Load**', value: '50,000  coins.', inline: true },
            { name: '**2.50 Pesos Steam**', value: '55,000 coins.', inline: true },
            { name: '**3.100 Pesos Load**', value: '100,000 coins.', inline: true },
            { name: '**4.250 Pesos Load**', value: '250,000 coins.', inline: true },
            { name: '**5.1 Discord Nitro**', value: '250,000 coins.', inline: true },
            { name: '**6.300 Pesos Load**', value: '300,000 coins.', inline: true },
            { name: '**7.250 Steam Wallet**', value: '315,000 coins.', inline: true },
            { name: '**8.500 Pesos Load**', value: '500,000 coins.', inline: true },
            { name: '**9.1 Discord Nitro Boost**', value: '500,000 coins.', inline: true },
            { name: '**10.1 Month Netflix**', value: '500,000 coins.', inline: true },
            { name: '**11.1 Month Spotify Premium**', value: '500,000 coins.', inline: true },
            { name: '**12.500 Steam Wallet**', value: '600,000 coins.', inline: true },
            { name: `**${(blue_hawaii).toLocaleString()}**`, value: '----', inline: true },
        )

        message.channel.send(embed);
}


module.exports.help = {
    name:"shop",
    aliases:["shoppee"]
}