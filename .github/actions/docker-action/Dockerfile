FROM alpine:latest
RUN apk --no-cache add curl
ENTRYPOINT ["/bin/sh", "-c", "echo $INPUT_TEXT && curl -s https://api.github.com"]