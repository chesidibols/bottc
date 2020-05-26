const Discord =require("discord.js");
const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");

//Connect to database
mongoose.connect(botconfig.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports.run = async (bot, message, args) =>{
    let thisRole = message.mentions.first;
    message.guild.members.fetch().then(members => {
    const theRole = members.filter(mmbr => mmbr.roles.cache.get(thisRole)).map(m => m.user.tag).join('\n')
    })
    console.log(theRole);

}

module.exports.help = {
    name:"asd",
    aliases:["asd"]
}