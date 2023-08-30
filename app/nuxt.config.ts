export default defineNuxtConfig({
    devtools: { enabled: true },

    vite: {
        server: {
            hmr: {
                clientPort: 21750,
            },
        },
    }
})
