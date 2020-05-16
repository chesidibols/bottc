const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true , partials:['MESSAGE']});
const botconfig = require ("./botconfig.json");
const fs = require ("fs")

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

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


bot.on("message" , async message => {

    // CHECK CHANNEL TYPE
    if(message.channel.type === "dm") return;
    if(message.author.bot) return;

    //NO COMMAND IN LOBBY CHANNEL
    if(message.channel.id === "699367732923203616"){
        if(message.content.startsWith("tc."))
        {
            message.delete();
            message.channel.send({embed:{color:'a20a28', description:"**PLEASE USE SPECIFIC CHANNELS FOR COMMANDS THANKYOU!**"}});
            return;
        }
    }
    


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

bot.on('messageReactionAdd', async (reaction, user) =>{

    let applyRole = async() => {
        let emojiName = reaction.emoji.name;
        let role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.find(member => member.id === user.id);
        try {
            if(role && member){
                console.log("Role and member found.");
                await member.role.add(role);
            }
        }
        catch (err){
            console.log(err);
        }
    }

    if(reaction.message.partial)
    {
        let msg = await reaction.message.fetch();
        if(msg.id === "711285933403537529");
        console.log("cached");
        applyRole();
    }
    else
    {
        
        console.log("Not a partial.");
        if(msg.id === "711285933403537529");
        console.log(true);
        applyRole();
    }
})
bot.login(botconfig.token);