module.exports = {
    name: 'interactionCreate',
    once: false,
    execute(interaction) {
        if (!interaction.isChatInputCommand()) return;
        
            const { commandName } = interaction;

            if (commandName === 'stats') {
                const promises = [
                    client.shard.fetchClientValues('guilds.cache.size'),
                    client.shard.broadcastEval(c => c.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
                ];
        
                return Promise.all(promises)
                    .then(results => {
                        const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
                        const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
                        return interaction.reply(`Server count: ${totalGuilds}\nMember count: ${totalMembers}`);
                    })
                    .catch(console.error);
        }
    }
}