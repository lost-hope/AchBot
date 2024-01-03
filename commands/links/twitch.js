const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('twitch')
        .setDescription('Link zum Twitchkanal'),
    async execute(interaction) {
        const exampleEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Nina\'s Twitchkanal')
            .setURL('https://www.twitch.tv/achnina')
            .setThumbnail('https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png');
        await interaction.reply({ embeds: [exampleEmbed] });
    },
};