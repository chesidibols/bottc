const Discord =require("discord.js");
const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");

//Connect to database
mongoose.connect(botconfig.mongoPass, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
});

// MODELS
const Data = require("../models/data.js");

module.exports.run = async (bot, message, args) =>{
    let geChannel = "701993773554597929";
    if(message.channel.id != "701993773554597929")
    {
        message.channel.send({embed:{color:'a20a28', description:`**Please Use <#${geChannel.toString()}> channel.**`}}); 
        return;
    }

    message.delete({timeout: 10000})

    if(!args[0]){
        var user = message.author;
    } else {
        var user = message.mentions.users.first() || bot.users.cache.get(args[0]);

    }

    Data.findOne({
        userID: user.id
    },(err, data) =>{
        if(err) console.log(err);
        if(!data) {
            const newData = new Data({
                name: bot.users.cache.get(user.id).tag,
                userID: message.author.id,
                lb:"all",
                money: 0,
                daily: 0,
            })

            newData.save().catch(err => console.log(err));
            return message.channel.send({embed:{color:'a20a28', description:`**${bot.users.cache.get(user.id).tag}** has 0 <:coinns:715103658601218088>`}});
        } else {
            return message.channel.send({embed:{color:'a20a28', description:`**${bot.users.cache.get(user.id).tag}** has ${(data.money).toLocaleString()} <:coinns:715103658601218088>`}});
        }
    })
    
}

module.exports.help = {
    name:"balance",
    aliases:["bal" , "$"]
}