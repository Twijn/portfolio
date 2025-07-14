<script lang="ts">
	import Wrapper from '$lib/components/Wrapper.svelte';
	import { projects } from '$lib/constants/projects';
	import Button from '$lib/components/Button.svelte';
</script>

<Wrapper heading="Projects">
	<div class="projects">
		{#each projects as project (project.id)}
			<div class="project">
				<img src={project.image} alt={project.name}>
				<div class="project-info">
					<h3>{project.name}</h3>
					<p class="technologies">{project.technologies.join(" • ")}</p>
					<p class="description">{project.description}</p>
					<Button href={project.getLocalURL()} full={true}>
						More Information
					</Button>
				</div>
			</div>
		{/each}
	</div>
</Wrapper>

<style>
	.projects {
			display: grid;
			gap: 1rem;
			grid-template-columns: repeat(auto-fit, minmax(150px, 450px));
			justify-content: center;
	}

	.project {
			display: flex;
			flex-direction: column;
			background-color: var(--background-color-1);
			border-radius: .35rem;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
	}

	.project img {
      width: 100%;
      aspect-ratio: 2;
			border-radius: .35rem .35rem 0 0;
			border-bottom: .2em solid var(--theme-color-1);
	}

	.project-info {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
      gap: .5rem;
			text-align: center;
			padding: 1rem;
	}

	h3 {
			margin: 0;
	}

	p {
			margin: 0;
	}

	.technologies {
			opacity: .8;
	}

	.description {
      flex: 1;
	}
</style>
