const dotenv = require("dotenv");
dotenv.config();

const fs = require("fs");
const {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  Collection,
} = require("discord.js");
const utils = require("./utils");
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
const commands = [];
client.commands = new Collection();

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
  client.commands.set(command.data.name, command);
}

client.on("interactionCreate", async (interaction) => {
  const command = client.commands.get(interaction.commandName);

  try {
    await command.execute(interaction, client);
  } catch (err) {
    if (err) console.log(err);
    utils.showErrorReply(interaction, err);
  }
});

client.login(process.env.TOKEN);
