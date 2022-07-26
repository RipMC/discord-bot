module.exports = {
	name: 'ready',
	once: true,
	execute(client, shard) {
        const activities = [
            "",
            "Syncing your Discord roles!",
            `ripmc.org`,
            "play.ripmc.org"
        ]
        client.user.setActivity('Loading...')
        //run every 5 minutes
        setInterval(() => {
            const randomIndex = Math.floor(Math.random() * (activities.length -1) + 1);
            const newActivity = activities[randomIndex]
            client.user.setActivity(newActivity)
        }, 300000);
        console.log("Logged in as " + client.user.username + "#" + client.user.discriminator);
	},
};