FROM maven:3.9.0-eclipse-temurin-17 AS BUILD

WORKDIR /home/app

COPY pom.xml .

COPY src/ src/

RUN mvn -f /home/app/pom.xml clean package

FROM openjdk:17-jdk-slim

COPY --from=BUILD /home/app/target/countries-app-backend-0.0.1-SNAPSHOT.jar /usr/local/lib/app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/usr/local/lib/app.jar"]