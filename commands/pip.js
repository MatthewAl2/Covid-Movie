const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pip')
		.setDescription('Description of Numpy and Installation'),
	async execute(interaction) {
		const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Pip')
	.setURL('https://pypi.org/project/pip/')
	.setAuthor({ name: 'Python Software Foundation', iconURL: 'https://i.imgur.com/qc5bcVn.png', url: 'https://discord.js.org' })
	.setDescription('PyPI is the default software repository for Python developers to store created Python programming language software developers and programmers alike use to publicize and share their software. PyPI itself also simplifies the Python packaging process for Python programs.')
	.setThumbnail('https://i.imgur.com/qc5bcVn.png')
	.setImage('https://i.imgur.com/qc5bcVn.png')
	.setTimestamp()
	.setFooter({ text: 'logo', iconURL: 'https://i.imgur.com/qc5bcVn.png' });

	await interaction.reply({ embeds: [exampleEmbed] });
	},
};