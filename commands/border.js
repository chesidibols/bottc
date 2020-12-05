const Discord = require('discord.js');
const Canvas = require('canvas')

module.exports.run = async (bot, message, args) => {
    try {
        const user = message.mentions.users.first() || bot.users.cache.get(args[0])
        if (user) {
            const canvas = Canvas.createCanvas(1024, 1024);
            const ctx = canvas.getContext('2d');

            // Pick up the pen
            ctx.beginPath();
            // Start the arc to form a circle
            ctx.arc(515, 510, 485, 0, Math.PI * 2, true);
            // Put the pen down
            ctx.closePath();
            // Clip off the region you drew on
            ctx.clip();

            const background = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg', size: 1024 }));
            ctx.drawImage(background, 183, 75, 890, 890);

            ctx.strokeStyle = '#74037b';
            ctx.strokeRect(0, 0, canvas.width, canvas.height);

            const avatar = await Canvas.loadImage('./Shack.png');
            ctx.drawImage(avatar, 0, 0, 1045, 1045);

            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'Shack.png');


            message.channel.send(attachment);
        }
        else {
            const canvas = Canvas.createCanvas(1024, 1024);
            const ctx = canvas.getContext('2d');

            // Pick up the pen
            ctx.beginPath();
            // Start the arc to form a circle
            ctx.arc(515, 510, 485, 0, Math.PI * 2, true);
            // Put the pen down
            ctx.closePath();
            // Clip off the region you drew on
            ctx.clip();

            const background = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg', size: 1024 }));
            ctx.drawImage(background, 135, 195, 890, 890);

            ctx.strokeStyle = '#74037b';
            ctx.strokeRect(0, 0, canvas.width, canvas.height);

            const avatar = await Canvas.loadImage('./shack.png');
            ctx.drawImage(avatar, 0, 0, 1045, 1045);

            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'Shack.png');


            message.channel.send(attachment);
        }
    }
    catch (err) {
        message.channel.send({
            embed: {
                title: '❌ ERROR OCCURED',
                description: 'Oops! Seems like something went wrong here! \n\n\nThe error report has been sent to the developer!',
                color: 'FF0000',
                timestamp: new Date()
            }
        })
        bot.guilds.cache.get('333573514856628225').channels.cache.get('759070686995677205').send("ERROR ```" + err.stack + " ```")
    }
}


module.exports.config = {
    name: "pic",
    aliases: ["border"]
}
