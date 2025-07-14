<script>
	import Wrapper from '$lib/components/Wrapper.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>Knowledgebase | Twijn.dev</title>
</svelte:head>

<Wrapper headingType="h1" heading="Knowledgebase" size="small" bg="transparent">
	<p>
		Need support for one of my projects?
		<br />
		We probably have an article on our knowledgebase for you!
	</p>
	<Button variant="primary" href="https://knowledgebase.twijn.dev" full={true} newTab={true}>
		Visit my Knowledgebase
	</Button>
</Wrapper>

<style>
	p {
		text-align: center;
	}
</style>
