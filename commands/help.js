const Discord =require("discord.js");

module.exports.run = async (bot, message, args) =>{


    let embed = new Discord.MessageEmbed();
        embed.setTitle("BOT COMMANDS");
        embed.setColor("a20a28");
        embed.addFields(
            { name: '**tc.bal**', value: 'Check Balance.', inline: true },
            { name: '**tc.pay**', value: 'Pay to other user.', inline: true },
            { name: '**tc.buy**', value: 'To buy select 1-12 items in shop "tc.buy 1 like this."', inline: true },
            { name: '**tc.roll**', value: 'To Gamble.', inline: true },
            { name: '**tc.work**', value: 'Gives you 500 coins every 12 hours.', inline: true },
            { name: '**tc.daily**', value: 'Gives you 500 every 24 Hours.', inline: true },
            { name: '**tc.give**', value: 'Banker rights only.', inline: true },
            { name: '**tc.r-coins/tc.remove-coins**', value: 'Banker rights only.', inline: true },
        )

        message.channel.send(embed);
}

module.exports.help = {
    name:"help",
    aliases:["tulong"]
}