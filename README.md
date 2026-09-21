# Docker Commands

## 1. Detached Mode

Run a container in the background:

```bash
docker run -d -p 80:80 <image_name>
```

Start an existing container:

```bash
docker start <container_id>
```

## 2. Attach to a Container

Attach to a running container:

```bash
docker attach <container_id>
```

Start an existing container and attach to it:

```bash
docker start -a <container_id>
```

Follow container logs:

```bash
docker logs -f <container_id>
```

## 3. Remove Container

```bash
docker rm <container_id>
```

## 4. Remove Image

Remove a specific image:

```bash
docker rmi <image_id>
```

Remove unused/dangling images:

```bash
docker image prune
```

## 5. Interactive Mode

```bash
docker run -it <image_name>
```

Restart a container in interactive/attached mode:

```bash
docker start -a -i <container_id>
```

## 6. Inspect Image

```bash
docker image inspect <image_id>
```

## 7. Build and Name an Image

```bash
docker build -t <image_name> .
```

## 8. Name a Container

```bash
docker run -d -p 80:80 --name <container_name> <image_name>
```

## 9. Copy Files/Folders to a Container

```bash
docker cp <source_path> <container_id>:<destination_path>
```

## 10. Anonymous Volume

```bash
docker run -d -p 80:80 -v /app/data <image_name>
```

## 11. Named Volume

```bash
docker run -d -p 80:80 -v <volume_name>:/app/data <image_name>
```

## 12. Bind Mount

```bash
docker run -d -p 80:80 -v <path_to_source>:<path_to_destination> <image_name>
```

## 13. Read-Only Bind Mount

```bash
docker run -d -p 80:80 -v <path_to_source>:<path_to_destination>:ro <image_name>
```

## 14. Environment Variable at Runtime

```bash
docker run -e <environment_variable_name>=<value> <image_name>
```

## 15. Environment Variable in Dockerfile

```dockerfile
ENV <environment_variable_name>=<value>
```

## 16. Build Argument at Build Time

```bash
docker build -t <image_name> --build-arg <argument_name>=<value> .
```

## 17. Build Argument in Dockerfile

```dockerfile
ARG DEFAULT_PORT=80
```

## 18. Create Network

```bash
docker network create <network_name>
```

## 19. Use Host Machine

```text
host.docker.internal
```

## 20. Inspect Container

```bash
docker container inspect <container_name>
```

## 21. Use the Same Network for Multiple Containers

```bash
docker run --network <network_name> <image_name>
```

## 21. For setting password and username in image

```bash
docker run -e MONGO_INITDB_ROOT_USERNAME="your username" -e MONGO_INITDB_ROOT_PASSWORD="your password" <image_name>
```

## 22. for docker compose up

```bash
docker compose up
```

## 23. for docker compose down

```bash
docker compose down
```

## 24. for remove volumes too

```bash
docker compose down -v
```

Containers connected to the same Docker network can communicate with each other using their container names.

Example:

```bash
docker run -d --name mongodb --network mynetwork mongo
```

Another container on the same network can connect using:

```text
mongodb://mongodb:27017
```

