# gmail-clone
Test using angular 1.5x

# Commands to run after clone
$ npm install
$ bower install
$ npm install gulp -g

#for live browser loading of project
go to the project directory
$ gulp watch

# step by step configuration:

<!-- installing gulp -->
$ sudo npm install gulp -g 
$ npm install --global gulp-cli

<!-- package.json -->
$ npm init setup 

<!-- including gulp to the project -->
$ npm install gulp --save-dev

<!-- adding gulp sass to the project -->
$ npm install gulp-sass --save-dev

<!-- install browsersync -->
$ npm install browser-sync --save-dev

<!-- for injecting files to index.html -->
$ npm install gulp-inject --save-dev

<!-- Injecting files from multiple steams -->
$ npm install --save-dev event-stream