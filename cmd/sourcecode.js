exports.run = (bot, message) => {
    let noto = 'Dev repository (the bot is running on dev right now https://github.com/RScodes/eeb2-bot) ';
		message.channel.sendMessage("", {embed: {
		title: noto
	}}).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name : "sourcecode",
  description: "sends a link to the repositories",
  usage: "sourcecode"
};
