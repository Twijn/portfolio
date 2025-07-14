<script lang="ts">
	import Wrapper from '$lib/components/Wrapper.svelte';
	import Button from '$lib/components/Button.svelte';

	const { data } = $props();
	const { project } = data;
</script>

<svelte:head>
	<title>{project.name} | Project | Twijn.dev</title>
</svelte:head>

<Wrapper heading={`${project.name} - Project`}>
	<div class="container">
		<img class="banner" src={project.image} alt={project.name} />
		<div class="links section">
			<h2>Links</h2>
			{#if project.urls}
				<nav class="urls">
					{#each project.urls as url (url.name)}
						{#if url.url === '#'}
							<Button onClick={() => alert('Project link coming soon!')}>{url.name}</Button>
						{:else}
							<Button href={url.url} newTab={true}>{url.name}</Button>
						{/if}
					{/each}
				</nav>
			{/if}
		</div>
		<div class="description section">
			<h2>Description</h2>
			<p>{project.description}</p>
		</div>
		<div class="technologies section">
			<h2>Technologies</h2>
			<ul>
				{#each project.technologies as tech (tech)}
					<li>{tech}</li>
				{/each}
			</ul>
		</div>
	</div>
</Wrapper>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-areas:
			'banner banner links'
			'description description technologies';
		gap: 0.75rem;
	}

	.section {
		background-color: var(--background-color-1);
		padding: 0.75rem;
		border-radius: 0.5rem;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
	}

	.section h2 {
		font-size: 1rem;
		text-transform: uppercase;
		color: var(--text-color-2);
		font-weight: 500;
		padding: 0 0.25rem 0.25rem;
		margin: 0 0 0.5rem 0;
		border-bottom: 0.2em solid var(--theme-color-1);
	}

	.banner {
		grid-area: banner;
		width: 100%;
		aspect-ratio: 2;
		border-radius: 0.5rem;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
	}

	.description {
		grid-area: description;
	}

	.links {
		grid-area: links;
	}

	.links nav {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
