<template>
    <a 
    class="download-link" 
    :href="asset" 
    @click="handleDownload"
    alt="Download my resume">
        
        {{text}}
    </a>
</template>

<script>
export default {
    name: 'DropdownContent',
    props: {
        asset: {
            type: String,
            default: '#'
        },
        text: {
            type: String,
            default: 'No text'
        }
    },
    methods: {
        handleDownload(event) {
            event.preventDefault();
            if (this.asset === '#') {
                alert('No asset provided');
            } else {
                window.open(this.asset, '_blank');
            }
        }
    }
}
</script>

<style scoped>
.download-link {
    display: block;    
    color: var(--text-color-light);
    text-decoration: none;
}

.download-link:hover {
    color: var(--primary-color);
}

@media screen and (max-width: 1024px) {
    .download-link {
        text-align: center;
        padding: 10px;
    }
    
}
</style>