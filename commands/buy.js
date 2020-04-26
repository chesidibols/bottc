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



module.exports.run = async (bot, message, args) =>{

    const admin = bot.users.cache.get('323473522179571712');

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

            var pipti_load = 50000;
            var pipti_steam = 50000;
            var wanhandred_load = 100000;
            var tupipti_load = 250000;
            var discord_nitro = 250000;
            var trihandred_load = 300000;
            var tupipti_steam = 315000;
            var paybhandred_load = 500000;
            var discord_boost = 500000;
            var netflix = 500000;
            var Spotify = 500000;
            var paybhandred_steam = 600000;
            
        }  
        
        if(args[0].toLowerCase() == "1")
        {
            if(data.money < pipti_load) {
            return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            }else {
            data.money -= pipti_load;
            data.save().catch(err => console.log(err));
            admin.send(`${message.author.tag} Buy's 50 pesos load`);
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 50 pesos load contact <@noʎʞɔnɟ> for claiming**`}});
            return;
            }
        }
        if(args[0].toLowerCase() == "2")
        {
            if(data.money < pipti_steam){ 
                return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            }else {
            data.money -= pipti_steam;
            data.save().catch(err => console.log(err));
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 50 pesos steam wallet contact <@noʎʞɔnɟ> for claiming**`}})
            return;
            }
        }

        if(args[0].toLowerCase() == "3")
        {
            if(data.money < wanhandred_load){
                 return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}})
            }else {
            data.money -= wanhandred_load;
            data.save().catch(err => console.log(err));
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 100 load contact <@noʎʞɔnɟ> for claiming**`}});
            return;
            }
        }
        if(args[0].toLowerCase() == "4")
        {
            if(data.money < tupipti_load){
                 return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            }else {
            data.money -= tupipti_load;
            data.save().catch(err => console.log(err));
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 250 load contact <@noʎʞɔnɟ> for claiming**`}})
            return;
            }
        }

        if(args[0].toLowerCase() == "5")
        {
            if(data.money < discord_nitro){
             return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            }else{
            data.money -= discord_nitro;
            data.save().catch(err => console.log(err));
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 1 Month discord nitro contact <@noʎʞɔnɟ> for claiming**`}});
            return;
            }
        }
        if(args[0].toLowerCase() == "6")
        {
            if(data.money < trihandred_load){
             return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            }else {
                data.money -= trihandred_load;
                data.save().catch(err => console.log(err));
                message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 300 load contact <@noʎʞɔnɟ> for claiming**`}})
                return;
                }
        }

        if(args[0].toLowerCase() == "7")
        {
            if(data.money < tupipti_steam){
                 return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            }else{
                data.money -= tupipti_steam;
                data.save().catch(err => console.log(err));
                message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 250 steam wallet contact <@noʎʞɔnɟ> for claiming**`}});
                return;
                }
        }
        if(args[0].toLowerCase() == "8")
        {
            if(data.money < paybhandred_load){
                 return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            }else {
            data.money -= paybhandred_load;
            data.save().catch(err => console.log(err));
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 500 load contact <@noʎʞɔnɟ> for claiming**`}})
            return;
            }
        }

        if(args[0].toLowerCase() == "9")
        {
            if(data.money < discord_boost){
                 return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
                }else {   
                data.money -= discord_boost;
                data.save().catch(err => console.log(err));
                message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 1 Month Discord Nitro Boost contact <@noʎʞɔnɟ> for claiming**`}})
                return;
                }
        }
        if(args[0].toLowerCase() == "10")
        {
            if(data.money < netflix){
                 return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
                }else{
                data.money -= netflix;
                data.save().catch(err => console.log(err));
                message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 1 Month netflix access contact <@noʎʞɔnɟ> for claiming**`}})
                return;
                }
        }

        if(args[0].toLowerCase() == "11")
        {
            if(data.money < Spotify ){
                 return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
                }else{
                data.money -= Spotify;
                data.save().catch(err => console.log(err));
                message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 1 Month Spotify Premium contact <@noʎʞɔnɟ> for claiming**`}})
                return;
                }
        }

        if(args[0].toLowerCase() == "12")
        {
            if(data.money < paybhandred_steam){
                 return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            }else{
            data.money -= paybhandred_steam;
            data.save().catch(err => console.log(err));
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 500 Steam Wallet contact <@noʎʞɔnɟ> for claiming**`}})
            return;
            }
        }
     })
}


module.exports.help = {
    name:"buy",
    aliases:["b"]
}