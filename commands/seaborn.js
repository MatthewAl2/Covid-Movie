const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('seaborn')
		.setDescription('Description of Seaborn and Installation'),
	async execute(interaction) {
		const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Seaborn')
	.setURL('https://seaborn.pydata.org/installing.html')
	.setAuthor({ name: 'Micheal Waksom', iconURL: 'https://i.imgur.com/yoGuKJe.png', url: 'https://discord.js.org' })
	.setDescription('Seaborn is a data visualization library built on top of matplotlib and closely integrated with pandas data structures in Python. Visualization is the central part of Seaborn which helps in exploration and understanding of data.')
	.setThumbnail('https://i.imgur.com/yoGuKJe.png')
	.setImage('https://i.imgur.com/yoGuKJe.png')
	.setTimestamp()
	.setFooter({ text: 'logo', iconURL: 'https://i.imgur.com/yoGuKJe.png' });

	await interaction.reply({ embeds: [exampleEmbed] });
	},
};