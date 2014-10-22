#!/usr/bin/env node

/*
 * shed
 * https://github.com/nickisnoble/shed
 *
 * Copyright (c) 2014 Nick Noble
 * Licensed under the MIT license.
 */

'use strict';


var program = require('commander'),
    shell = require('shelljs'),
    async = require(),
    chalk = require('chalk');

/*
  When the tool is installed, it should do a few things:
  - set up a ~/.shed/ directory to store default configs and templates
  - clone the default repos to ~/.shed/templates/ so that the tool can be used without internet. This is also where user defined templates would go.
  - Run the user through a quick interview to get default values for new projects (i.e. author name)
*/

program
  .version('0.0.1')
  .usage('[command] <options>')

/* 
  SHED CREATE 
  This should (roughly):
  - `$ mkdir [name] && cd [name]`
  - make copies of the specified template
  - walk the user through filling in bare minimums on package.json etc. (until we can build autofill)
  - install the default dependancies
  - git init, commit supplied .gitignore, then commit other files
  - confirm completion

  It should be verbose in plain english, console.logging what it's up to. Some templates may have extra steps.
*/

program
  .command('create <name> [options]')
  .description('Create a new project')
  .option("-b, --basic", "Sets up a barebones static boilerplate")
  .option("-w, --wordpress", "Sets up a barebones WordPress theme")
  .option("-g, --ghost", "Sets up a barebones Ghost theme")
  .action(function(name){

    // Have to nest everything as callbacks to make sure they run in order
    // there's a better way to do this I'm sure, will do more reading

    shell.exec('mkdir ' + name, function(){
      console.log(chalk.cyan('Made a new directory!'))

      shell.exec('git clone -q git@github.com:nickisnoble/hotplate.git ' + name, function(){
        console.log(chalk.cyan('Cloned static boilerplate!'))

        shell.cd(name)

        shell.rm('-rf', '.git')

        shell.exec('git init -q', function(){
          console.log(chalk.cyan('Initialized a git repository!'))

          shell.exec('git add .gitignore && git commit -m "add .gitignore" && git add . && git commit -m "initial commit"', function(){
            console.log(chalk.cyan('.gitignore and initial files commited!'))

            shell.exec('npm install && bundle install', function(){
              console.log(chalk.cyan('Installed dependencies!'))

              console.log(chalk.magenta.bold('Your all set! Go ahead, `$ cd ' + name + '`, edit package.json, and get this show on the road :)'))
              console.log(chalk.grey('Running `$ grunt` within your project will compile sass (with compass!), order css properties, and some other cool stuff'))
            });

          });

        });

      });

    });
    
  });

program.parse(process.argv)

if(!program.args.length) {
  program.help()
}else{
  // console.log('Arguments:', program.args.length); // see args for debug
  // console.log(program.args);
}