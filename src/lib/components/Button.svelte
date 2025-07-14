<script lang="ts">
	export let href: string | undefined = undefined;
	export let newTab: boolean = false;
	export let variant: 'primary' | 'success' | 'error' = 'primary';
	export let onClick: (() => void) | undefined = undefined;
	export let full: boolean = false;
	export let disabled: boolean = false;
</script>

{#if href}
	<a {href} class="button {variant}" class:disabled class:full target={newTab ? "_blank" : undefined}>
		<slot/>
	</a>
{:else}
	<button on:click={onClick} class="button {variant}" {disabled} class:full>
		<slot/>
	</button>
{/if}

<style>
    .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.5em 1em;
        border-radius: 0.375em;
        font-size: 1rem;
        font-weight: 500;
        text-decoration: none;
        cursor: pointer;
        border: none;
				box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
        transition: all 0.2s ease;
    }

    .button :global(i) {
        margin-right: .5em;
    }

    .primary {
        background-color: var(--theme-color-1);
        color: white;
    }

    .success {
        background-color: #48c78e;
        color: white;
    }

    .error {
        background-color: #c83c3c;
        color: white;
    }

    .button:hover:not(.disabled) {
        opacity: 0.9;
        transform: translateY(-1px);
    }

    .button:active:not(.disabled) {
        transform: translateY(0);
    }

    .disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .full {
        width: calc(100% - 2em);
    }
</style>
