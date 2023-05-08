<template>
    <div class="dropdown">
        <button class="dropdown-button" @click="toggleDropdown">
            <slot name="button"></slot>
        </button>
        <div class="dropdown-content" v-if="showDropdown">
            <DropdownContent v-for="(link, index) in links"
                :key="index"
                :asset="link.asset"
                :text="link.text"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'DropdownToggler',
    props: {
        links: {
            type: Array,
            default: () => [{asset: '#', text: 'No text'}]
        }
    },
    data() {
        return {
            showDropdown: false
        }
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        }
    },
    mounted() {
        window.addEventListener('click', (event) => {
            if (!event.target.closest('.dropdown')) {
                this.showDropdown = false;
            }
        });
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.showDropdown = false;
            }
        });
    }
};

</script>

<style scoped>
.dropdown {
    position: relative;
}

.dropdown-button {
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
}

.dropdown-content {
    width: max-content;
    background-color: var(--accent-background-color);
    backdrop-filter: blur(10px);
    position: absolute;
    top: 120%;
    right: 0;
    border: 1px solid var(--accent-color);
    border-radius: 5px;
    padding: 10px;
    z-index: 1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.dropdown-content::before {
    content: '';
    position: absolute;
    top: -10px;
    right: 10px;
    border: 5px solid transparent;
    border-bottom-color: var(--accent-color);
}
.dropdown-content::after {
    content: '';
    position: absolute;
    top: -8px;
    right: 10px;
    border: 5px solid transparent;
    border-bottom-color: var(--accent-background-color);
}

.dropdown-content > * {
    margin: 0;
}

.dropdown-content > *:not(:last-child) {
    margin-bottom: 10px;
}

@media screen and (max-width: 1024px) {

    .dropdown-content {
        right: 0;
        top: 130%;
        width: 100%;
    }
}

</style>