const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('numpy')
		.setDescription('user things'),
	async execute(interaction) {
		const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Numpy')
	.setURL('https://numpy.org/install/')
	.setAuthor({ name: 'Jim Hugunim', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.setDescription('NumPy, which stands for Numerical Python, is a library consisting of multidimensional array objects and a collection of routines for processing those arrays. Using NumPy, mathematical and logical operations on arrays can be performed.')
	.setThumbnail('data:image/png;base64,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')
	
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

	await interaction.reply({ embeds: [exampleEmbed] });
	},
};