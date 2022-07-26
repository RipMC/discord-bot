module.exports = {
    name: 'guildMemberAdd',
    once: false,
    execute(message) {
        message.member.guild.channels.cache.find(c => c.name == "chatting").send(`${message.member.user.username} has joined RipMC.`)
    }
}