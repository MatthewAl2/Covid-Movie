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
	.setDescription('NumPy, which stands for Numerical Python, is a library consisting of multidimensional array objects and a collection of routines for processing those arrays. Using NumPy, mathematical and logical operations on arrays can be performed.')
	.setThumbnail('https://i.imgur.com/nXtedh7.png')
	.setImage('https://i.imgur.com/nXtedh7.png')
	.setTimestamp()
	.setFooter({ text: 'logo', iconURL: 'https://i.imgur.com/nXtedh7.png' });

	await interaction.reply({ embeds: [exampleEmbed] });
	},
};