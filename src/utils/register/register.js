export default (client, type = "global") => {

     const commands = client.commands.map(command => command.slash_data)

     if (type == "global") {
          client.application.commands.set(commands)
               .then(() => {
                    console.log("Global commands registered!")
               })
     }
}