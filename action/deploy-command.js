const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const { REST } = require("@discordjs/rest");
const { Routes } = require("discord.js");
const fs = require("node:fs");

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

const commands = [];
const commandFiles = fs
  .readdirSync("../commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`../commands/${file}`);
  commands.push(command.data.toJSON());
}

(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    );

    const data = await rest.put(
      Routes.applicationGuildCommands(
        process.env.APPLICATION_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
  } catch (error) {
    console.error(error);
  }
})();
