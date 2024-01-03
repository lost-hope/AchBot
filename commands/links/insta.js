const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('insta')
        .setDescription('Link zum Instagram-Kanal'),
    async execute(interaction) {
        const exampleEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Nina\'s Instagram-Kanal')
            .setURL('https://www.instagram.com/achninaa/')
            .setThumbnail('https://static.cdninstagram.com/rsrc.php/v3/yx/r/H1l_HHqi4p6.png');
        await interaction.reply({ embeds: [exampleEmbed] });
    },
};