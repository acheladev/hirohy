import { Client, Collection } from "addox"
import "dotenv/config"
import { readdirSync } from "fs"

const client = new Client({
     ws: {
          intents: ["DirectMessages", "GuildIntegrations", "GuildMembers", "GuildMessages", "GuildPresences", "Guilds", "MessageContent"]
     }
})

client.commands = new Collection()
client.emoji = (emojiName) => clientcaches.guilds(process.env.server).guild.caches.emojis.find(e => e.name == emojiName) || "🎴"


readdirSync("./events").forEach(async file => {
     const event = await import(`./events/${file}`).then(m => m.default)
     event(client)
})

readdirSync("./commands").forEach(category =>{

     readdirSync(`./commands/${category}`).forEach(async file => {
     const command = await import(`./commands/${category}/${file}`)
     client.commands.set(command.data.name, command)
     })

})

client.ws.connect(process.env.token)