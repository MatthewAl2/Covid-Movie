const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('profile')
		.setDescription('user things'),
	async execute(interaction) {
		const row = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('profile')
					.setPlaceholder('Nothing selected')
					.addOptions(
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					),
			);
		await interaction.reply({content : 'pong' , components: [row]});
	},
};