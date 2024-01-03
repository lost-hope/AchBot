const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tiktok')
        .setDescription('Link zum TikTok-Kanal'),
    async execute(interaction) {
        const exampleEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Nina\'s TikTok-Kanal')
            .setURL('https://www.tiktok.com/@achnina')
            .setThumbnail('https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/mtact/static/images/logo_144c91a.png?v=2');
        await interaction.reply({ embeds: [exampleEmbed] });
    },
};