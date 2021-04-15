
const Discord = require('discord.js');
const bot = new Discord.Client()
var prefix ='&';

bot.on('ready', () => {
    console.log(`pv est en Ligne`);
    bot.user.setActivity(`;`, { type: 'STREAMING', url: 'https://twitch.tv/pv'}).catch(console.error);
  });
  
  bot.on('message', message => {
    let args = message.content.slice(prefix.length).split(' '); 


    if(message.content === "&verif") {
      message.delete()
      const embed = new Discord.MessageEmbed()
      .setTitle(`Veuillez cliquer sur la réaction pour accéder au serveur`)
      .setImage('https://cdn.discordapp.com/attachments/831136001287651339/831263428592009226/La_Tour_2.gif')
      message.channel.send({embed: embed}).then(embedMessage => {
      embedMessage.react("<a:rougeverif:765995502307115008>");
      })
    }
  

    bot.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
    
      if (user.bot) return;
      if (!reaction.message.guild) return;
    
      if (reaction.message.channel.id === "748991370911547592") {
        if (reaction.emoji.id === '765995502307115008'){
          await reaction.message.guild.members.cache.get(user.id).roles.add("830816042569826335")
    
    
        }
      }
    })
    
      bot.on('messageReactionRemove', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
      
        if (user.bot) return;
        if (!reaction.message.guild) return;
      
        if (reaction.message.channel.id === "748991370911547592") {
          if (reaction.emoji.id === '765995502307115008'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("830816042569826335")
          }
        }
          })

  

        })


  bot.login(process.env.token)