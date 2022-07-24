const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pygame')
		.setDescription('Description of pygame and Installation'),
	async execute(interaction) {
		const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Pygame')
	.setURL('https://www.pygame.org/wiki/GettingStarted')
	.setAuthor({ name: 'Pete Shinners', iconURL: 'https://i.imgur.com/Zly5rqb.gif', url: 'https://discord.js.org' })
	.setDescription('The pygame library is an open-source module for the Python programming language specifically intended to help you make games and other multimedia applications. Built on top of the highly portable SDL (Simple DirectMedia Layer) development library, pygame can run across many platforms and operating systems.')
	.setThumbnail('https://i.imgur.com/Zly5rqb.gif')
	.setImage('https://i.imgur.com/Zly5rqb.gif')
	.setTimestamp()
	.setFooter({ text: 'logo', iconURL: 'https://i.imgur.com/Zly5rqb.gif' });

	await interaction.reply({ embeds: [exampleEmbed] });
	},
};