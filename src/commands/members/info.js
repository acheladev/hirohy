export const data = {
  name: "info-test",
  description: "test",
  execute(interaction) {
    interaction.reply({ content: "test" });
  },
};

export const slash_data = {
  name: data.name,
  description: data.description,
};

//neyse ben çıkıyom kodu düzelttim <3 <3