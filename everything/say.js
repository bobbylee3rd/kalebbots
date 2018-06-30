34//Discord.js Version 12.0.0 MASTER
//Npm Discord.js Pakage
const Discord = require('discord.js');
const client = new Discord.Client();

let PREFIX = '/' 

client.on('message', message => { 

    if (message.content.startsWith(PREFIX + 'Userinfo')) {

        const UserInfo = new Discord.MessageEmbed()

        message.channel.send(UserInfo);
    }
});

client.login('MzcyNTQ0NjA0MDM1MzUwNTMx.Dffm9A.cetLVyDACNyUaovDZKrnz9SgdJI');