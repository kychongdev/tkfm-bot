const { SlashCommandBuilder } = require("@discordjs/builders");
const utils = require("../utils");
const pot = require("../pot");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test-pot")
    .setDescription("測試潛力")
    .addStringOption((option) =>
      option.setName("start").setDescription("前潛力").setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("end").setDescription("後潛力").setRequired(true)
    ),
  async execute(interaction, client) {
    try {
      const potEmbedMsg = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle("潛力測試")
        .setTitle("潛力")
        .addFields({
          name: `${interaction.options.getString(
            "start"
          )} - ${interaction.options.getString("end")} 的素材需求量`,
          value: pot(
            interaction.options.getString("start"),
            interaction.options.getString("end")
          ).toString(),
        });
      if (utils.checkRole(interaction, interaction.member._roles)) {
        const channel = await client.channels.fetch(interaction.channelId);

        await interaction.deferReply();

        await channel.send({
          embeds: [potEmbedMsg],
          // content: "測試",
          ephemeral: false,
        });

        await interaction.deleteReply();
      }
    } catch (error) {
      utils.showErrorReply(interaction, error);
    }
  },
};
