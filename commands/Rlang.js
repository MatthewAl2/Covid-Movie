const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('r')
		.setDescription('Description of R and Installation'),
	async execute(interaction) {
		const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('R')
	.setURL('https://www.r-project.org/')
	.setAuthor({ name: 'Ross Ihaka', iconURL: 'https://i.imgur.com/BuJlgTd.jpg', url: 'https://discord.js.org' })
	.setDescription('R is a free software environment for statistical computing and graphics. It compiles and runs on a wide variety of UNIX platforms, Windows and MacOS.')
	.setThumbnail('https://i.imgur.com/BuJlgTd.jpg')
	.setImage('https://i.imgur.com/BuJlgTd.jpg')
	.setTimestamp()
	.setFooter({ text: 'logo', iconURL: 'https://i.imgur.com/BuJlgTd.jpg' });

	await interaction.reply({ embeds: [exampleEmbed] });
	},
};