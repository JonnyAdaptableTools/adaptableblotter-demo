#!/bin/sh

folder=$1
user=$2
password=$3

cd dist
#find dist -type f -exec echo ftp://files.000webhost.com$folder{} \;
# find /dist -type f -exec curl --user ${FTP_USER}:${FTP_PASSWORD} --ftp-create-dirs -T {} ftp://files.000webhost.com/public_html/{} \;

filestoupload=""

for file in **/**/**/*
do
    if [[ -f ${file} ]]
    then
        if [ -z ${filestoupload} ]
        then
            filestoupload=${file}
        else
            filestoupload=${filestoupload}","${file}
        fi
    fi
done

for file in **/**/*
do
    if [[ -f ${file} ]]
    then
        if [ -z ${filestoupload} ]
        then
            filestoupload=${file}
        else
            filestoupload=${filestoupload}","${file}
        fi
    fi
done

for file in **/*
do
    if [[ -f ${file} ]]
    then
        if [ -z ${filestoupload} ]
        then
            filestoupload=${file}
        else
            filestoupload=${filestoupload}","${file}
        fi
    fi
done

for file in *
do
    if [[ -f ${file} ]]
    then
        if [ -z ${filestoupload} ]
        then
            filestoupload=${file}
        else
            filestoupload=${filestoupload}","${file}
        fi
    fi
done

#echo $filestoupload
curl -u ${user}:${password} --ftp-create-dirs -T "{"${filestoupload}"}" ftp://files.000webhost.com$folder --keepalive-time 60