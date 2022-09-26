export default (client) => {
  client.ws.on("ready", () => {
    console.log(`${client.user.tag} Aktif!`);

    const commands = client.commands
      .array()
      .map((command) => command.slash_data);

    client.caches.commands
      .set(commands)
      .then(() => console.log("Application commands (/) registered!"))
      .catch(console.error);
  });
};
