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

program
    .version('0.0.1')
    .usage('[command] [options] <keywords>')

/*
  ## The create command
  Creates new projects from boilerplates. Defaults to static. This is the core functionality.

  Should work like this:

  `$ shed create foo` - create a new directory called 'foo', set up static site boilerplate, run follow up.
  `$ shed create -w foo` - create a new directory called 'foo', set up wordpress theme boilerplate, run follow up.
  `$ shed create -g foo` - create a new directory called 'foo', set up ghost theme boilerplate, run follow up.

  follow up = 

  - install dependencies
  - git init, commit .gitignore, commit others

*/
program
  .command('create [filepath] [name]')
  .description('Create a new project')
  .option("-b, --basic", "Sets up a barebones static boilerplate")
  .option("-w, --wordpress", "Sets up a barebones WordPress theme")
  .option("-g, --ghost", "Sets up a barebones Ghost theme")


/*
  ## Config command
  Sets defaults to use in package.json's, WordPress theme frontmatter, etc. This is an enhancement, for now we could just ask on `create`.

  Should work like this:
  `$ shed config -a` - Set global author (fallback to git user?)
  `$ shed config -l` - Set global license (fallback to MIT?)
  `$ shed config -w` - Set global author website (If not set, use project git repo)
  etc.

  `$ shed config -L --foo` - Sets value locally to the project, instead of globally

*/

// Config stuff goes here



/*
  ## Package command
  This packages up the project. Possibly configured by a `shed.json` file. 

  `$ shed package` - makes a copy of the project without dev stuff, and other things depending on the project type.
  `$ shed package -i` - Also increment the project version numbers

  Example: WordPress site.

  - Make a folder for the theme
  - compile sass, order and lint properties, copy css to new folder
  - validate then copy php theme partials to new folder
  - compile coffeescript, lint JS, concatenate and copy to new folder
  - compress images then copy to new folder
  - zip folder, remove new folder (leaving the zip)
  - Done!

*/

program.parse(process.argv);