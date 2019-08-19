# next-docker-k8s

## Useful Scripts

### `npm run dev`

Runs the app in the development mode.<br> Open [http://localhost:3000](http://localhost:3000) to
view it in the browser.

### `docker-compose up -d`

Runs the production builds of the Next.js Node server (to serve dynamic pages) and the Nginx web server (to serve static
assets). Open [http://localhost:8080](http://localhost:8080) to view the app in the browser.

---

## Compose (docker-compose) Commands

### `docker-compose up [OPTIONS]`

Builds, (re)creates, starts, and attaches to containers for a service.

Options:

`--detach, -d` : Detached mode: Run containers in the background, print new container names.

### `docker-compose down [OPTIONS]`

Stops containers and removes containers, networks, volumes, and images created by `up`.

---

## Docker Commands

### `docker build [OPTIONS] .`

Builds the production-ready Nginx image from the Dockerfile.

Options:

`--tag, -t` : Name and optionally a tag in the ‘name:tag’ format

### `docker exec [OPTIONS] CONTAINER COMMAND [ARG...]`

Runs a command in the running container.

Options:

`--interactive, -i` : Keep STDIN open even if not attached

`--tty, -t` : Allocate a pseudo-TTY

### `docker logs [OPTIONS] CONTAINER`

Fetches the logs of a container.

Options:

`--follow, -f` : Follow log output

### `docker ps [OPTIONS]`

Lists containers.

### `docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`

Runs a command in a new container.

Options:

`--publish , -p` : Publish a container’s port(s) to the host (e.g., `-p 8080:80` to bind port 80 of
the container (Nginx's default port) to port 8080 of the host machine)

---

## Deployment
