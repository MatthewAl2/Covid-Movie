const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vscode')
		.setDescription('Description of Numpy and Installation'),
	async execute(interaction) {
		const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('VSCode')
	.setURL('https://code.visualstudio.com/download')
	.setAuthor({ name: 'Erich Gamma', iconURL: 'https://i.imgur.com/TRZIO2e.png', url: 'https://discord.js.org' })
	.setDescription('Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET).')
	.setThumbnail('https://i.imgur.com/TRZIO2e.png')
	.setImage('https://i.imgur.com/TRZIO2e.png')
	.setTimestamp()
	.setFooter({ text: 'logo', iconURL: 'https://i.imgur.com/TRZIO2e.png' });

	await interaction.reply({ embeds: [exampleEmbed] });
	},
};