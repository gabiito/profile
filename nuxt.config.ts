export default defineNuxtConfig({
    srcDir: 'src',
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          htmlAttrs: { lang: 'en' },
          link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
          ],
        },
      },
});
