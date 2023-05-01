frontend-container-name = frontend-booking-app
run = docker run
stop = docker stop
clean = docker rm
docker build = build

.PHONY all, frontend, build, stop, clean

all:
    build

frontend:
    $(run) --name $(frontend-container-name) -d -p 3000:3000

build:
    $(build) -t $(fronted-container-name) -p 3000:3000 .

stop:
    $(stop) $(frontend-container-name)

clean:
    $(remove) $(frontend-container-name)

