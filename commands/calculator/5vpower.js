const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('5vpower')
        .setDescription('Berechnet die Leistung von digitalen LEDs.')
        .addStringOption(option =>
            option.setName('typ')
                .setDescription('Wähle ein Typ aus.')
                .setChoices(
                    { name: 'WS2812B', value: 'WS2812' },
                    { name: 'WS2812-ECO', value: 'WS2812-ECO' },
                    { name: 'WS281', value: 'WS2811' },
                    { name: 'SK6812', value: 'SK6812' },
                    { name: 'APA102', value: 'APA102' }
                )
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option.setName('anzahl')
                .setDescription('Gebe die anzahl der LEDs ein')
                .setRequired(true))

    ,
    async execute(interaction) {
        led_type = interaction.options.getString('typ');
        led_num = interaction.options.getInteger('anzahl');
        power_max = 0;
        power_avg = 0;
        amps_max = 0;
        amps_avg = 0;

        switch (led_type) {
            case 'WS2812':
                amps_max = led_num * 0.0434;    //RGB White 100%
                amps_avg = led_num * 0.0170;    //Police All 100%
                break;
            case 'WS2812-ECO':
                amps_max = led_num * 0.0312;    //RGB White 100%
                amps_avg = led_num * 0.0131;    //Police All 100%
                break;
            case 'WS2811':
                amps_max = led_num * 0.05948;    //RGB White 100%
                amps_avg = led_num * 0.0296;    //Police All 100%
                break;
            case 'SK6812':
                amps_max = led_num * 0.0508;    //RGBW White 100%
                amps_avg = led_num * 0.02627;   //RGBW White 50%
                break;
            case 'APA102':
                amps_max = led_num * 0.0588;    //RGB White 100%
                amps_avg = led_num * 0.0233;    //Police All 100%
                break;

            default:
                break;
        }
        power_avg = amps_avg * 5;
        power_max = amps_max * 5;

        power_avg = Math.round((power_avg + Number.EPSILON) * 100) / 100;
        power_max = Math.round((power_max + Number.EPSILON) * 100) / 100;
        amps_avg = Math.round((amps_avg + Number.EPSILON) * 100) / 100;
        amps_max = Math.round((amps_max + Number.EPSILON) * 100) / 100;
        const exampleEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Geschätzte Leistungsaufnahme (für 5V LEDs)')
            .setDescription('Das hier sind nur Schätzungen')
            .addFields(
                { name: "LED Typ", value: "" + led_type, inline: true },
                { name: "Anzahl der LEDs", value: "" + led_num, inline: true },
                { name: "Maximaler Strom", value: "" + amps_max + "A", inline: false },
                { name: "Maximale Leistun", value: "" + power_max + "W", inline: true },
                { name: "Durchschnittlicher Strom", value: "" + amps_avg + "A", inline: false },
                { name: "Durchschnittliche Leistung", value: "" + power_avg + "W", inline: true },
                { name: "Credits", value: "Messdaten von Quindor. \nhttps://quinled.info/2020/03/12/digital-led-power-usage/" }
            );

        await interaction.reply({ embeds: [exampleEmbed] });
    },
};