#!/bin/bash

CONTAINER_NAME="milky-way-db"
CONTAINER_STATUS=$(docker inspect -f '{{.State.Running}}' $CONTAINER_NAME)
STATUS_QUERY_RESULT=$?

if [ "$STATUS_QUERY_RESULT" == "0" ]; then
  if [ CONTAINER_STATUS == "false" ]; then
    docker start $CONTAINER_NAME
  else
    echo "$CONTAINER_NAME already running"
  fi
else
  docker run --name $CONTAINER_NAME \
    -e 'POSTGRES_USER=root' \
    -e 'POSTGRES_PASSWORD=password' \
    -e 'POSTGRES_DB=milkyway' \
    -p 5432:5432 \
    -d postgres:9.6
fi
