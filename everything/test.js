const Discord = require("discord.js");
const client = new Discord.Client();

// Set the prefix
let prefix = "?";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "blackmarket")) {
    message.channel.send("```weed 100```");
    message.channel.send('```meth $300```');
    message.channel.send('```cocaine $200```');
    message.channel.send('```unmarked gun $2000```');
    message.channel.send('```moonshine $300```');
    message.channel.send('```cadaver $10000```');
    message.channel.send('```pills $80```');
    message.channel.send('```mushrooms $150```');

  } else
  if (message.content.startsWith(prefix + "")) {
    message.channel.send("");
  }
});




client.on('ready', () => {
    console.log('test'); 
 });


client.login("MzcyNTQ0NjA0MDM1MzUwNTMx.Dhe_ZA.zVXmXCBITSX5eEM5T_pzoGHzzQY");