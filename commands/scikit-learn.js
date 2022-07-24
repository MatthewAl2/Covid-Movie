const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('scikit-learn')
		.setDescription('Description of Scikit-learn and Installation'),
	async execute(interaction) {
		const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Scikit-learn')
	.setURL('https://scikit-learn.org/stable/install.html')
	.setAuthor({ name: 'David Cournapeau', iconURL: 'https://i.imgur.com/oxY7AZS.png', url: 'https://discord.js.org' })
	.setDescription('Scikit-learn is a key library for the Python programming language that is typically used in machine learning projects. Scikit-learn is focused on machine learning tools including mathematical, statistical and general purpose algorithms that form the basis for many machine learning technologies.')
	.setThumbnail('https://i.imgur.com/oxY7AZS.png')
	.setImage('https://i.imgur.com/oxY7AZS.png')
	.setTimestamp()
	.setFooter({ text: 'logo', iconURL: 'https://i.imgur.com/oxY7AZS.png' });

	await interaction.reply({ embeds: [exampleEmbed] });
	},
};