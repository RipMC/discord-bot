module.exports = {
    name: 'guildMemberAdd',
    once: false,
    execute(member) {
        const joinEmbed = new EmbedBuilder()
        .setColor(embedColor)
        .addFields(
            {name: "\u200B", value: `**New member!**
            
            Welcome **${member.user.username}** to RipMC!
            Please read <#793249977916194846> & <#792947057517133905> for more information!
            `}
        )
        member.guild.channels.cache.find(c => c.name == "chatting").send({embeds: [joinEmbed]});
    }
}
