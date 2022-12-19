const dotenv = require("dotenv");
dotenv.config();

const fs = require("fs");
const {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  Collection,
  Message,
  Events,
  Partials,
} = require("discord.js");
const utils = require("./utils");

const { EmbedBuilder } = require("discord.js");

// const client = new Client({
//   intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
// });
const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
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

// client.on(Events.MessageCreate, (message) => {
//   // // if (!message.guild) console.log("no guild");
//   // return; // If the message isn't in a guild return.
//   if (message.channel.id === "1020670177634943056") {
//     if (message.author.bot) {
//       console.log("bot");
//       return;
//     } // If the message is by a bot return.
//     // const msgLog = `[MESSAGE] [${message.guild.name}] [#${message.channel.name}] ${message.author.username}#${message.author.discriminator}: ${message.content}\n`; // You can change this to whatever you want.
//     // console.log(msgLog);
//     // let time = message.createdTimestamp.toString();
//     // let messageAttachment =
//     //   // message.attachments.size > 0 ? message.attachments[0].url : null;
//     let channel = client.channels.cache.get("1054372465188544552"); // Replace CHANNEL ID with the channel ID you want the logs to go to.
//
//     if (message.attachments > 0) {
//       channel.send({
//         files: [...message.attachments.values()],
//         content: `[圖片] [${message.createdAt}] ${message.author.username}#${message.author.discriminator}發了${message.attachments.size}張圖片`,
//       });
//     }
//     if (message.content) {
//       const messageLog = new EmbedBuilder()
//         .setColor(0x0099ff)
//         .setTitle(message.channel.name)
//         .setAuthor({
//           name: `${message.author.username}#${message.author.discriminator}`,
//           iconURL: message.author.avatarURL(),
//         })
//         .addFields({
//           name: message.createdAt.toString(),
//           value: message.content,
//         });
//       channel.send({ embeds: [messageLog] });
//     }
//   }
// });

client.on(Events.MessageDelete, (message) => {
  if (message.author.bot) {
    console.log("bot");
    return;
  } // If the message is by a bot return.
  if (message.channel.id === "1020670177634943056") {
    let channel = client.channels.cache.get("1054372465188544552"); // Replace CHANNEL ID with the channel ID you want the logs to go to.
    if (message.content === "已私") {
      return;
    }
    const messageLog = `-----分割線-----\n[刪除訊息] \n頻道：#${
      message.channel.name
    } \n用戶：${message.author.username}#${
      message.author.discriminator
    } \n時間點：${message.createdAt
      .toISOString()
      .replace(/T/, " ") // replace T with a space
      .replace(/\..+/, "")}`; // You can change this to whatever you want.

    channel.send(messageLog);
    if (message.content) {
      // const messageLogEmbed = new EmbedBuilder()
      //   .setColor(0x0099ff)
      //   .setTitle(`在頻道 [${message.channel.name}] 刪除了以下訊息`)
      //   .setAuthor({
      //     name: `${message.author.username}#${message.author.discriminator}`,
      //     iconURL: message.author.avatarURL(),
      //   })
      //   .addFields({
      //     name: message.createdAt
      //       .toISOString()
      //       .replace(/T/, " ") // replace T with a space
      //       .replace(/\..+/, ""),
      //     value: message.content,
      //   });

      const messageContent = `訊息: \n${message.content}\n`;
      // channel.send({ embeds: [messageLogEmbed] });

      channel.send(messageContent);
    }
    if (message.attachments.size > 0) {
      console.log(message.attachments);
      channel.send({
        files: [...message.attachments.values()],
        content: `[圖片] [${message.createdAt
          .toISOString()
          .replace(/T/, " ") // replace T with a space
          .replace(/\..+/, "")}] ${message.author.username}#${
          message.author.discriminator
        }刪除了${message.attachments.size}張圖片`,
      });
    }
  }
});

client.login(process.env.TOKEN);
