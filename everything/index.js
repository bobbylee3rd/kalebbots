const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  if (message.content.startsWith('ping')) {
    message.channel.send('pong');
  }
});

client.on('message', message => {
  if (message.content.startsWith('rp')) {
    message.channel.send('@everyony rp will be soon so get ready');
  }
});

client.on('message', message => {
    if (message.content.startsWith('hello')) {
      message.channel.send('hi there');
    }
});

client.on('message', message => {
  if (message.content.startsWith('711web')) {
    message.channel.send('https://711rpserver.wixsite.com/website');
  }
});

client.on('message', message => {
  if (message.content.startsWith('forms')) {
    message.channel.send('https://711rpserver.wixsite.com/website/account/new-page');
  }
});

client.on('message', message => {
  if (message.content.startsWith('cad')) {
    message.channel.send('https://711rpcad.bubbleapps.io/');
  }
     
});

client.on('message', message => {
    if (message.content.startsWith('allowed-cars')) {
      message.channel.send('https://media.discordapp.net/attachments/372068734732599297/373015020931383296/GTA-V-nonrare-vehicles.png?width=982&height=614');
    }
});

client.on('message', message => {
  if (message.content.startsWith('darth vader')) {
    message.channel.send('I am 711rp bot');
  }
});


client.on('message', message => {
  if (message.content.startsWith('im gonna kill myself')) {
    message.channel.send('do it no one cares');
  }
});

client.on('message', message => {
  if (message.content.startsWith('interview')) {
    message.channel.send('please wait for an interview to be ready, thank you for your patience');
  }
});


client.on('ready', () => {
   console.log('I am ready!'); 
});

client.login('MzcyNTQ0NjA0MDM1MzUwNTMx.Dhe_ZA.zVXmXCBITSX5eEM5T_pzoGHzzQY');