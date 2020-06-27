const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");
const Discord = require("discord.js");

//Connect to database
mongoose.connect(botconfig.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// MODELS
const Data = require("../models/data.js");


module.exports.run = async (bot, message, args) =>{

    let etoRole = message.mentions.roles.first().id;

    let memberUnderRole = message.guild.roles.cache.get(etoRole).members.map(m=>m.user.tag).join('\n')

    const ListEmbed = new Discord.MessageEmbed({
        "title":`Users under the role`,
        "description": memberUnderRole,
        "color" : "a20a28"
    })
        
        message.channel.send(ListEmbed);

        Data.find({
            userID: memberUnderRole
        }, (err, userData) =>{
            if(err) console.log(err);
    
            if(!args[1]) return message.channel.send({embed:{color:'a20a28', description:"**Please specify the ammount you want to pay**"}});
    
            if(args[1] != Math.floor(args[1])) return message.channel.send({embed:{color:'a20a28',description:"**OOPS! YOU CAN'T PAY WITH LETTERS :P**"}});
    
            if(parseInt(args[1]) < 10) return message.channel.send({embed:{color:'a20a28', description:"You cannot pay less than 10 <:coinns:715103658601218088>"}});
    
            if(!userData) {
                const newData = new Data({
                    name: memberUnderRole,
                    userID: message.author.id,
                    lb:"all",
                    money: parseInt(args[1]),
                    daily: 0,
                })
                newData.save().catch(err => console.log(err));
            } else {
                userData.money += parseInt(args[1]);
                userData.save().catch(err => console.log(err));
            }
            
            message.channel.send({embed:{color:'a20a28', description:`**${message.author.username}** gives ${args[1]}<:coinns:715103658601218088> to **${memberUnderRole}**`}});
           // logsCoin.send({embed:{color:'a20a28', description:`**${message.author.username}** gives ${args[1]}<:coinns:715103658601218088> to **${memberUnderRole}**`}});
            return;
        })

}

module.exports.help = {
    name:"pr",
    aliases:["disableddddd"]
}