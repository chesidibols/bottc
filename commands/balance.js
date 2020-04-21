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
    var atm1 = message.guild.channels.cache.get('701993773554597929').toString();
    var atm2 = message.guild.channels.cache.get('701993793838252103').toString();
    var atm3 = message.guild.channels.cache.get('701994012285992990').toString();
    if(message.channel.id ==='698536543350161448') {
        //message.author.delete();
        return message.channel.send({embed:{description:`**Please use ATM channel ${atm1} ${atm2} ${atm3} ** `}});
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