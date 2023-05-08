<template>
    <div class="hero-wrapper">
        <div class="intro">
            <span class="intro-text">
                Welcome to my portfolio, I'm
            </span>
            <div class="intro-headers">
                <h1>Gabriel Zerbino.</h1>
                <h3>A full stack web Developer</h3>
            </div>
        </div>

        <div class="info">
            <p>
                I'm a student and web developer from Uruguay, focused on learning and improving my skills.
            </p>
            <p>
                With <b>more than 3 years of experience</b> working on web development,
                currently found my self in the search of new challenges and opportunities.
            </p>
        </div>
        
    </div>

</template>

<script></script>

<style scoped>
.hero-wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.intro {
    margin-bottom: 40px;
}

.intro-text {
    font-size: 1rem;
    font-weight: 300;
    font-family: var(--font-mono);
    color: var(--text-color);
    display: block;
    animation: fadeIn 1s ease-in-out;
}


h1, h3 {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
}

h3 {
    opacity: 0.6;
}

.intro-headers {
    animation: blurIn 2s ease-in-out;
}

.info {
    animation: slideIn 2s ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: min(100%, 800px);
}

@media screen and (max-width: 1024px) {
    h1, h3 {
        font-size: 2rem;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }    
}

@keyframes blurIn {
    0% {
        opacity: 0;
    }
    50% {
        filter: blur(5px);
        opacity: 0;
    }
    100% {
        filter: blur(0px);
        opacity: 1;
    }
}

@keyframes slideIn {
    0% {
        opacity: 0;
    }
    50% {
        transform: translateX(-50px);
        opacity: 0;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
}

@media (prefers-reduced-motion: reduce) {
    .intro-text {
        animation: none;
    }
    .intro-headers {
        animation: none;
    }
    .info {
        animation: none;
    }
}

</style>