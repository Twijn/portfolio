<script lang="ts">
	import SocialIcons from '$lib/components/SocialIcons.svelte';
</script>

<section class="landing">
	<div class="flex">
		<img
			src="images/avatar.webp"
			alt="Drawn avatar of person with brown hair, brown eyes, and facial hair on a blue background."
		/>
		<div>
			<h1>Twijn</h1>
			<p class="role">
				<span>Full Stack</span> Developer &bullet; System Administration &bullet; Cybersecurity
			</p>
			<p>
				Full Stack Developer creating web applications, Minecraft plugins, and Discord bots.
				Experienced in system administration and cybersecurity solutions.
			</p>
		</div>
	</div>
	<SocialIcons />
</section>

<style>
	.landing {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 1.1em;
		width: calc(100% - 4rem);
		min-height: 30em;
		max-width: 40rem;
		margin: 0 auto;
		text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
	}

	.flex {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
	}

	img {
		width: 8rem;
		height: 8rem;
		border-radius: 50%;
	}

	h1 {
		margin: 0 0 0.5rem 0;
	}

	p {
		margin: 0.5em 0;
	}

	.role {
		font-size: 1rem;
		font-weight: 500;
		opacity: 0.8;
	}
</style>
