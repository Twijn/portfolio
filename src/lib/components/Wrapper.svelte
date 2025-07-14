<script lang="ts">
	export let heading: string;
	export let headingType: 'h1' | 'h2' | 'h3' = 'h2';
	export let bg: 'transparent' | 'black' = 'transparent';
	export let size: 'small' | 'large' = 'large';
</script>

<section class:bg-black={bg === 'black'} class:small={size === 'small'}>
	<div class="wrapper">
		<svelte:element this={headingType} class="heading">
			{heading}
		</svelte:element>
		<slot />
	</div>
</section>

<style>
	section {
		padding: 5rem 1rem;
		text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
	}

	section.bg-black {
		background: var(--background-color-2);
	}

	.wrapper {
		width: 100%;
		max-width: 65em;
		margin: 0 auto;
	}

	.small .wrapper {
		max-width: 40em;
	}

	.heading {
		margin: 0 0 1rem 0;
		text-align: center;
	}

	@media only screen and (max-width: 700px) {
		section {
			padding: 2.5rem 1rem;
		}
	}
</style>
