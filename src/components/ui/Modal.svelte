<script>
    import Portal from '../common/Portail.svelte';
    /**
     * @typedef {Object} Props
     * @property {boolean} [isOpen]
     * @property {string} [title]
     * @property {any} onClose
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { isOpen = false, title = '', onClose, children } = $props();

    const closeModal = () => onClose();

    let previousOverflow = $state();

    $effect(() => {
        if (typeof document !== 'undefined') {
            if (isOpen) {
                // update previousOverflow only if it's value is not equal to hidden
                // this is because effect runs multiple times and thus, the previousOverflow state would end up having 'hidden' value
                // and it would not unset upon close.
                if (document.body.style.overflow !== 'hidden') {
                    previousOverflow = document.body.style.overflow;
                }
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = previousOverflow || '';
            }
        }
    });
</script>

{#if isOpen}
    <Portal>
        <div
            class="fixed top-0 left-0 w-screen h-screen z-1000 bg-black/40 backdrop-blur-xs flex items-center justify-center"
            onclick={closeModal}
        >
            <div
                class="relative bg-white rounded-xl shadow-xl overflow-hidden"
                onclick={(event) => {
                    event.stopPropagation();
                }}
            >
                <!-- Close Button -->
                <button
                    class="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition cursor-pointer"
                    onclick={closeModal}
                    aria-label="Close modal"
                >
                    &times;
                </button>

                <!-- Modal Content -->
                <div class="overflow-y-auto">
                    {@render children?.()}
                </div>
            </div>
        </div>
    </Portal>
{/if}
