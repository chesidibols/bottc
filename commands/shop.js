const Discord =require("discord.js");
const botconfig = require("../botconfig.json");
const mongoose = require("mongoose");

//Connect to database
mongoose.connect(botconfig.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// MODELS
const Data = require("../models/data.js");

//roles
const LGBT_ROLE = "700338294814408820";

module.exports.run = async (bot, message, args) =>{

    Data.findOne({
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
            return message.channel.send({embed:{color:'a20a28',description:"you don't have that much <:coinns:699944502856646716>"}});
        } else {

            var role_LGBT = 1000;

            if(data.money <= 0) return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});

        }  
        
        if(args[0].toLowerCase() == "1"){
            data.money -= role_LGBT;
            data.save().catch(err => console.log(err));
            message.member.roles.add(LGBT_ROLE);
            message.channel.send("added");
            return;
        }
     }
    
    )
}


module.exports.help = {
    name:"buy",
    aliases:["asd"]
}