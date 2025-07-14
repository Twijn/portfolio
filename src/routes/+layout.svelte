<script lang="ts">
	import("@fontsource/platypi/400.css");
	import("@fontsource/platypi/500.css");
	import("@fontsource/source-sans-3/400.css");
	import("@fontsource/source-sans-3/500.css");
	import("$lib/css/app.css");

	import { page } from '$app/state';

	const { children } = $props();
</script>

<header>
	<div class="logo">Twijn</div>
	<nav>
		<ul>
			<li><a href="/" aria-current={page.url.pathname === "/" ? 'page' : undefined}>Home</a></li>
			<li><a href="/projects" aria-current={page.url.pathname.startsWith('/projects') ? 'page' : undefined}>Projects</a></li>
			<li><a href="/contact" aria-current={page.url.pathname === "/contact" ? 'page' : undefined}>Contact</a></li>
			<li><a href="/knowledgebase" aria-current={page.url.pathname === "/knowledgebase" ? 'page' : undefined}>Knowledgebase</a></li>
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
	}

	.logo {
			font-family: var(--heading-font), serif;
			font-size: 2em;
			text-shadow: 2px 2px 10px rgba(0,0,0,0.25);
	}

	header nav ul {
			display: flex;
			margin: 0;
			padding: 0;
			list-style: none;
	}

	header nav a {
			position: relative;
			font-size: 1.1em;
			color: var(--text-color-1);
			font-weight: 500;
			text-decoration: none;
			padding: .6em .8em;
			opacity: .8;
			transition: .2s;
	}

	header nav a::after {
			position: absolute;
			left: 50%;
			bottom: .5em;
			transform: translate(-50%, .3em);
			content: '';
			background-color: var(--theme-color-1);
			width: calc(100% - 1em);
			height: .3em;
			z-index: -1;
			opacity: 0;
			transition: .2s;
	}

	header nav a[aria-current='page']::after {
			transform: translateX(-50%);
			opacity: 1;
	}

	header nav a[aria-current='page'] {
			opacity: .9;
	}

	header nav:hover a,
	header nav:focus-within a {
			opacity: .5;
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
