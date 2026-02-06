<script>
    import { onMount, onDestroy } from 'svelte';
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();

    let target;

    onMount(() => {
        target = document.createElement('div');
        document.body.appendChild(target);
        target.appendChild(container);
    });

    onDestroy(() => {
        target?.remove();
    });

    let container = $state();
</script>

<div bind:this={container}>
    {@render children?.()}
</div>
