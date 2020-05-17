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
   let logsCoin = bot.channels.cache.get('711554230661677056');
    
    if(!message.member.roles.cache.get('701904860848586803')) {

        return message.channel.send({embed:{color:'a20a28', description:"**You don't have the permission to this command**"}});

    }
    let user = message.mentions.members.first() || bot.users.cache.get(args[0]);
    if(!user) return message.channel.send({embed:{color:'a20a28', description:"**Sorry, couldn't find that user.**"}});


    Data.findOne({
        userID: user.id
    }, (err, userData) =>{
        if(err) console.log(err);

        if(!args[1]) return message.channel.send({embed:{color:'a20a28', description:"**Please specify the ammount you want to pay**"}});

        if(args[1] != Math.floor(args[1])) return message.channel.send({embed:{color:'a20a28',description:"**OOPS! YOU CAN'T PAY WITH LETTERS :P**"}});

        if(parseInt(args[1]) < 10) return message.channel.send({embed:{color:'a20a28', description:"You cannot pay less than 10 <:coinnss:699944502856646716>"}});

        if(!userData) {
            const newData = new Data({
                name: bot.users.cache.get(user.id).tag,
                userID: message.author.id,
                lb:"all",
                money: parseInt(args[1]),
                daily: 0,
            })
            newData.save().catch(err => console.log(err));
        } else {
            userData.money -= parseInt(args[1]);
            userData.save().catch(err => console.log(err));
        }
        
        message.channel.send({embed:{color:'a20a28', description:`**${message.author.username}** removed ${args[1]}<:coinns:699944502856646716> to **${bot.users.cache.get(user.id).tag}**`}});
        logsCoin.send({embed:{color:'a20a28', description:`**${message.author.username}** removed ${args[1]}<:coinns:699944502856646716> to **${bot.users.cache.get(user.id).tag}**`}});
        return;
    })
}

module.exports.help = {
    name:"devrcoins",
    aliases:["devr"]
}