Node.js tool ([gulp](http://gulpjs.com) with plugins) to create encapsulated HTML files by combining HTML/CSS/images into one file. Given a folder of HTML/CSS/images this tool will:

- Put external stylesheets into a `<style>` block.
- Convert linked images to dataURIs.

## Instructions

1. Clone this repository
2. `cd` into this project directory and run `npm install`  
3. Add your folder of HTML/CSS/images to `src`
4. Run `gulp` (you may need to install gulp globally first: `npm install -g gulp`)

The *build* directory will contain your stand-alone HTML file with styles and images inline.
