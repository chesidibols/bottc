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

            if(data.money <= Nickname) return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            if(data.money <= ColorRole) return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            //if(message.member.roles.cache.id === LGBT_ROLE.id) return message.channel.send({embed:{color:'a20a28', description:"**You have this role**"}});
            //if(message.member.roles.cache.id === HOST.id) return message.channel.send({embed:{color:'a20a28', description:"**You have this role**"}});
        }  
        
        if(args[0].toLowerCase() == "1")
        {
            
            data.money -= pipti_load;
            data.save().catch(err => console.log(err));
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 50 pesos load contact <@noʎʞɔnɟ#0001> for claiming**`}});
            return;
        }
        if(args[0].toLowerCase() == "2")
        {
            
            data.money -= pipti_steam;
            data.save().catch(err => console.log(err));
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 50 pesos steam wallet contact <@noʎʞɔnɟ#0001> for claiming**`}})
            return;
        }

        if(args[0].toLowerCase() == "3")
        {
            
            data.money -= wanhandred_load;
            data.save().catch(err => console.log(err));
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 100 load contact <@noʎʞɔnɟ#0001> for claiming**`}});
            return;
        }
        if(args[0].toLowerCase() == "4")
        {
            
            data.money -= tupipti_load;
            data.save().catch(err => console.log(err));
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 250 load contact <@noʎʞɔnɟ#0001> for claiming**`}})
            return;
        }

        if(args[0].toLowerCase() == "5")
        {
            
            data.money -= discord_nitro;
            data.save().catch(err => console.log(err));
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 1 Month discord nitro contact <@noʎʞɔnɟ#0001> for claiming**`}});
            return;
        }
        if(args[0].toLowerCase() == "6")
        {
            
            data.money -= trihandred_load;
            data.save().catch(err => console.log(err));
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 300 load contact <@noʎʞɔnɟ#0001> for claiming**`}})
            return;
        }

        if(args[0].toLowerCase() == "7")
        {
            
            data.money -= tupipti_steam;
            data.save().catch(err => console.log(err));
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 250 steam wallet contact <@noʎʞɔnɟ#0001> for claiming**`}});
            return;
        }
        if(args[0].toLowerCase() == "8")
        {
            
            data.money -= paybhandred_load;
            data.save().catch(err => console.log(err));
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 500 load contact <@noʎʞɔnɟ#0001> for claiming**`}})
            return;
        }

        if(args[0].toLowerCase() == "9")
        {
            
            data.money -= discord_boost;
            data.save().catch(err => console.log(err));
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 1 Month Discord Nitro Boost contact <@noʎʞɔnɟ#0001> for claiming**`}})
            return;
        }
        if(args[0].toLowerCase() == "10")
        {
            
            data.money -= netflix;
            data.save().catch(err => console.log(err));
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 1 Month netflix access contact <@noʎʞɔnɟ#0001> for claiming**`}})
            return;
        }

        if(args[0].toLowerCase() == "11")
        {
            
            data.money -= Spotify;
            data.save().catch(err => console.log(err));
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 1 Month Spotify Premium contact <@noʎʞɔnɟ#0001> for claiming**`}})
            return;
        }

        if(args[0].toLowerCase() == "12")
        {
            
            data.money -= paybhandred_steam;
            data.save().catch(err => console.log(err));
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 500 Steam Wallet contact <@noʎʞɔnɟ#0001> for claiming**`}})
            return;
        }
     })
}


module.exports.help = {
    name:"buy",
    aliases:["b"]
}