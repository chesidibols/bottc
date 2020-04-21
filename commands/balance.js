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
    message.delete({timeout: 10000})
    if(!message.guild.channel.get('701993773554597929' , '701993793838252103')) {
        return message.channel.send({embed:{color:'a20a28', description:`**Please use ATM channels!** `}});
    }

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
                userID: user.id,
                lb:"all",
                money: 0,
                daily: 0,
            })

            newData.save().catch(err => console.log(err));
            return message.channel.send({embed:{color:'a20a28', description:`**${bot.users.cache.get(user.id).tag}** has 0 <:coinnss:699944502856646716>`}});
        } else {
            return message.channel.send({embed:{color:'a20a28', description:`**${bot.users.cache.get(user.id).tag}** has ${data.money} <:coinnss:699944502856646716>`}});
        }
    })
    
}

module.exports.help = {
    name:"balance",
    aliases:["bal" , "$"]
}