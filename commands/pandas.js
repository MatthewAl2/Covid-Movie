const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pandas')
		.setDescription('Description of Numpy and Installation'),
	async execute(interaction) {
		const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Pandas')
	.setURL('https://pandas.pydata.org/docs/getting_started/install.html')
	.setAuthor({ name: 'Wes McKinney', iconURL: 'https://i.imgur.com/lQmUHb2.png', url: 'https://discord.js.org' })
	.setDescription('Pandas is a Python package providing fast, flexible, and expressive data structures designed to make working with “relational” or “labeled” data both easy and intuitive. It aims to be the fundamental high-level building block for doing practical, real-world data analysis in Python.')
	.setThumbnail('https://i.imgur.com/lQmUHb2.png')
	.setImage('https://i.imgur.com/lQmUHb2.png')
	.setTimestamp()
	.setFooter({ text: 'logo', iconURL: 'https://i.imgur.com/lQmUHb2.png' });

	await interaction.reply({ embeds: [exampleEmbed] });
	},
};