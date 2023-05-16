<template>
    <div id="about">
        <div class="info">
            <h2>About me</h2>
            <p>
                Hi! My name is Gabriel, a web developer from Uruguay.
                <br>
                I'm coursing the Systems Engineering career at the University of the Republic.
                But also a self-taught developer, I've learned by researching,
                reading documentations and more than just one or two online courses.
            </p>
            <p>
                I've been working on web development for the last 3 years now, although I've been coding for more than 5
                years.
                <br>
                Mostly with PHP, but for my personal projects I've been choosing Node.js in the backend.
            </p>
            <p>
                Also worked with Vue.js for the frontend.
                And have some experience with multiple frameworks like Laravel, Express.js, Nuxt.js, etc.
            </p>
            <p>
                Up to this point I've had the privilege to work at an <a href="https://fenicio.io/" target="_blank">eCommerce company</a>,
                been a tutor on a <a href="https://jovenesaprogramar.edu.uy/" target="_blank">governmental program</a> which helps youth adults to start their development journey and
                a few personal projects that you can check out <NuxtLink to="/dev">here</NuxtLink>.
            </p>
            
            <p>
                Here are some of the technologies I've been working with:
            </p>
            <ul class="skills">
                <li class="skill">PHP</li>
                <li class="skill">Node.js</li>
                <li class="skill">JavaScript (ES6+)</li>
                <li class="skill">Vue.js</li>
                <li class="skill">Nuxt.js</li>
                <li class="skill">SQL</li>
                <li class="skill">MongoDB</li>
            </ul>
        </div>
        <InfoPhoto :photo="profilePhoto"/>
    </div>
</template>

<script setup>

const profilePhoto = 'https://avatars.githubusercontent.com/u/13451344?v=4';

definePageMeta({
    layout: 'default',
});


useHead({
    title: 'About me',
});

</script>

<style scoped>
#about {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 50px;
}

.info p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 20px;
}

.skills {
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
}

.skill {
    font-size: .8rem;
    padding: 5px 10px;
    color: var(--text-color-light);
    margin-left: 15px;
    position: relative;
}

.skill::before {
    content: '⎔';
    color: var(--primary-color);
    font-size: 14px;
    line-height: 12px;
    position: absolute;
    left: -15px;
    bottom: 7px;
}

@media (min-width: 1024px) {
    #about {
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;
    }

    .info {
        width: 60%;
    }
}

</style>