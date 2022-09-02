const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  checkRole(interaction, roles) {
    let isValid = false;
    roles.forEach((role) => {
      if (
        role === process.env.DC_ROLE_BLUE_ID ||
        role === process.env.DC_ROLE_RED_ID ||
        role === process.env.DC_ROLE_DRAFT_ID ||
        role === process.env.DC_ROLE_BLUE2_ID
      )
        isValid = true;
    });

    if (!isValid) {
      interaction.reply({
        content: `<@!${interaction.user.id}> 笨蛋凱薩！你不要亂碰啦！(PERMISSION_DENIED - 你沒有使用指令的權限)`,
        ephemeral: true,
      });
    }

    return isValid;
  },
  showErrorReply(interaction, err) {
    interaction.reply({
      content: `<@!${interaction.user.id}> 初四啦喵~找維修師看看啦喵！`,
      ephemeral: true,
    });
    console.error(err);
  },
};
