export default (client, type = "global") => {

     const commands = client.commands.map(command => command.slash_data)

     if (type == "global") {
          client.caches.commands.set(commands)
               .then(() => {
                    console.log("Global commands registered!")
               })
     }
     else if (type == "guild") {
          const guild = client.caches.guild.get("1013828910951182406")
          guild.commands.set(commands)
               .then(() => {
                    console.log("Guild commands registered!")
               })
     }
}