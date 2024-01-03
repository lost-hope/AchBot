const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('youtube')
        .setDescription('Link zur Youtube-Kanal'),
    async execute(interaction) {
        const exampleEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Nina\'s Youtube-Kanal')
            .setURL('https://www.youtube.com/c/achnina')
            .setThumbnail('https://www.youtube.com/s/desktop/bcd251ee/img/favicon_32x32.png');
        await interaction.reply({ embeds: [exampleEmbed] });
    },
};