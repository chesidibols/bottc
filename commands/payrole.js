const Discord =require("discord.js");
const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");
const assert = require("assert");
//Connect to database
mongoose.connect(botconfig.mongoPass, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex:true,
    useUnifiedTopology: true
});

// MODELS
const Data = require("../models/data.js");


module.exports.run = async (bot, message, args) =>{

    let role = message.mentions.roles.first() || bot.guilds.cache.get(message.guild.id).roles.cache.get(args[0])
    let mem = message.guild.roles.cache.get(role.id).members.map(m => m.user.id).join(' ').split(' ')

    Data.find({
        userID: mem
    }, (err, data) => {

        if (err) return console.log(err)
        for (i = 0; i < data.length; i++)
            console.log(data)
    })
/*
        Data.findOne({
            userID: 'asd'
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
        })*/

}

module.exports.help = {
    name:"pr",
    aliases:["disableddddd"]
}