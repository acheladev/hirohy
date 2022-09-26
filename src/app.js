import { Client, Collection } from "addox";
import { readdirSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

import { config } from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL(".", import.meta.url));

config({
  path: join(__dirname, ".env"),
});

const client = new Client({
  ws: {
    intents: [
      "DirectMessages",
      "GuildIntegrations",
      "GuildMembers",
      "GuildMessages",
      "GuildPresences",
      "Guilds",
      "MessageContent",
    ],
  },
});

client.commands = new Collection();
client.emoji = (emojiName) =>
  clientcaches
    .guilds(process.env.server)
    .guild.caches.emojis.find((e) => e.name == emojiName) || "🎴";

readdirSync(join(__dirname, "events")).forEach(async (file) => {
  const event = await import(`./events/${file}`).then((m) => m.default);
  event(client);
});

readdirSync(join(__dirname, "commands")).forEach((category) => {
  readdirSync(join(__dirname, "commands", category)).forEach(async (file) => {
    const command = await import(`./commands/${category}/${file}`);
    client.commands.set(command.data.name, command);
  });
});

client.ws.connect(process.env.token);
