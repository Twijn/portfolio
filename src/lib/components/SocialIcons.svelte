<script lang="ts">
	import { socials } from '$lib/constants/socials';
</script>

<nav class="socials">
	{#each socials as social (social.name)}
		<a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
			<i class={social.icon}></i>
		</a>
	{/each}
</nav>

<style>
    .socials {
        display: flex;
        gap: .75rem;
        margin-top: 0.5rem;
        text-shadow: 2px 2px 10px rgba(0,0,0,0.25);
        position: relative;
    }

    .socials a {
        color: var(--text-color-2);
        font-size: 1.5rem;
        text-decoration: none;
        transition: transform 0.2s ease, color 0.2s ease;
        padding: 0.5rem;
        position: relative;
    }

    .socials a::after {
        content: attr(aria-label);
        position: absolute;
        bottom: -2rem;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.25rem 0.5rem;
        background: var(--background-color-1);
        color: var(--text-color-1);
        border-radius: 4px;
        font-size: 0.875rem;
        white-space: nowrap;
				box-shadow: 2px 2px 10px rgba(0,0,0,0.25);
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s ease, visibility 0.2s ease;
    }

    .socials a:hover::after,
    .socials a:focus-visible::after {
        opacity: 1;
        visibility: visible;
    }

    .socials a:hover,
    .socials a:focus {
        color: var(--theme-color-1);
        transform: translateY(-2px);
    }

    .socials a:focus {
        outline: 2px solid var(--theme-color-1);
        outline-offset: 2px;
        border-radius: 4px;
    }
</style>
