<template>
    <div class="nav-bar-title" :class="{ 'show': !toggled}">
        <NuxtLink :to="linkTo">
            <slot/>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    name: 'NavTitle',
    props: {
        linkTo: {
            type: String,
            default: '/'
        },
        toggled: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.nav-bar-title {
    display: none;
    opacity: 0;
}

@media screen and (max-width: 1024px) {
    .nav-bar-title {
        display: block;
    }
    .nav-bar-title.show {
        transition: opacity .3s ease-in-out;
        opacity: 1;
    }
    
}
</style>