const Discord = require("discord.js");
const client = new Discord.Client();

const swearWords = ["Shit", "Fuck", "Bitch", "Cunt","Whore","Slut","Ass","Asshole","Damn",'fuck', 'shit', 'asshole', 'cunt', 'fag', 'fuk', 'fck', 'fcuk', 'assfuck', 'assfucker', 'fucker','motherfucker', 'asscock', 'asshead',
'asslicker', 'asslick', 'assnigger', 'nigger', 'asssucker', 'bastard', 'bitch', 'bitchtits',
'bitches', 'bitch', 'brotherfucker', 'bullshit', 'bumblefuck', 'buttfucka', 'fucka', 'buttfucker', 'buttfucka', 'fagbag', 'fagfucker',
'faggit', 'faggot', 'faggotcock', 'fagtard', 'fatass', 'fuckoff', 'fuckstick', 'fucktard', 'fuckwad', 'fuckwit', 'dick',
'dickfuck', 'dickhead', 'dickjuice', 'dickmilk', 'doochbag', 'douchebag', 'douche', 'dickweed', 'dyke', 'dumbass', 'dumass',
'fuckboy', 'fuckbag', 'gayass', 'gayfuck', 'gaylord', 'gaytard', 'nigga', 'niggers', 'niglet', 'paki', 'piss', 'prick', 'pussy',
'poontang', 'poonany', 'porchmonkey','porch monkey', 'poon', 'queer', 'queerbait', 'queerhole', 'queef', 'renob', 'rimjob', 'ruski',
'sandnigger', 'sand nigger', 'schlong', 'shitass', 'shitbag', 'shitbagger', 'shitbreath', 'chinc', 'carpetmuncher', 'chink', 'choad', 'clitface',
'clusterfuck', 'cockass', 'cockbite', 'cockface', 'skank', 'skeet', 'skullfuck', 'slut', 'slutbag', 'splooge', 'twatlips', 'twat',
'twats', 'twatwaffle', 'vaj', 'vajayjay', 'va-j-j', 'wank', 'wankjob', 'wetback', 'whore', 'whorebag', 'whoreface',"Piss","Dick","Pussy","Fag","Faggot","Bastard","SHIT", "FUCK", "BITCH", "CUNT","WHORE","SLUT","ASS","ASSHOLE","DAMN","PISS","DICK","PUSSY","FAG","FAGGOT","BASTARD","shit", "fuck", "bitch", "cunt","whore","slut","ass","asshole","damn","piss","dick","pussy","fag","faggot","bastard",];


function wordFilter(str) {
  return str.replace(rgx, "****");
}
client.on('message', async message => {
    if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("Be careful what you say, It could lead to the ban hammer!!!");
  // Or just do message.delete();
}
});

client.on('ready', () => {
    console.log('working'); 
 });
client.login('MzcyNTQ0NjA0MDM1MzUwNTMx.Dhe_ZA.zVXmXCBITSX5eEM5T_pzoGHzzQY');