# Booking-app

This a full-stack application written in Java Spring Framework and React with Typescript. The purpose of the application is to learn how to build complex projects using mentioned technologies. This project is my individual-project for university. The application works simirarily as Airbnb or Booking.com webiste. It enables users to create an account, add accommodations, rent accommodations and add reviews about the accommodations.

# Technology stack

## Backend

In order to write the logic of the application, I used several technologies including:
* SpringBoot 3.0.4,
* Java JDK 17.0.6,
* Apache Maven 3.8.5,
* Lombok

## Frontend

In order to write the client side application, I used those technologies:
* React 18.2.0
* Tailwind Css
* Typescript 5.0.4

## Other technologies
Other technologies used in project:
* Postman
* Docker

# How to run the application?
In order to run the application there are two possible ways of doing it:

## First way - preferable
In order to run application first way you will need docker, which can be installed:
* On Linux:

```
sudo apt install docker
```

* On Windows:

```
winget install Docker.DockerDesktop
```

After having installed the docker application, The developer prepared docker and makefile commands. In order to run them there are possibility to be
the administrator:

## Makefile commands

* `make`, `make all`, `make build` - uses *docker-compose* to build the whole project.
Client side app will be available at `localhost:3000`,
backend at `localhost:8080`

* `make clean` - command used to remove with force images created ,
during *docker-compose* build

* `make stop` - command used to turn off *docker-compose* image.

## Second way - if you do not want to install docker
If you do not want to install docker there is a possibility to run the application without docker application. You will need to have Node and java compiler and Maven installed.
Firstly you will need to run backend side application. In order to do that follow these steps:
1. Install maven:
* On Linux:

```
sudo apt install maven
```

2. Open root countries-app-backend and run following command(The directory in which you have pom.xml):
```
mvn run spring-boot
```
After having it completed you will have backend app working.

After completing the backend app you will need to run client side application:
1. Install dependencies:
Firstly you will need to install node dependencies. In order to do that go to frontend-main directory and run:
* On Linux:

```
npm install --silent
```

2. Run the application
After installing dependencies you will be able to run application with npm start. After doing it application will be available on localhost:3000.
