<template>
    <div class="page-wrapper">
        <Title>Ooops! my bad... | Gabriel Zerbino</Title>
        <Meta name="robots" content="noindex" />
        <div class="content">
            <div class="content-image">
                <img src="/img/404.png" alt="Page not found" class="background-404">
                <img src="/img/astronaut.png" alt="Astronaut" class="astronaut">
            </div>
            <p>Ooops! My Bad...</p>
            <button @click="handleError">Take me back home!</button>
        </div>
    </div>
</template>
  
<script setup>

defineProps({
    error: Object
});



const handleError = () => clearError({ redirect: '/' });
</script>

<style scoped>
.page-wrapper {
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100%;
}

.content {
    max-width: 75%;
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.content-image {
    position: relative;
}

.content-image .background-404 {
    width: 100%;
}

.content-image .astronaut {
    position: absolute;
    top: 55%;
    left: 45%;
    filter: drop-shadow(3px 3px 0 rgba(0, 0, 0, 0.3));
    transform: translate(-50%, -50%);
    width: 35%;
    animation: gravity 8s ease-in-out infinite;
}

.content p {
    font-family: var(--font-mono);
    color: var(--primary-color);
    font-size: 1.2rem;
    text-align: right;
}

.content button {
    background-color: var(--accent-color);
    background-blend-mode: soft-light;
    color: var(--background-color);
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-family: var(--font-mono);
    font-size: 1.2rem;
    cursor: pointer;
    transition: all .3s ease;
}

.content button:hover {
    background-color: var(--primary-color);
    color: var(--background-color);
}

@keyframes gravity {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    25% {
        transform: translate(-50%, -50%) rotate(3deg);
    }
    50% {
        transform: translate(-50%, -55%) rotate(0deg);
    }
    75% {
        transform: translate(-45%, -50%) rotate(-3deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
}

@media (prefers-reduced-motion: reduce) {
    .content-image .astronaut {
        animation: none;
    }
}
</style>