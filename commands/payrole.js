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
    let memID = message.guild.roles.cache.get(role.id).members.map(m => m.user.id).join(' ').split(' ')

    Data.find({
        userID: memID
    }).sort([
        ['money' , 'descending']
    ]).exec((err, res) =>{
        if (err) console.log(err)
        for (i = 0; i < res.length; i++)
            {
                Data.findOne({
                    userID:res[i].userID
                },(err , userData) =>{
                    if(err) console.log(err);
                    if(userData)
                    {
                        userData.money +=parseInt(args)[0];
                        userData.save().catch(err =>console.log(err));
                    }
                })
            }
        })


}

module.exports.help = {
    name:"pr",
    aliases:["disableddddd"]
}