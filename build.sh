#! /usr/bin/bash

if [ -n $FALTSO_BUILD_PATH ]; then
	build_target=$FALTSO_BUILD_PATH; 
else
	echo "FALTSO_BUILD_PATH not set or null, exiting."
	exit $?
fi


echo Building css

npx tailwind build ./src/assets/css/styles.css -c ./tailwind.config.js -o ./src/_site/assets/css/build.css 

echo build.css is $(du -sh ./src/_site/assets/css/build.css | cut -f 1)

echo Purging css

npx purgecss -c purgecss.config.js -o ./src/_site/assets/css

echo build.css is $(du -sh ./src/_site/assets/css/build.css | cut -f 1)
