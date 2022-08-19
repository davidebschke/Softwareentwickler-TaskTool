FROM openjdk:18

ENV ENVIRONMENT=prod

LABEL maintainer="davidebschkeWork@outlook.com"

ADD backend/target/SETT.jar SETT.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -jar /SETT.jar" ]
