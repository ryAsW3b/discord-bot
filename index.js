
const Discord = require('discord.js');
const bot = new Discord.Client()
var prefix ='+';

bot.on('ready', () => {
    console.log(`pv est en Ligne`);
    bot.user.setActivity(`;`, { type: 'STREAMING', url: 'https://twitch.tv/pv'}).catch(console.error);
  });
  
  bot.on('message', message => {
    let args = message.content.slice(prefix.length).split(' '); 


    if(message.content === "+fennec") {
      message.delete()
      const embed = new Discord.MessageEmbed()
      .setTitle("Rôles ³ ")
      .setDescription('Veuillez choisir les rôles ci-dessous qui vous correspondent\n\n - <@&831210291400409141>\n\n- <@&831210213406670899>')
      .setImage('https://i.imgur.com/OTdChQw.gif')
      message.channel.send({embed: embed}).then(embedMessage => {
      embedMessage.react("<:17:831274892744720415>");
      embedMessage.react("<:18:831275504979279902>");
      })
    }

    bot.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
    
      if (user.bot) return;
      if (!reaction.message.guild) return;
    
      if (reaction.message.channel.id === "831210377077063681") {
        if (reaction.emoji.id === '831274892744720415'){
          await reaction.message.guild.members.cache.get(user.id).roles.add("831276716830883850")
    
    
        }
      }
    })
    
      bot.on('messageReactionRemove', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
      
        if (user.bot) return;
        if (!reaction.message.guild) return;
      
        if (reaction.message.channel.id === "831210377077063681") {
          if (reaction.emoji.id === '831274892744720415'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("831276716830883850")
          }
        }
          })

          bot.on("messageReactionAdd", async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
          831275504979279902
            if (user.bot) return;
            if (!reaction.message.guild) return;
          
            if (reaction.message.channel.id === "831210377077063681") {
              if (reaction.emoji.id === '831275504979279902'){
                await reaction.message.guild.members.cache.get(user.id).roles.add("831276783521234994")
          
          
              }
            }
          })
          
            bot.on('messageReactionRemove', async (reaction, user) => {
              if (reaction.message.partial) await reaction.message.fetch();
              if (reaction.partial) await reaction.fetch();
            
              if (user.bot) return;
              if (!reaction.message.guild) return;
            
              if (reaction.message.channel.id === "831210377077063681") {
                if (reaction.emoji.id === '831275504979279902'){
                  await reaction.message.guild.members.cache.get(user.id).roles.remove("831276783521234994")
                }
              }
                })





    if(message.content === "+verif") {
      message.delete()
      const embed = new Discord.MessageEmbed()
      .setTitle(`Veuillez cliquer sur la réaction pour accéder au serveur`)
      .setImage('https://cdn164.picsart.com/229340295016202.gif?to=min&r=640')
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

  

    if(message.content === "+rrrrrrrrrrrrrrrrrrrr") {
      message.delete()
      const embed = new Discord.MessageEmbed()
      .setTitle('**Règles**')
      .setDescription(`Bienvenue sur La Tour <a:keur:765995980083560522>\n\nVoici quelques règles pas très compliquées mais à absolument respecter\n\nAfin d'avoir une bonne ambiance sur le serveur Discord, Merci de bien lire le règlement !\n\n\n Bonne lecture !\n\n\n<a:important:765695970519678997> __**Ne pas spam sur le serveur sous peine d'un bannissement.**__ <a:important:765695970519678997>\n\n\n **Il est strictement interdit de diffuser des informations privées sans l’accord de la personne concernée sous peine d'un bannissement.**\n\n<a:verification:765685434122240011> - __**Le respect.**__\n\n**Je vous pris de respecter toutes personnes, même si elles sont différentes.**\n\n<a:verification:765685434122240011> -** Les commandes doivent être effectuées uniquement dans le salon <#765270178572795954>**\n\n<a:verification:765685434122240011> - **Les contenus pornographiques et autres contenus extrêmes sont interdits sous peines d'un bannissement.**\n\n<a:verification:765685434122240011> - **Toutes personnes qui pub mp un membre du serveur sera banni.**\n\n<a:verification:765685434122240011> - **Toutes personnes ne respectant pas les conditions épinglés dans le règlement il sera mute 5 heures.**\n\n<a:verification:765685434122240011> - **Toutes personnes voulant être staff sur le serveur, veuillez faire une candidature en DM tout en respectant les conditions.**\n\n__**Merci de cocher la réaction afin de montrer que vous avez bien lu le règlement.**__`)
      .setImage('https://64.media.tumblr.com/8a1349de3de90e6a9575ec633330a657/tumblr_nvnh8iNsSh1txt22yo1_500.gif')
      .setColor(0xFF0000)
      message.channel.send(embed);
    }

    if(message.content === "++ddddddddddddd") {
      message.delete()
      const embed = new Discord.MessageEmbed()
      .setTitle('**Recrutement**')
      .setDescription(`Pour les recrutements, ça va se passer sous forme de candidature, vous devez juste remplir toutes ces conditions pour être recruté.\n\n - Conditions :\n\n <a:verif:766033305036390412> - Être actif en vocal et à l’écrit\n\n<a:verif:766033305036390412> - Avoir un minimum de maturité\n\n<a:verif:766033305036390412> - Savoir être juste avec tout le monde\n\n<a:verif:766033305036390412> - Avoir 13 ans minimum ou plus\n\nPour ceux qui veulent être recruté, vous devez envoyez un message a <@460798322953814026> ou <@707227204781867028>. Nous sommes là pour toute autres questions si besoin ! <a:keur:765995980083560522>  `)
        .setImage('https://data.whicdn.com/images/288936334/original.gif')
      message.channel.send(embed);
    }

    if(message.content ==="++dddddd") {
      message.delete()
      const embed = new Discord.MessageEmbed()
          .setTitle("Rôles ¹")
          .setDescription("Veuillez choisir les rôles ci-dessous qui correspondent a votre situation amoureuse\n\n - <@&831210291400409141>\n\n- <@&831210213406670899>")
          .setImage("https://acegif.com/wp-content/uploads/anime-love-13.gif")
          message.channel.send({embed: embed}).then(embedMessage => {
            embedMessage.react("<a:coeur:831212347947221033>");
            embedMessage.react("<a:broken:831212525827784723>");
        });
    }

    bot.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
    
      if (user.bot) return;
      if (!reaction.message.guild) return;
    
      if (reaction.message.channel.id === "831136151615963136") {
        if (reaction.emoji.id === '831212347947221033'){
          await reaction.message.guild.members.cache.get(user.id).roles.add("831210291400409141")
    
    
        }
      }
    })
    
      bot.on('messageReactionRemove', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
      
        if (user.bot) return;
        if (!reaction.message.guild) return;
      
        if (reaction.message.channel.id === "831136151615963136") {
          if (reaction.emoji.id === '831212347947221033'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("831210291400409141")
          }
        }
          })



          bot.on("messageReactionAdd", async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
          
            if (user.bot) return;
            if (!reaction.message.guild) return;
          
            if (reaction.message.channel.id === "831136151615963136") {
              if (reaction.emoji.id === '831212525827784723'){
                await reaction.message.guild.members.cache.get(user.id).roles.add("831210213406670899")
          
          
              }
            }
          })
          
            bot.on('messageReactionRemove', async (reaction, user) => {
              if (reaction.message.partial) await reaction.message.fetch();
              if (reaction.partial) await reaction.fetch();
            
              if (user.bot) return;
              if (!reaction.message.guild) return;
            
              if (reaction.message.channel.id === "831136151615963136") {
                if (reaction.emoji.id === '831212525827784723'){
                  await reaction.message.guild.members.cache.get(user.id).roles.remove("831210213406670899")
                }
              }
                })

 //


    if(message.content ==="++sss") {
      message.delete()
      const embed = new Discord.MessageEmbed()
          .setTitle("Rôles ²")
          .setDescription("Veuillez choisir les rôles ci-dessous qui correspondent a votre sexe\n\n - <@&830836369411538984>\n\n- <@&830837375008636928>")
          .setImage("https://pa1.narvii.com/5663/a33805ea8fbd406ce58e6f678b0b89bf1c1722ac_hq.gif")
          message.channel.send({embed: embed}).then(embedMessage => {
            embedMessage.react("<:homme:830901856297287711>");
            embedMessage.react("<:femme:830902905321685052>");
        });
    }



     //



    bot.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
    
      if (user.bot) return;
      if (!reaction.message.guild) return;
    
      if (reaction.message.channel.id === "830817053878911006") {
        if (reaction.emoji.id === '830901856297287711'){
          await reaction.message.guild.members.cache.get(user.id).roles.add("830836369411538984")
    
    
        }
      }
    })
    
      bot.on('messageReactionRemove', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
      
        if (user.bot) return;
        if (!reaction.message.guild) return;
      
        if (reaction.message.channel.id === "830817053878911006") {
          if (reaction.emoji.id === '830901856297287711'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("830836369411538984")
          }
        }
          })




           //




          bot.on("messageReactionAdd", async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
          
            if (user.bot) return;
            if (!reaction.message.guild) return;
          
            if (reaction.message.channel.id === "830817053878911006") {
              if (reaction.emoji.id === '830902905321685052'){
                await reaction.message.guild.members.cache.get(user.id).roles.add("830837375008636928")
          
          
              }
            }
          })



            bot.on('messageReactionRemove', async (reaction, user) => {
              if (reaction.message.partial) await reaction.message.fetch();
              if (reaction.partial) await reaction.fetch();
            
              if (user.bot) return;
              if (!reaction.message.guild) return;
            
              if (reaction.message.channel.id === "830817053878911006") {
                if (reaction.emoji.id === '830902905321685052'){
                  await reaction.message.guild.members.cache.get(user.id).roles.remove("830837375008636928")
                }
              }
                })


        
})


  bot.login(process.env.token)