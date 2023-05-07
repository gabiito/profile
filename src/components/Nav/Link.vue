<template>
     <li class="nav-item">
        <NuxtLink :to="linkTo"
            class="link"
        >
            <slot></slot>
        </NuxtLink>
        <div class="link-bottom"></div>
    </li>
</template>

<script setup>

defineProps({
    linkTo: {
        type: String,
        required: true
    }
});

</script>

<style scoped>
.nav-item {
    position: relative;
    padding: 5px;
}
.link {
    color: #d1d5db;
    text-decoration: none;
    font-size: 13px;
    font-family: var(--font-mono);
    position: relative;
    cursor: pointer;
}

.link-bottom {
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease-in-out;
}

.nav-item:hover .link-bottom {
    animation: bottom-border 0.3s ease-in-out forwards;
}

.link.router-link-active::before {
    content: '> ';
    color: var(--primary-color);
    position: absolute;
    bottom: 1px;
    left: -2ch
}

@keyframes bottom-border {
    0% {
        width: 0;
    }
    100% {
        width: 90%;
    }
}

</style>