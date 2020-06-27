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

    Data.updateMany({
        userID:user.id
    })

}

module.exports.help = {
    name:"pr",
    aliases:["disableddddd"]
}