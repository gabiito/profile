<template>
    <header>
        <NavBar />
    </header>

    <NavSideLinks />
    
    <main>
        <slot />
    </main>
</template>

<script>
</script>

<style>
main {
    padding: 0 20vw;
}

@media screen and (max-width: 768px) {
    main {
        padding: 0 30px;
    }
}
</style>
