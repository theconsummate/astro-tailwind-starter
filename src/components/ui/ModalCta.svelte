<script>
    import Modal from './Modal.svelte';
    import { twMerge } from 'tailwind-merge';
    /**
     * @typedef {Object} Props
     * @property {string} [ctaUrl]
     * @property {string} buttonText
     * @property {string} classes
     */

    /** @type {Props} */
    let { ctaUrl = '', buttonText = 'Button Text', classes = '' } = $props();
    let isModalOpen = $state(false);

    function toggleModal() {
        isModalOpen = !isModalOpen;
    }
</script>

<div class="mx-auto">
    <button onclick={toggleModal} class={twMerge('', classes)}>
        {buttonText}
    </button>
    <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <iframe
            title="cta form"
            src={ctaUrl}
            class="w-screen lg:w-[90vw] h-screen lg:h-[90vh]"
            loading="lazy"
            allowfullscreen
        >
        </iframe>
    </Modal>
</div>
