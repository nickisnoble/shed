# shed

A command line utility for quickly starting and delivering projects

## Getting Started
~~Install the module with: `npm install -g shed`~~

THIS ISN'T READY YET.

## Documentation
_(Coming soon)_

## Plans

## The create command
Creates new projects from boilerplates. Defaults to static. This is the core functionality.

Should work like this:

`$ shed create foo` - create a new directory called 'foo', set up static site boilerplate, run follow up.

`$ shed create -w foo` - create a new directory called 'foo', set up wordpress theme boilerplate, run follow up.

`$ shed create -g foo` - create a new directory called 'foo', set up ghost theme boilerplate, run follow up.

#### Follow up = 

- install dependencies
- git init, commit .gitignore, commit others

### Config command
Sets defaults to use in package.json's, WordPress theme frontmatter, etc. This is an enhancement, for now we could just ask 

Should work like this:

`$ shed config -a` - Set global author (fallback to git user?)

`$ shed config -l` - Set global license (fallback to MIT?)

`$ shed config -w` - Set global author website (If not set, use project git repo)

etc.

`$ shed config -L --foo` - Sets value locally to the project, instead of globally

### Package command
This packages up the project. Possibly configured by a `shed.json` file. 

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

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Nick Noble  
Licensed under the MIT license.
