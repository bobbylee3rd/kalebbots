// Call Packages
const Discord = require('discord.js');
const economy = require('discord-eco');

// Define client for Discord
const client = new Discord.Client();

// This will run when a message is recieved...
client.on('message', message => {

    // Variables
    let prefix = '~';
    let msg = message.content.toUpperCase();

    // Commands

    // Ping - Let's create a quick command to make sure everything is working!
    if (message.content.toUpperCase() === `${prefix}PING`) {
        message.channel.send('Pong!');
    }

    // Balance & Money
    if (msg === `${prefix}BALANCE` || msg === `${prefix}MONEY`) { // This will run if the message is either ~BALANCE or ~MONEY

        // Additional Tip: If you want to make the values guild-unique, simply add + message.guild.id whenever you request.
        economy.fetchBalance(message.author.id + message.guild.id).then((i) => { // economy.fetchBalance grabs the userID, finds it, and puts the data with it into i.
            // Lets use an embed for This
            const embed = new Discord.RichEmbed()
                .setDescription(`**${message.guild.name} Bank**`)
                .setColor(0xD4AF37) // You can set any HEX color if you put 0x before it.
                .addField('Account Holder',message.author.username,true) // The TRUE makes the embed inline. Account Holder is the title, and message.author is the value
                .addField('Account Balance',i.money,true)


            // Now we need to send the message
            message.channel.send({embed})

        })

    }

});

client.login('MzcyNTQ0NjA0MDM1MzUwNTMx.Dfem2g.Qjd9sgFpaL9pY9OYG8x45_CHb98')
