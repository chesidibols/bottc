const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true , partials:['MESSAGE','REACTION']});
const botconfig = require ("./botconfig.json");
const fs = require ("fs")
const mongoose = require("mongoose");
const assert = require("assert");

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

//Connect to database
mongoose.connect(botconfig.mongoPass, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex:true,
    useUnifiedTopology: true
    
});
const dblogs = bot.channels.cache.get('772401083384856596');
// MODELS
//const { deleteOne } = require("../models/data.js");
const Data = require("./models/data.js");

// READ COMMAND FOLDER
fs.readdir("./commands/", (err, files) =>{
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0 ){
        console.log("Couldnt find any commands!")
        return;
    }
    jsfile.forEach((f) =>{
        let props = require(`./commands/${f}`)
        bot.commands.set(props.help.name, props);

        props.help.aliases.forEach(alias =>{
            bot.aliases.set(alias, props.help.name);
        })
    })
})


// BOT ONLINE MESSAGE & ACTIVITY MESSAGE
bot.on("ready" , async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);
    bot.user.setActivity(`Wacthing you because I love you!`);
})

bot.on("guildMemberAdd", function (member) {
    console.log(`a user joins a guild: ${member}`);
    const newData = new Data({
        name: member,
        userID: member.id,
        lb:"all",
        money: 0,
        daily: 0,
    })
    newData.save();
    console.log(`${member} was created to the database`)
});

bot.on("guildMemberRemove", function (member) {
    
    console.log(`a member leaves a guild, or is kicked: ${member.tag}`);
            Data.findOneAndRemove({userID:member.id}).then(function(){
                Data.findOne({userID:member.id}).then(function(result){
                assert(result === null)
                console.log(`${member} name was deleted to the database`)
                return;
                })
            });
});

bot.on("message" , async message => {

   // let dblogs = bot.channels.cache.get('');
    // CHECK CHANNEL TYPE
    if(message.channel.type === "dm"){
       // if(message.content.startsWith('confess'))
        let userContent = message.content;
        bot.channels.cache.get('759070681857523773').send(userContent);
    }
    if(message.author.bot) return;

    /*if(message.content.toLowerCase("Hi"))
    {
        Data.findOne({
            userID: message.author.id
        }, (err, userData) =>{
            if(err) console.log(err);
            if(userData)
            {
                let thisUser = message.author.tag;
                Data.findOneAndUpdate({userID:message.author.id},{name:thisUser}).then(function(){
                    Data.findOne({userID:message.author.id}).then(function(result){
                    assert(result.name === thisUser)
                    console.log(`${thisUser} name was updated to the database`)
                    //dblogs.send(`${thisUser} name was updated to the database`)
                    return;
                    })
                });
            }
        })
    }


    //NO COMMAND IN LOBBY CHANNEL
   /* if(message.channel.id === "699367732923203616" || message.channel.id ==="711554230661677056" || message.channel.id === "707966547880312873" ||  message.channel.id === "698587686486671502"){
        if(message.content.startsWith("tc."))
        {
            message.delete();
            message.channel.send({embed:{color:'a20a28', description:"**PLEASE USE SPECIFIC CHANNELS FOR COMMANDS THANKYOU!**"}});
            return;
        }
    }*/

    // SET PREFIX
    let prefix = botconfig.prefix;

    // CHECK PREFIX, DEFINE ARGS & COMMAND
    if(!message.content.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd;
    cmd = args.shift().toLowerCase();
    let command;
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);

    // RUN COMMAND
    if(bot.commands.has(cmd)){
        command = bot.commands.get(cmd);
    } else if (bot.aliases.has(cmd)){
        command = bot.commands.get(bot.aliases.get(cmd));
    }
    try {
        command.run(bot, message, args);
    } catch (e) {
        return;
    }
})



bot.login(botconfig.token);