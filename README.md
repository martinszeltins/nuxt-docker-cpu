### Instructions

```bash
# Clone the repo
git clone https://github.com/martinszeltins/nuxt-docker-cpu.git
cd nuxt-docker-cpu

# Run the Docker container
docker-compose up -d
docker-compose logs --follow

# Wait for it to install dependencies and build the app (you will see it in the logs)

# Run the Nuxt dev server
docker exec -it nuxt-docker-client pnpm run dev
```
