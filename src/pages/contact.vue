<template>
    <div id="dev">
        <h2>Contact me</h2>

        <p>Please use one of the following methods to contact me.</p>
        <div class="contact-wrapper">
            <a href="https://github.com/gabiito" class="contact-card" target="_blank">
                <IconsGitHub />
                <div class="link-name">GitHub</div>
            </a>
            <a href="https://www.linkedin.com/in/gzerbino/" class="contact-card" target="_blank">
                <IconsLinkedIn />
                <div class="link-name">LinkedIn</div>
            </a>
            <a href="mailto:gabozerbino@gmail.com" class="contact-card" target="_blank">
                <IconsEmail />
                <div class="link-name">E-mail</div>	
            </a>
        </div>

    </div>
</template>

<script setup>

definePageMeta({
    layout: 'default',
});

useHead({
    title: 'Contact me',
});

</script>

<style scoped>
.contact-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 50px;
    flex-wrap: wrap;
}

.contact-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--background-color);
    width: 90%;
    gap: 25px;
    border: 1px solid var(--text-color);
    padding: 20px;
    border-radius: 5px;
    flex-grow: 0;
}

.contact-card::after {
    background-color: transparent;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    content: "";
    height: 100%;
    left: 5px;
    position: absolute;
    top: 5px;
    width: 100%;
    z-index: -1;
}

.link-name {
    color: var(--text-color);
    font-size: 1.2rem;
    font-weight: 500;
}
</style>