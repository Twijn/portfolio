export type URL = {
	name: string;
	url: string;
};

export interface RawProject {
	name: string;
	description: string;
	image: string;
	technologies: string[];
	urls?: URL[];
}

export class Project implements RawProject {
	public id: string;
	public name: string;
	public description: string;
	public technologies: string[] = [];
	public image: string;
	public urls: URL[] = [];

	constructor(name: string, description: string, image: string, technologies: string[], urls?: URL[]) {
		this.id = name
			.toLowerCase()
			.replace(/[^a-z. -]/g, '')
			.replace(/ /g, '-');
		this.name = name;
		this.description = description;
		this.technologies = technologies;
		this.image = image;
		if (urls) {
			this.urls = urls;
		}
	}

	public getLocalURL(): string {
		return `/projects/${this.id}`;
	}

	public raw(): RawProject {
		return {
			name: this.name,
			description: this.description,
			image: this.image,
			technologies: this.technologies,
			urls: this.urls
		};
	}
}

export const projects: Project[] = [
	new Project(
		'ModSquad.tools',
		'A toolset developed for The Mod Squad Discord community that provides Twitch moderation capabilities. The platform features stream logging functionality and seamlessly integrates with both web and Discord interfaces for efficient moderator communication.',
		'/images/projects/modsquad-tools.webp',
		['TypeScript', 'Svelte', 'Node.js', 'MariaDB', 'Twitch API', 'Discord API'],
		[
			{
				name: 'GitHub',
				url: 'https://github.com/TwitchModSquad/modbot'
			},
			{
				name: 'Website',
				url: 'https://modsquad.tools'
			},
			{
				name: 'Old Website',
				url: 'https://tms.to'
			}
		]
	),
	new Project(
		'VoiceTwine',
		'A Discord bot that offers free, open-sourced dynamic voice channel management. The bot provides automated temporary channel creation with customizable naming conventions, scalable voice channel support, and channel cleanup functionality.',
		'/images/projects/voicetwine.webp',
		['TypeScript', 'Node.js', 'MariaDB', 'Discord API'],
		[
			{
				name: 'GitHub',
				url: 'https://github.com/Twijn/VoiceTwine'
			},
			{
				name: 'BuiltByBit Resource',
				url: 'https://builtbybit.com/resources/voicetwine.63006/'
			}
		]
	),
	new Project(
		'AC:NH Creature List',
		'A Svelte-powered single-page application designed for Animal Crossing: New Horizons players. The platform provides information about in-game creatures, including sell prices and activity times. Currently in development hiatus with plans for future updates.',
		'/images/projects/acnh-tracker.webp',
		['TypeScript', 'Svelte', 'Node.js'],
		[
			{
				name: 'GitHub',
				url: 'https://github.com/Twijn/acnh-tracker'
			},
			{
				name: 'Website',
				url: 'https://acnh.io'
			}
		]
	),
	new Project(
		'TryMy.io',
		'An upcoming platform in development designed to streamline testing processes for Minecraft content creators. The service enables developers to showcase their plugins, worlds, and server configurations through a centralized testing environment, allowing for product evaluation prior to purchase or implementation.',
		'/images/projects/trymy-io.webp',
		['TypeScript', 'Svelte', 'Node.js', 'MariaDB', 'Pterodactyl'],
		[
			{
				name: 'Coming Soon!',
				url: '#'
			}
		]
	)
];
