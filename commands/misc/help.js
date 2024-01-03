const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Alle Kommandos auflisten'),

    async execute(interaction, client) {

        const page1 = new EmbedBuilder()
            .setColor('Red')
            .setTitle('Die wichtigsten Links')
            .setDescription('Seite 1 - Links\nSeite 2 - Nützliche Rechner und Tools zum basteln.')
            .addFields(
                { name: "/help", value: "Zeigt diese Hilfe an" },
                { name: "/website", value: "Link zur Website" },
                { name: "/twitch", value: "Link zum Twitchkanal" },
                { name: "/youtube", value: "Link zur Youtube-Kanal" },
                { name: "/insta", value: "Link zum Instagram-Kanal" },
                { name: "/tiktok", value: "Link zum TikTok-Kanal" },
                { name: "/merch", value: "Link zum Merchshop" }
            )
            .setTimestamp()
            .setFooter({ text: "Die wichtigsten Links." })

        const page2 = new EmbedBuilder()
            .setColor('Blue')
            .setTitle('Hilfe - Page 2')
            .addFields(
                { name: "/5vpower [Typ] [Anzahl]", value: "Berechnet die gebrauchte Leistung und den Strom für eine gegebene Anzahl und Typ für digitale 5V LED Strips" },
                { name: "/12vpower [Typ] [Anzahl]", value: "Berechnet die gebrauchte Leistung und den Strom für eine gegebene Anzahl und Typ für digitale 12V LED Strips" },
                { name: "/24vpower [Typ] [Anzahl]", value: "Berechnet die gebrauchte Leistung und den Strom für eine gegebene Anzahl und Typ für digitale 24V LED Strips" }
            )
            .setTimestamp()
            .setFooter({ text: "Nützliche Rechner und Tools zum basteln" })


        const button = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("page1")
                    .setLabel("Links")
                    .setStyle(ButtonStyle.Primary)
                    .setDisabled(true),
                new ButtonBuilder()
                    .setCustomId("page2")
                    .setLabel("Bastel Tools")
                    .setStyle(ButtonStyle.Primary)
                    .setDisabled(false),
            )

        const message = await interaction.reply({ embeds: [page1], components: [button] });
        const collector = await message.createMessageComponentCollector();

        collector.on('collect', async i => {
            if (i.user.id !== interaction.user.id)
                return await i.reply({ content: `Nur ${interaction.user.tag} darf diese Knöpfe drücken.`, ephemeral: true });
            if (i.customId === "page1") {
                button.components[0].setDisabled(true);
                button.components[1].setDisabled(false);
                await i.update({ embeds: [page1], components: [button] });
            } else if (i.customId === "page2") {
                button.components[0].setDisabled(false);
                button.components[1].setDisabled(true);
                await i.update({ embeds: [page2], components: [button] });
            }
        })



    }
}