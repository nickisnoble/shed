#!/usr/bin/env node

/*
 * shed
 * https://github.com/nickisnoble/shed
 *
 * Copyright (c) 2014 Nick Noble
 * Licensed under the MIT license.
 */

'use strict';


var program = require('commander');

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
  .command('create [options] [filepath] [name]')
  .description('Create a new project')
  .option("-b, --basic", "Sets up a barebones static boilerplate")
  .option("-w, --wordpress", "Sets up a barebones WordPress theme")
  .option("-g, --ghost", "Sets up a barebones Ghost theme")


program.parse(process.argv);