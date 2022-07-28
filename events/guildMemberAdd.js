module.exports = {
    name: 'guildMemberAdd',
    once: false,
    execute(member) {
        member.guild.channels.cache.find(c => c.name == "chatting").send(`${member.user.username} has joined RipMC.`)
    }
}