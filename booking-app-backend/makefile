backend-container-name = booking-app-backend
db-container-name = booking-app-db
port = -p 8080:8080
postgres-image = postgres:latest

run = docker run
pull = docker pull
build = docker build
stop = docker stop
remove = docker rm

.PHONY database, stop, clean, clean, backend-image

backend: database, spring
    $(run) --name $(backend-container-name) -d -p 8080:8080 $(backend-container-name):latest

spring:
    $(build) -t $(backend-container-name) .

database:
    $(run) --name $(db-container-name) POSTGRES_USER=root -e POSTGRES_PASSWORD=root -d -p 5432:5432 $(postgres-image)

pull:
    $(pull) $(postgres-image)

stop:
    $(stop) $(db-container-name)
    $(stop) $(backend-container-name)

clean:
    $(remove) $(db-container-name)
    $(remove) $(backend-container-name)

