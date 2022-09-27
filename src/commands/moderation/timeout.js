import { timeToMs } from "basic-ms"

export const data = {
  name: "timeout-test",
  description: "test",
  cooldown: 15,
  async execute(interaction) {

    const member = interaction.options.pickUser("üye")
    const reason = interaction.options.pickString("sebep") || "Sebep belirtilmedi"
    const zaman = interaction.options.pickString("zaman")

    await member
      .edit(
        {
          communication_disabled_until: zaman,
        },
        reason,
      )
      .catch((err) => {
        throw err;
      });

    interaction.reply({ content: `<@${member.user.id}> was timeouted.` });
  }
}

export const slash_data = {
  name: data.name,
  description: data.description,

  options: [
    {
      name: "üye",
      description: "zaman aşımı atmak istediğiniz üyeyi seçin",
      type: 6,
      required: true
    },
    {
      name: "zaman",
      description: "ne kadar süre zaman aşımı atmak istiyorsunuz",
      type: 3,
      choices: [
        { name: "5 dakika", value: "5m" }
      ],
      required: true
    },
    {
      name: "sebep",
      description: "bir neden girebilirsiniz",
      type: 3
    }
  ]
};
