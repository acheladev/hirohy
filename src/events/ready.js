import register_commands from "../utils/register/register.js"

export default client => {

     client.ws.on("ready", () => {

          console.log(`${client.user.tag} Aktif!`)

          

          register_commands(client, "global")

     })

}