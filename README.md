# shed

A command line utility for quickly starting and delivering projects. A shed to keep your boilerplates.

Shed is a working title, other possible names: workbench, anvil, apprentice, butler.

## Getting Started
~~Install the module with: `npm install -g shed`~~

THIS ISN'T READY YET.

## Documentation
Aka things that work so far.

Prerequisites: `npm`, `bundler`.

### The create command

`$ shed create foo` - create a new directory called 'foo', sets up [static site boilerplate](https://github.com/nickisnoble/hotplate), installs dependancies (npm + bundle), and inits a repository. For now, pkg.json needs to be edited manually.

_(Coming soon)_

## Plans
These are the ideal features. Once things are actually implemented, they will be removed from plans and rewritten under documentation.

### The create command
Creates new projects from boilerplates. Defaults to static. This is the core functionality. Boilerplates/templates are possibly stored in `~/.shed/templates`, and are each locally version controlled (though `.git` is not copied during the `create` command). Also fills in package.json, etc, with the proper info.

Should work like this:

`$ shed create foo` - create a new directory called 'foo', set up [static site boilerplate](https://github.com/nickisnoble/hotplate), run follow up.

`$ shed create -w foo` - create a new directory called 'foo', set up [wordpress theme boilerplate](https://github.com/NickNobleWorks/Nothin), run follow up.

`$ shed create -g foo` - create a new directory called 'foo', set up [ghost theme boilerplate](https://github.com/nickisnoble/apparition), run follow up.

#### Follow up = 

- install dependencies
- git init, commit .gitignore, commit others

### Config command
Sets defaults to use in package.json's, WordPress theme frontmatter, etc. This is an enhancement, for now we could just ask on `create`. Ideally, we would ask users to set this up on install of the utility.

Should work like this:

`$ shed config -a` - Set default author (fallback to git user?)

`$ shed config -l` - Set default license (fallback to MIT?)

`$ shed config -wp` - Set local wordpress install location (for symlinking)

etc.

`$ shed config -L --foo` - Sets value locally to the project, instead of global default

### Package command
This packages up the project. Possibly configured by a `shed.json` file. 

Should work like this:

`$ shed package` - makes a copy of the project without dev stuff, and other things depending on the project type.

`$ shed package -i` - Also increment the project version numbers

#### Example: WordPress site.

- Make a folder for the theme
- compile sass, order and lint properties, copy css to new folder
- validate then copy php theme partials to new folder
- compile coffeescript, lint JS, concatenate and copy to new folder
- compress images then copy to new folder
- zip folder, remove new folder (leaving the zip)
- Done!

### Define Command
Allows you to define new templates/boilerplates

Should work like this:

`$ shed define [filepath] foo` - Takes the directory specified (or assumes current directory) and makes it into a template, named 'foo', for future creation. There must not already be a template named 'foo', and a flag is assigned i.e. `-f, --foo`.

`$ shed define -u [filepath] foo` - Updates an already existing template called 'foo' with the contents of the directory at filepath, makes a commit to the template.



## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Nick Noble  
Licensed under the MIT license.
