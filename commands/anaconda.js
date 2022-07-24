const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('anaconda')
		.setDescription('Description of Numpy and Installation'),
	async execute(interaction) {
		const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Anaconda')
	.setURL('https://www.anaconda.com/products/distribution')
	.setAuthor({ name: 'Travis Oliphant', iconURL: 'https://i.imgur.com/NScJEdG.png', url: 'https://discord.js.org' })
	.setDescription('Anaconda is an open-source distribution of the Python and R programming languages for data science that aims to simplify package management and deployment.')
	.setThumbnail('https://i.imgur.com/NScJEdG.png')
	.setImage('https://i.imgur.com/NScJEdG.png')
	.setTimestamp()
	.setFooter({ text: 'logo', iconURL: 'https://i.imgur.com/NScJEdG.png' });

	await interaction.reply({ embeds: [exampleEmbed] });
	},
};