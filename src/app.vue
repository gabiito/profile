<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <NavFooter />
</template>

<script setup>

useSeoMeta({
  description: 'Gabriel Zerbino, a software developer based in Montevideo, Uruguay. I am passionate about web development and open source software.',
  image: 'https://avatars.githubusercontent.com/u/13451344?v=4',
  url: 'https://gzerbino.dev',
  author: 'Gabriel Zerbino',
  robots: 'index, follow',
  googlebot: 'index, follow',
  keywords: 'gabriel zerbino, gzerbino, gabiito, web developer, full stack, full stack developer, software developer',
});

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Gabriel Zerbino` : 'Gabriel Zerbino | Web Developer';
  }
});

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&display=swap");

:root {
  --background-color: #0a192f;
  --accent-background-color: #2d3250;
  /* --background-color: #2d3250; */
  /* --background-color: #1b1c27; */
  /* --background-color: #0d0c1d; */
  /* --background-color: #232836; */

  --accent-color: #8168aa;
  --primary-color: #64ffda;
  --primary-color: #f9b17a;
  --primary-color: #f1dac4;
  --primary-color-dark: #14b8a6;
  --text-color: #676f9d;
  /* --text-color: #64748b; */
  /* --text-color: #6b7280; */
  --text-color-light: #a69cac;
  --text-color-light: #cbd5e1;
  --text-color-light: #d1d5db;
  --font-sans: "Inter", "San Francisco", "SF Pro Text", -apple-system, system-ui, sans-serif;
  --font-mono: "SF ", "Fira Code", "Fira Code", "Roboto Mono", monospace;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(5px);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--background-color);
  font-family: var(--font-sans);
  color: var(--text-color);
  font-size: 1em;
  scroll-behavior: smooth;
  width: 100%;
}

#__nuxt {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

h1,
h2,
h3,
h4,
h5 {
  color: var(--text-color-light);
  font-weight: 600;
  padding: 20px 0;
}

h2::after {
  content: "";
  display: block;
  width: 50px;
  height: 2px;
  background-color: var(--primary-color);
  margin-top: 5px;
}

b,
strong {
  color: var(--text-color-light);
}

a {
  color: var(--primary-color);
  text-decoration: none;
}

li:not(.nav-item)::before {
  content: '⎔';
  color: var(--primary-color);
  font-size: 14px;
  line-height: 12px;
  position: absolute;
  left: -20px;
  bottom: 2px;
}


/* width */
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--text-color);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--text-color-light);
}

::-moz-selection {
  color: var(--background-color);
  background: var(--text-color-light);
}

::selection {
  color: var(--background-color);
  background: var(--text-color-light);
}</style>