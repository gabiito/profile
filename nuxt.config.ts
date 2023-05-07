// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src',
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
        }
      },
});
