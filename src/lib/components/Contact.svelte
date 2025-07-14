<script lang="ts">
	import Wrapper from '$lib/components/Wrapper.svelte';
	import Button from '$lib/components/Button.svelte';

	export let headingType: 'h1' | 'h2' | 'h3' = 'h2';
</script>

<Wrapper heading="Get in Touch" {headingType} size="small">
	<p>Looking to get in touch?</p>
	<Button variant="primary" href="/contact" full={true}>View Contact Options</Button>
</Wrapper>

<style>
	p {
		text-align: center;
	}
</style>
