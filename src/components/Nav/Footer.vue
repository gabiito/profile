<template>
    <footer>
        Gabriel Zerbino © {{ year }}.
        <div class="disclaimer">
            <p>
                This portfilio page is built with Nuxt.js and
                the source code is available on my <a href="https://github.com/gabiito/profile" target="_blank">Github</a>.               
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>

<style>
footer {
    text-align: center;
    padding: 30px 0 20px;
    font-size: .8rem;
    margin-top: 50px;
    border-top: 1px solid var(--text-color);
}

.disclaimer {
    font-family: var(--font-mono);
    font-size: .6rem;
    margin-top: 10px;
    padding: 0 20px;
}


</style>