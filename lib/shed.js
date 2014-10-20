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
    chalk = require('chalk');

/*
  When the tool is installed, we need to `$ mkdir -p ~/.shed/templates`,
  and clone all of our default boilerplates there.
*/

program
  .version('0.0.1')
  .usage('[command] [options] <keywords>')

/* 
  SHED CREATE 
  This should:
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
    shell.exec('mkdir ' + name, function(){
      console.log(chalk.cyan('Made a new directory!'))
    });
    shell.exec('git clone -q git@github.com:nickisnoble/hotplate.git ' + name, function(){
      console.log(chalk.cyan('Cloned static boilerplate!'))
    });
    shell.cd(name)
    shell.rm('-rf', '.git')
    shell.exec('git init', function(){
      console.log(chalk.cyan('Initialized a git repository!'))
    });
    shell.exec('git add .gitignore && git commit -m "add .gitignore"', function(){
      console.log(chalk.cyan('Added gitignore!'))
    });
    shell.exec('git add . && git commit -m "initial commit"', function(){
      console.log(chalk.cyan('Initail files commited!'))
    });
    shell.exec('npm install && bundle install', function(){
      console.log(chalk.cyan('Installed dependencies!'))
    });
    console.log(chalk.magenta.bold('Your all set!'))
  });


program.parse(process.argv)

if(!program.args.length) {
  program.help()
}else{
  // console.log('Arguments:', program.args.length); // see args for debug
  // console.log(program.args);
}