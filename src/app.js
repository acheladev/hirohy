import { Client, Collection } from "addox"
import "dotenv/config"
import { readdirSync } from "fs"

const client = new Client({
     ws: {
          intents: ["DirectMessages", "GuildIntegrations", "GuildMembers", "GuildMessages", "GuildPresences", "Guilds", "MessageContent"]
     }
})