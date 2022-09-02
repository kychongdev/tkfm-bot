const { SlashCommandBuilder } = require("@discordjs/builders");
const utils = require("../utils");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("send-msg")
    .setDescription("BOT發送特定訊息")
    .addStringOption((option) =>
      option.setName("message").setDescription("訊息").setRequired(true)
    ),
  async execute(interaction, client) {
    try {
      if (utils.checkRole(interaction, interaction.member._roles)) {
        const channel = await client.channels.fetch(interaction.channelId);

        await interaction.deferReply();

        await channel.send({
          content: interaction.options.getString("message"),
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
