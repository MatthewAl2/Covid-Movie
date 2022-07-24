const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('typescript')
		.setDescription('Description of Typescript and Installation'),
	async execute(interaction) {
		const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Typescript')
	.setURL('https://www.typescriptlang.org/download')
	.setAuthor({ name: 'Steve Lucco', iconURL: 'https://i.imgur.com/JQizslP.png', url: 'https://discord.js.org' })
	.setDescription('Anaconda is an open-source distribution of the Python and R programming languages for data science that aims to simplify package management and deployment.')
	.setThumbnail('https://i.imgur.com/JQizslP.png')
	.setImage('https://i.imgur.com/JQizslP.png')
	.setTimestamp()
	.setFooter({ text: 'logo', iconURL: 'https://i.imgur.com/JQizslP.png' });

	await interaction.reply({ embeds: [exampleEmbed] });
	},
};