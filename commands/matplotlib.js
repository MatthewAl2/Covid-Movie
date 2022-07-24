const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('matplotlib')
		.setDescription('Description of MatPlotLib and Installation'),
	async execute(interaction) {
		const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('MatPlotLib')
	.setURL('https://matplotlib.org/stable/users/installing/index.html')
	.setAuthor({ name: 'John D. Hunter', iconURL: 'https://i.imgur.com/QX5jWET.png', url: 'https://discord.js.org' })
	.setDescription('Matplotlib is a cross-platform, data visualization and graphical plotting library for Python and its numerical extension NumPy. As such, it offers a viable open source alternative to MATLAB. Developers can also use matplotlib’s APIs (Application Programming Interfaces) to embed plots in GUI applications.')
	.setThumbnail('https://i.imgur.com/QX5jWET.png')
	.setImage('https://i.imgur.com/QX5jWET.png')
	.setTimestamp()
	.setFooter({ text: 'logo', iconURL: 'https://i.imgur.com/QX5jWET.png' });

	await interaction.reply({ embeds: [exampleEmbed] });
	},
};