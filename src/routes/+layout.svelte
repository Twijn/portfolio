<script lang="ts">
	import('@fontsource/platypi/400.css');
	import('@fontsource/platypi/500.css');
	import('@fontsource/source-sans-3/400.css');
	import('@fontsource/source-sans-3/500.css');
	import('$lib/css/app.css');

	import { page } from '$app/state';

	const { children } = $props();
	let isMenuOpen = $state(false);

	function onClick(e: MouseEvent) {
		const target = e.target as HTMLElement;
		if (!target.closest('.mobile-menu-button') && !target.closest('nav')) {
			isMenuOpen = false;
		}
	}
</script>

<svelte:window onclick={onClick} />

<header>
	<div class="logo">Twijn</div>
	<button
		class="mobile-menu-button"
		onclick={() => (isMenuOpen = !isMenuOpen)}
		aria-label="Toggle menu"
	>
		<span class="hamburger" class:open={isMenuOpen}>
			<span></span>
			<span></span>
			<span></span>
		</span>
	</button>
	<nav class:open={isMenuOpen}>
		<ul>
			<li><a href="/" aria-current={page.url.pathname === '/' ? 'page' : undefined}>Home</a></li>
			<li>
				<a
					href="/projects"
					aria-current={page.url.pathname.startsWith('/projects') ? 'page' : undefined}>Projects</a
				>
			</li>
			<li>
				<a href="/contact" aria-current={page.url.pathname === '/contact' ? 'page' : undefined}
					>Contact</a
				>
			</li>
			<li>
				<a
					href="/knowledgebase"
					aria-current={page.url.pathname === '/knowledgebase' ? 'page' : undefined}
					>Knowledgebase</a
				>
			</li>
		</ul>
	</nav>
</header>
<main>
	{@render children?.()}
</main>
<footer>
	Copyright {new Date().getFullYear()} &copy; Twijn
</footer>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
		height: 4rem;
		position: relative;
	}

	.logo {
		font-family: var(--heading-font), serif;
		font-size: 2em;
		text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
	}

	.mobile-menu-button {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
	}

	.hamburger {
		width: 24px;
		height: 20px;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.hamburger span {
		display: block;
		height: 2px;
		width: 100%;
		background-color: var(--text-color-1);
		transition: 0.3s;
	}

	.hamburger.open span:nth-child(1) {
		transform: translateY(9px) rotate(45deg);
	}

	.hamburger.open span:nth-child(2) {
		opacity: 0;
	}

	.hamburger.open span:nth-child(3) {
		transform: translateY(-9px) rotate(-45deg);
	}

	header nav ul {
		display: flex;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	@media (max-width: 768px) {
		.mobile-menu-button {
			display: block;
		}

		header nav {
			position: absolute;
			top: 100%;
			right: 1em;
			background: var(--background-color-1);
			padding: 1rem;
			transform: translateX(100%);
			opacity: 0;
			pointer-events: none;
			transition: 0.3s;
			border-radius: 0.5em;
			box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
			z-index: 10;
		}

		header nav.open {
			transform: translateX(0);
			opacity: 1;
			pointer-events: all;
		}

		header nav ul {
			flex-direction: column;
			gap: 1rem;
		}
	}

	header nav a {
		position: relative;
		display: block;
		font-size: 1.1em;
		color: var(--text-color-1);
		font-weight: 500;
		text-decoration: none;
		text-align: center;
		padding: 0.6em 0.8em;
		opacity: 0.8;
		transition: 0.2s;
	}

	header nav a::after {
		position: absolute;
		left: 50%;
		bottom: 0.5em;
		transform: translate(-50%, 0.3em);
		content: '';
		background-color: var(--theme-color-1);
		width: calc(100% - 1em);
		height: 0.2em;
		z-index: -1;
		opacity: 0;
		transition: 0.2s;
	}

	header nav a[aria-current='page']::after {
		transform: translateX(-50%);
		opacity: 1;
	}

	header nav a[aria-current='page'] {
		opacity: 0.9;
	}

	@media only screen and (min-width: 768px) {
		header nav:hover a,
		header nav:focus-within a {
			opacity: 0.5;
		}
	}

	header nav a:hover,
	header nav a:focus-visible {
		opacity: 1;
	}

	footer {
		padding: 1rem;
		text-align: center;
	}
</style>
