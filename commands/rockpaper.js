const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");

//Connect to database
mongoose.connect(botconfig.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// MODELS
const Data = require("../models/data.js");

const chooseArr = ["🗻", "📃", "✂"]

module.exports.run = async (bot, message, args) =>{

    
    /*Data.findOne({
        userID: message.author.id
    },(err, data) => {
        if(err) console.log(err);
        if(!data){
            const newData = new Data({
                name: message.author.tag,
                userID: message.author.id,
                lb:"all",
                money: 0,
                daily: 0,
            })

            newData.save().catch(err => console.log(err));
        } else {
        var award = 24;*/

        let embed = new Discord.MessageEmbed();
        embed.setTitle("ROCK PAPER SCISSORS");
        embed.setColor("a20a28");
        embed.setFooter(mesage.guild.me.displayName, client.user.displayAvatarURL);
        embed.setDescription("Add a reaction to one of these emojis to play the game!");
        embed.setTimestamp();

        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await m.clearReaction();

        embed.setDescription("");
        embed.addField(result, `${reacted} vs ${botChoice}`);

        m.embed(embed);

        function getResult(me, clientChosen){
            if((me === "🗻" && clientChosen ==="✂") ||
            (me ==="📃" && clientChosen === "🗻") ||
            (me ==="✂" && clientChosen ==="📃")){
                //data.money += award;
                //data.save().catch(err => console.log(err));
                return `You won!`;//${(data.money).toLocaleString()}
            } else if (me === clientChosen){
                return "It's a tie!";
            }else{
                return "You lost!";
            }

        }
    }
    })

    
}

module.exports.help = {
    name:"jakenpoy",
    aliases:[""]
}