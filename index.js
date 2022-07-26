const {Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const activities = [
    "",
    "Syncing your Discord roles!",
    "ripmc.org",
    "play.ripmc.org"
]

client.once('ready', () => {
    client.user.setActivity('Loading...')
    //run every 5 minutes
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * (activities.length -1) + 1);
        const newActivity = activities[randomIndex]
        client.user.setActivity(newActivity)
    }, 300000);
    console.log("Logged in as " + client.user.username + "#" + client.user.discriminator);
});
client.login(token);