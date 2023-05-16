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
    margin-top: 80px;
    flex-grow: 1;
}

@media screen and (max-width: 1024px) {
    main {
        padding: 0 30px;
    }
}
</style>
