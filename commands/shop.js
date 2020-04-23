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
const HOST = "701318351930261574";

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
            var role_HOST = 2000;

            if(data.money < role_LGBT, role_HOST) return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            
            
        }  
        
        if(args[0].toLowerCase() == "1")
        {
            if(message.member.roles.cache.id === LGBT_ROLE.id) return message.channel.send({embed:{color:'a20a28', description:"**You have this role**"}});
            data.money -= role_LGBT;
            data.save().catch(err => console.log(err));
            message.member.roles.add(LGBT_ROLE);
            message.channel.send("added");
            return;
        }
        if(args[0].toLowerCase() == "2")
        {
            if(!message.member.roles.cache.id === HOST.id) return message.channel.send({embed:{color:'a20a28', description:"**You have this role**"}});
            data.money -= role_HOST;
            data.save().catch(err => console.log(err));
            message.member.roles.add(HOST);
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