const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('merch')
        .setDescription('Link zum Merchshop'),
    async execute(interaction) {
        const exampleEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Nina\'s Merch Shop')
            .setURL('https://achnina.myspreadshop.de/')
            .setThumbnail('https://image.spreadshirtmedia.net/image-server/v1/compositions/T1435A675PA4397PT10X43Y30D186215063W6299H3416/views/1,width=650,height=650,appearanceId=675/brotbert-hat-genug-gegessen.jpg');
        await interaction.reply({ embeds: [exampleEmbed] });
    },
};