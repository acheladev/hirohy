export const data = {
     name: "timeout-test",
     description: "test",
     execute(interaction) {
          interaction.reply("test2")
     }
}

export const slash_data = {
     name: data.name,
     description: data.description,
}