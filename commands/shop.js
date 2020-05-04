const Discord =require("discord.js");
const botconfig = require("../botconfig.json");





module.exports.run = async (bot, message, args) =>{
    const daiquiri = "704649539025633356";
    const blue_hawaii = "704649829460082759";
    const mojito = "704649703165395054";
    const blue_lagoon = "703607741213704263";
    const miami_bice = "704649910821060668";
    const hurricane = "704649919432228926";
    const purple_bage = "704649930924490791";
    
    let embed = new Discord.MessageEmbed();
        embed.setTitle("SHOP");
        embed.setColor("a20a28");
        embed.addFields(
            { name: '**1.50,000 coins.**', value: '50 Pesos Load', inline: true },
            { name: '**2.55,000 coins.**', value: '50 Pesos Steam', inline: true },
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
            { name: `**13.10,000**`, value: `<@&${daiquiri}>`, inline: true },
            { name: `**14.10,000**`, value: `<@&${blue_hawaii}>`, inline: true },
            { name: `**15.10,000**`, value: `<@&${mojito}>`, inline: true },
            { name: `**16.10,000**`, value: `<@&${blue_lagoon}>`, inline: true },
            { name: `**17.10,000**`, value: `<@&${miami_bice}>`, inline: true },
            { name: `**18.10,000**`, value: `<@&${hurricane}>`, inline: true },
            { name: `**19.10,000**`, value: `<@&${purple_bage}>`, inline: true },
        )
        message.channel.send(embed);
}


module.exports.help = {
    name:"shop",
    aliases:["shoppee"]
}