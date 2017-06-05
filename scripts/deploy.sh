#!/bin/sh

folder=$1

cd dist
#find dist -type f -exec echo ftp://files.000webhost.com$folder{} \;
# find /dist -type f -exec curl --user ${FTP_USER}:${FTP_PASSWORD} --ftp-create-dirs -T {} ftp://files.000webhost.com/public_html/{} \;

for file in **/**/**/*
do
    echo uploading ${file} to ftp://files.000webhost.com$folder${file}
    curl -u ${FTP_USER}:${FTP_PASSWORD} -T ${file} ftp://files.000webhost.com$folder${file}
done