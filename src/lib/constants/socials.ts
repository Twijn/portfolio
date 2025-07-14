export type Social = {
	name: string;
	url: string;
	icon: string;
}

export const socials: Social[] = [
	{
		name: "GitHub",
		url: "https://github.com/Twijn",
		icon: "fa-brands fa-github",
	},
	{
		name: "Discord",
		url: "https://discord.com/invite/Pa3eqztbZB",
		icon: "fa-brands fa-discord",
	},
	{
		name: "Bluesky",
		url: "https://bsky.app/profile/twijn.dev",
		icon: "fa-brands fa-bluesky",
	},
	{
		name: "Twitch",
		url: "https://www.twitch.tv/devtwijn",
		icon: "fa-brands fa-twitch",
	},
	{
		name: "Buy me a Coffee",
		url: "https://buymeacoffee.com/twijn",
		icon: "fa-regular fa-coffee",
	}
];
