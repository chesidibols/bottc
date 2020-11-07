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

    const daiquiri1 = "704649539025633356";
    const blue_hawaii1 = "704649829460082759";
    const mojito1 = "704649703165395054";
    const blue_lagoon1 = "703607741213704263";
    const miami_bice1 = "704649910821060668";
    const hurricane1 = "704649919432228926";
    const purple_bage1 = "704649930924490791";

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
            return message.channel.send({embed:{color:'a20a28',description:"you don't have that much <:coinns:715103658601218088>"}});
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

            var daiquiri = 10000;
            var blue_hawaii = 10000;
            var mojito = 10000;
            var blue_lagoon = 10000;
            var miami_bice = 10000;
            var hurricane = 10000;
            var purple_bage = 10000;
            
        }  
        
       /* if(args[0].toLowerCase() == "1")
        {
            if(data.money < pipti_load) {
            return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            }else {
            data.money -= pipti_load;
            data.save().catch(err => console.log(err));
            admin.send(`${message.author.tag} Buy's 50 pesos load`);
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 50 pesos load **`}});
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
            admin.send(`${message.author.tag} Buy's 50 steam load`);
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 50 pesos steam wallet **`}})
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
            admin.send(`${message.author.tag} Buy's 100 pesos load`);
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 100 load **`}});
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
            admin.send(`${message.author.tag} Buy's 250 pesos load`);
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 250 load **`}})
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
            admin.send(`${message.author.tag} Buy's Discord Nitro`);
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 1 Month discord nitro **`}});
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
                admin.send(`${message.author.tag} Buy's 300 pesos load`);
                message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 300 load **`}})
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
                admin.send(`${message.author.tag} Buy's 250 steam`);
                message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 250 steam wallet **`}});
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
            admin.send(`${message.author.tag} Buy's 500 pesos load`);
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 500 load **`}})
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
                admin.send(`${message.author.tag} Buy's Discord Boost`);
                message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 1 Month Discord Nitro Boost **`}})
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
                admin.send(`${message.author.tag} Buy's Netflix Subscription`);
                message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 1 Month netflix access **`}})
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
                admin.send(`${message.author.tag} Buy's Spotify subscription`);
                message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 1 Month Spotify Premium \**`}})
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
            admin.send(`${message.author.tag} Buy's 500 Steam load`);
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 500 Steam Wallet.**`}})
            return;
            }
        }*/

        if(args[0].toLowerCase() == "1")
        {
            if(data.money < daiquiri){
                 return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            }else{
            data.money -= daiquiri;
            data.save().catch(err => console.log(err));
            message.member.roles.add(daiquiri1);
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 𝔇𝔞𝔦𝔮𝔲𝔦𝔯𝔦 color role.**`}})
            return;
            }
        }

        if(args[0].toLowerCase() == "2")
        {
            if(data.money < blue_hawaii){
                 return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            }else{
            data.money -= blue_hawaii;
            data.save().catch(err => console.log(err));
            message.member.roles.add(blue_hawaii1);
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 𝕭𝖑𝖚𝖊 𝕳𝖆𝖜𝖆𝖎𝖎 color Role.**`}})
            return;
            }
        }

        if(args[0].toLowerCase() == "3")
        {
            if(data.money < mojito){
                 return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            }else{
            data.money -= mojito;
            data.save().catch(err => console.log(err));
            message.member.roles.add(mojito1);
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 𝕸𝖔𝖏𝖎𝖙𝖔 color Role.**`}})
            return;
            }
        }

        if(args[0].toLowerCase() == "4")
        {
            if(data.money < blue_lagoon){
                 return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            }else{
            data.money -= blue_lagoon;
            data.save().catch(err => console.log(err));
            message.member.roles.add(blue_lagoon1);
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 𝕭𝖑𝖚𝖊 𝕷𝖆𝖌𝖔𝖔𝖓 color role.**`}})
            return;
            }
        }

        if(args[0].toLowerCase() == "5")
        {
            if(data.money < miami_bice){
                 return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            }else{
            data.money -= miami_bice;
            data.save().catch(err => console.log(err));
            message.member.roles.add(miami_bice1);
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 𝕸𝖎𝖆𝖒𝖎 𝖁𝖎𝖈𝖊 color role.**`}})
            return;
            }
        }

        if(args[0].toLowerCase() == "6")
        {
            if(data.money < hurricane){
                 return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            }else{
            data.money -= hurricane;
            data.save().catch(err => console.log(err));
            message.member.roles.add(hurricane1);
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 𝕳𝖚𝖗𝖗𝖎𝖈𝖆𝖓𝖊 color role.**`}})
            return;
            }
        }

        if(args[0].toLowerCase() == "7")
        {
            if(data.money < purple_bage){
                 return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});
            }else{
            data.money -= purple_bage;
            data.save().catch(err => console.log(err));
            message.member.roles.add(purple_bage1);
            message.channel.send({embed:{color:'a20a28', description:`**Congratulations you have 𝕻𝖚𝖗𝖕𝖑𝖊 𝕳𝖆𝖟𝖊 color role.**`}})
            return;
            }
        }
     })
}


module.exports.help = {
    name:"bawaltangiunaa'sdasdaw",
    aliases:["bsssss"]
}
