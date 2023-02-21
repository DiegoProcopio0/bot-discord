const {
  SlashCommandBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  Component,
} = require("discord.js");

const row = new ActionRowBuilder().addComponents(
  new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("nada selecionado")
    .addOptions(
      {
        label: "javascript",
        description: "Veja a documentação do javascript",
        value: "javascript",
      },
      {
        label: "python",
        description: "Veja a documentação do python",
        value: "python",
      },
      {
        label: "C#",
        description: "Veja a documentação do C#",
        value: "csharp",
      },
      {
        label: "discord.js",
        description: "Veja a documentação do discord.js",
        value: "discord.js ",
      }
    )
);

module.exports = {
  data: new SlashCommandBuilder()
    .setName("docs")
    .setDescription("Acesse a documentação da tecnologia que quiser"),

  async execute(interaction) {
    await interaction.reply({
      content: "Selecione umas da techs abaixo",
      components: [row],
    });
  },
};
