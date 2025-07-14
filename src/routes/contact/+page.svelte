<script lang="ts">
	import Wrapper from '$lib/components/Wrapper.svelte';
	import { DISCORD_URL } from '$lib/constants/discord';

	type Link = {
		icon: string;
		link: string;
		heading: string;
		description: string;
	}

	const links: Link[] = [
		{
			icon: "fa-brands fa-discord",
			link: DISCORD_URL,
			heading: "Join my Discord Server",
			description: "Joining my Discord server is the quickest way to get in touch with me. Optionally, you can also add me as a friend on Discord: @twijn"
		},
		{
			icon: "fa-regular fa-paper-plane",
			link: "mailto:twijn@twijn.net",
			heading: "Send me an Email",
			description: "Prefer email over Discord communication? No problem! You can reach me at twijn@twijn.net"
		},
	];
</script>

<Wrapper headingType="h1" heading="Get in Touch" size="small" bg="transparent">
	<p class="center">
		See below for all of the ways you can get in touch!
	</p>
	<nav>
		{#each links as link (link.link)}
			<a href={link.link} target="_blank" rel="noopener noreferrer">
				<div class="icon">
					<i class={link.icon}></i>
				</div>
				<div class="info">
					<h2>{link.heading}</h2>
					<p>{link.description}</p>
				</div>
			</a>
		{/each}
	</nav>
</Wrapper>

<style>
	.center {
			text-align: center;
	}

	nav {
			display: flex;
			flex-direction: column;
			gap: .5em;
	}

	nav a {
			display: grid;
			grid-template-columns: 8em 1fr;
			background-color: rgba(var(--theme-color-1-rgb), 0.1);
			color: var(--text-color-1);
			text-decoration: none;
			padding: 1em;
			border: .1em solid var(--theme-color-1);
			box-shadow: 2px 2px 8px var(--background-color-1);
	}

	nav a:first-child {
			border-radius: .5em .5em 0 0;
	}

	nav a:last-child {
			border-radius: 0 0 .5em .5em;
	}

	nav a:hover,
	nav a:focus-visible {
			background-color: rgba(var(--theme-color-1-rgb), 0.2);
	}

	.icon {
			position: relative;
			font-size: 4em;
			color: var(--theme-color-2);
	}

	.icon i {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
	}

	.info h2 {
		margin: 0 0 .2em 0;
	}

	.info p {
			margin: 0;
	}
</style>
