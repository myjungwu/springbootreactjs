#FROM openjdk:8
#EXPOSE 8080
#ADD target/springboot-reactjs-backend.jar springboot-reactjs-backend.jar
#ENTRYPOINT ["java","-jar","/springboot-reactjs-backend.jar","--spring.profiles.active=prod","--DB=mysql-svc"]

#### mvnw clean package spring-boot:repackage ####
FROM openjdk:8
VOLUME /tmp
COPY target/springboot-reactjs-backend.jar springboot-reactjs-backend.jar
ENTRYPOINT ["java","-jar","/springboot-reactjs-backend.jar","--spring.profiles.active=prod","--DB=mysql-svc"]