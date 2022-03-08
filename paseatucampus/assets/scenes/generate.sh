#!/bin/bash
shopt -s extglob

for i in ?(*.png|*.jpg|*.jpeg);do echo "\"${i%\.*}\":\"$i\",";done
