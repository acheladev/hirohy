export const data = {
     name: "info-test",
     description: "test",
     execute(interaction) {
          interaction.reply("test")
     }
}

export const slash_data = {
     name: data.name,
     description: data.description,
}