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
    let geChannel = "701993773554597929";
    if(message.channel.id != "701993773554597929")
    {
        message.channel.send({embed:{color:'a20a28', description:`**Please Use <#${geChannel.toString()}> channel.**`}}); 
        return;
    }

    Data.findOne({
        userID: message.author.id
    },(err, data) => {
        if(err) console.log(err);
        if(data)
        {
            let thisUser = message.author.tag;
            Data.findOneAndUpdate({userID:message.author.id},{name:thisUser}).then(function(){
                Data.findOne({userID:message.author.id}).then(function(result){
                assert(result.name === thisUser)
                console.log(`${thisUser} name was updated to the database`)
                return;
                })
            });
        }
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
            var maxBet=1000;
    
            if(data.money <= 0) return message.channel.send({embed:{color:'a20a28',description:"You don't have any money"}});

            if(!args[0]) return message.channel.send({embed:{color:'a20a28',description:"please specify a bet."}});

            if(args[0].toLowerCase() == "all") args[0] = data.money;

            try{
                 var bet = parseFloat(args[0]);
          } catch{
            return message.channel.send({embed:{color:'a20a28',description:"you can only enter whole number"}});
        }

            if(bet != Math.floor(bet)) return message.channel.send({embed:{color:'a20a28',description:"you can only enter whole number"}});
    
            if(data.money < bet) return message.channel.send({embed:{color:'a20a28',description:"you don't have that much <:coinns:715103658601218088>"}});
  
            if(bet > maxBet) return message.channel.send({embed:{color:'a20a28',description:`the maximum bet is ${maxBet.toLocaleString()} <:coinns:715103658601218088>`}});

            let chances = ["win", "win","lose","lose", "lose", "lose", "lose", "lose"];
            var pick = chances[Math.floor(Math.random() * chances.length )];

            if(pick == "lose"){
             data.money -= bet;
             data.save().catch(err => console.log(err));
            return message.channel.send({embed:{color:'a20a28',description:`You lose. New balance: ${(data.money).toLocaleString()} <:coinns:715103658601218088>`}});
        }else{
                data.money += bet+bet;
                data.save().catch(err => console.log(err));
            return message.channel.send({embed:{color:'a20a28',description:`**You win!. New balance: ${(data.money).toLocaleString()}** <:coinns:715103658601218088>`}});
    }
        }
    })

    
}

module.exports.help = {
    name:"sugal",
    aliases:["roll"]
}