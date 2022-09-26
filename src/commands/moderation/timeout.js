export const data = {
  name: "timeout-test",
  description: "test",
  cooldown: 15,
  execute(interaction) {
    interaction.reply({ content: "test2" });
  },
};

export const slash_data = {
  name: data.name,
  description: data.description,
};
