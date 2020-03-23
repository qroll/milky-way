#!/bin/bash

CONTAINER_NAME="milky-way-db"

docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME