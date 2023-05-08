<template>
    <nav :class="{ 'scrolling': scrolling, 'toggled': toggled }">
        <ul class="nav-bar">
            <NavLink 
                linkTo="/"
                @click="toggled = false"
            >
                Home
            </NavLink>
            <NavLink 
                linkTo="/about"
                @click="toggled = false"
            >
                About
            </NavLink>

            <NavLink 
                linkTo="/experience"
                @click="toggled = false"
            >
                Experience
            </NavLink>
            <NavLink 
                linkTo="/dev"
                @click="toggled = false"
            >
                Dev
            </NavLink>
            <NavLink 
                linkTo="/contact"
                @click="toggled = false"
            >
                Contact
            </NavLink>

            <NavResume />
        </ul>
        <NavTitle :toggled="toggled"> 
            Gabriel Zerbino
        </NavTitle>
        <button class="mobile-toggle open"
            @click="toggled = !toggled"
            v-if="!toggled"
        >
            <IconsMenuToggle />
        </button>
        <button class="mobile-toggle close"
            @click="toggled = !toggled"
            v-if="toggled"
        >
            <IconsMenuClose />
        </button>
    </nav>
</template>

<script>

export default {
    name: 'NavBar',
    data() {
        return {
            scrolling: false,
            toggled: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.scrolling = window.scrollY > 0;

        const nav = document.querySelector('nav');
        this.height = nav.offsetHeight;
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 0) {
                this.scrolling = true && !this.toggled;
            } else {
                this.scrolling = false;
            }
        }
    }
}

</script>

<style scoped>
nav {
    width: 100%;
    padding: 20px 40px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: var(--background-color);
    transition: all .5s ease;
}

nav.scrolling {
    padding: 5px 40px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}

.nav-bar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2em;
    list-style: none;
}

.link

.nav-bar-title {
    display: none !important;
    border: 2px solid red;
    font-size: 18px;
    font-weight: 700;
    transition: all 0.2s ease-in-out;
}

.nav-bar-title a {
    color: var(--text-color-light);
    color: red;
}

.mobile-toggle {
    display: none;
}


@media screen and (max-width: 1024px) {
    nav {
        min-height: 55px

    }
    nav:not(.toggled) .nav-bar {
        height: 0;
        overflow: hidden;
    }

    nav.toggled .nav-bar {
        height: 100vh;
        padding-top:30px;
    }

    nav:not(.toggled) .nav-item {
        opacity: 0;
    }

    nav.toggled .nav-item {
        opacity: 1;
        width: 100%;
    }

    nav.toggled .link:not(.resume) {
        display: block;
        width: 100%;
    }

    nav:not(.toggled) .nav-bar-bottom {
        display: block;
    }

    nav.scrolling:not(.toggled) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .nav-bar {
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        transition: all 0.4s ease-in-out;
    }

    .nav-item {
        transition: all 0.3s .1s ease-in-out;
    }

    .mobile-toggle {
        display: block;
        position: absolute;
        top: 5px;
        right: 5px;
        cursor: pointer;
        border: none;
        background: none;
        color: var(--primary-color);
        transition: all .3s ease;
    }
    
}
</style>