const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('nodejs')
		.setDescription('Description of Numpy and Installation'),
	async execute(interaction) {
		const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('NodeJS')
	.setURL('https://nodejs.org/en/download/')
	.setAuthor({ name: 'Ryan Dahl', iconURL: 'https://i.imgur.com/nXtedh7.png', url: 'https://discord.js.org' })
	.setDescription('Node. js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications. It runs on the V8 JavaScript runtime engine, and it uses event-driven, non-blocking I/O architecture, which makes it efficient and suitable for real-time applications.')
	.setThumbnail('https://i.imgur.com/nXtedh7.png')
	.setImage('https://i.imgur.com/nXtedh7.png')
	.setTimestamp()
	.setFooter({ text: 'logo', iconURL: 'https://i.imgur.com/nXtedh7.png' });

	await interaction.reply({ embeds: [exampleEmbed] });
	},
};