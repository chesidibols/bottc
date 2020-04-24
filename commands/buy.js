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
const Change_Nickname = "703307108312940684";
const Color_Role = "703307935937331291";

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

            var Nickname = 100000;
            var ColorRole = 100000;

            if(data.money <= Nickname) return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            if(data.money <= ColorRole) return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            //if(message.member.roles.cache.id === LGBT_ROLE.id) return message.channel.send({embed:{color:'a20a28', description:"**You have this role**"}});
            //if(message.member.roles.cache.id === HOST.id) return message.channel.send({embed:{color:'a20a28', description:"**You have this role**"}});
        }  
        
        if(args[0].toLowerCase() == "1")
        {
            
            data.money -= Nickname;
            data.save().catch(err => console.log(err));
            message.member.roles.add(Change_Nickname);
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have the <${Change_Nickname}>**`}});
            return;
        }
        if(args[0].toLowerCase() == "2")
        {
            
            data.money -= ColorRole;
            data.save().catch(err => console.log(err));
            message.member.roles.add(Color_Role);
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have the <${Color_Role}>**`}})
            return;
        }
     }
    
    )
}


module.exports.help = {
    name:"buy",
    aliases:["b"]
}