const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");

//Connect to database
mongoose.connect(botconfig.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// MODELS
const Data = require("../models/data.js");

module.exports.run = async (bot, message, args) =>{

    if(message.channel.id != "713604164781080606")
    {
        return message.channel.send({embed:{color:'a20a28',description:"**PLEASE USE <#jakenpoy> channel thanks!**"}});
    }
    
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
            var award = 10;

            if(args[0].toLowerCase() === "rock")
            {
                let chances = ["win","lose"];
                var pick = chances[Math.floor(Math.random() * chances.length )];

                if(pick == "lose"){
                    message.channel.send({embed:{color:'a20a28',description:`📃 **You lose**`}});
                    return;
                }else{
                    data.money += award;
                data.save().catch(err => console.log(err));
                message.channel.send({embed:{color:'a20a28',description:`✂ **You win!. New balance: ${(data.money).toLocaleString()}** <:coinns:699944502856646716>`}});
                return;
                }
            }

            if(args[0].toLowerCase() === "paper")
            {
                let chances = ["win","lose"];
                var pick = chances[Math.floor(Math.random() * chances.length )];

                if(pick == "lose"){
                    message.channel.send({embed:{color:'a20a28',description:`✂ **You lose**`}});
                    return;
                }else{
                    data.money += award;
                data.save().catch(err => console.log(err));
                message.channel.send({embed:{color:'a20a28',description:`👊 **You win!. New balance: ${(data.money).toLocaleString()}** <:coinns:699944502856646716>`}});
                return;
                }
            }

            if(args[0].toLowerCase() === "scissor")
            {
                let chances = ["win","lose"];
                var pick = chances[Math.floor(Math.random() * chances.length )];

                if(pick == "lose"){
                    message.channel.send({embed:{color:'a20a28',description:`👊 **You lose**`}});
                    return;
                }else{
                    data.money += award;
                data.save().catch(err => console.log(err));
                message.channel.send({embed:{color:'a20a28',description:`📃 **You win!. New balance: ${(data.money).toLocaleString()}** <:coinns:699944502856646716>`}});
                return;
                }
            }

            
        }
    })

    
}

module.exports.help = {
    name:"jakenpoy ",
    aliases:["jnp"]
}