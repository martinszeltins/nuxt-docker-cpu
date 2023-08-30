module.exports = {
    apps: [
        {
            name: 'NuxtDocker',
            port: '3001',
            exec_mode: 'cluster',
            instances: 3,
            script: './.output/server/index.mjs'
        }
    ]
}  
