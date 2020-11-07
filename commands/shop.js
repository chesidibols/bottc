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
           /* { name: '**1# 50,000 coins.**', value: '50 Pesos Load', inline: true },
            { name: '**2# 55,000 coins.**', value: '50 Pesos Steam', inline: true },
            { name: '**3# 100,000 coins.**', value: '100 Pesos Load', inline: true },
            { name: '**4# 250,000 coins.**', value: '250 Pesos Load', inline: true },
            { name: '**5# 250,000 coins.**', value: '1 Discord Nitro', inline: true },
            { name: '**6# 300,000 coins.**', value: '300 Pesos Load', inline: true },
            { name: '**7# 315,000 coins.**', value: '250 Steam Wallet', inline: true },
            { name: '**8# 500,000 coins.**', value: '500 Pesos Load', inline: true },
            { name: '**9# 500,000 coins.**', value: '1 Discord Nitro Boost', inline: true },
            { name: '**10# 500,000 coins.**', value: '1 Month Netflix', inline: true },
            { name: '**11# 500,000 coins.**', value: '1 Month Spotify Premium', inline: true },
            { name: '**12# 600,000 coins.**', value: '500 Steam Wallet', inline: true },*/
            { name: `**1# 10,000 coins**`, value: `<@&${daiquiri}>`, inline: true },
            { name: `**2# 10,000 coins**`, value: `<@&${blue_hawaii}>`, inline: true },
            { name: `**3# 10,000 coins**`, value: `<@&${mojito}>`, inline: true },
            { name: `**4# 10,000 coins**`, value: `<@&${blue_lagoon}>`, inline: true },
            { name: `**5# 10,000 coins**`, value: `<@&${miami_bice}>`, inline: true },
            { name: `**6# 10,000 coins**`, value: `<@&${hurricane}>`, inline: true },
            { name: `**7# 10,000 coins**`, value: `<@&${purple_bage}>`, inline: true },
        )
        message.channel.send(embed);
}


module.exports.help = {
    name:"potanginaaa",
    aliases:["gagagagaga"]
}
