import { EmbedBuilder, InteractionType } from "addox"
import cooldown_control from "../utils/cooldown.js"
// import modal_submit from "../utils/event-utils/"

export default client => {

     client.ws.on("interactionCreate", interaction => {

          if (interaction.type !== "ApplicationCommand") return
          // else if (interaction.type === InteractionType.ModalSubmit) modal_submit(interaction)

          const command = client.commands.get(interaction.commandName)
          if (!command) return

          if (command.data.permission && !interaction.member.permissions.has(command.data.permission)) return interaction.reply({
               embeds: [
                    new EmbedBuilder()
                         .setDescription(`Bu komutu kullanabilmek için \`${command.data.permission}\` yetkisine sahip olmanız gerekli.`)
               ],
               flags: "Ephemeral"
          })

          const cooldown = new cooldown_control(command, interaction.user.id)
          if (cooldown) return interaction.reply({
               embeds: [
                    new EmbedBuilder()
                         .setDescription(`Komutu tekrar kullanabilmek için \`${cooldown}\` saniye daha bekleyiniz.`)
               ],
               flags: "Ephemeral"
          })

          try {
               command.data.execute(interaction)
          } catch (e) {
               interaction.reply({ embeds: [new EmbedBuilder().setDescription("Bir hata oluştu!")], flags: "Ephemeral" })
               console.log(e)
          }

     })

}