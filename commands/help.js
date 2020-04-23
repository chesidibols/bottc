const Discord =require("discord.js");

module.exports.run = async (bot, message, args) =>{


    let embed = new Discord.MessageEmbed();
        embed.setTitle("BOT COMMANDS");
        embed.setColor("a20a28");
        embed.addFields(
            { name: '**tc.bal**', value: 'Check Balance' },
            { name: '\u200B', value: '\u200B' },
            { name: '**tc.pay**', value: 'Pay to other user', inline: true },
            { name: '**tc.roll**', value: 'To Gamble', inline: true },
        )

        message.channel.send(embed);
}

module.exports.help = {
    name:"help",
    aliases:["tulong"]
}