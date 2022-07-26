const {Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const path = require('node:path');
const fs = require('node:fs');

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    }else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

client.login(token);