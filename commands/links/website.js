const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('website')
        .setDescription('Link zur Website'),
    async execute(interaction) {
        const exampleEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Nina\'s Website')
            .setURL('https://achnina.info')
            .setThumbnail('https://image.spreadshirtmedia.net/image-server/v1/compositions/T1453A1PA4625PT10X9Y4D186076746W4199H3181/views/3,width=500,height=500,appearanceId=1/achnina-isolierflasche.jpg');
        await interaction.reply({ embeds: [exampleEmbed] });
    },
};