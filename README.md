# HTML inliner

Node.js tool to make encapsulated HTML files. It takes a folder of HTML/CSS/images and:

- Puts the external stylesheet into a `style` block
- Converts linked images to dataURIs

Creates a single HTML file with all of the previously external resources inline.

1. Clone this repository
2. `cd` into this project directory and run `npm install`  
3. Add your folder of HTML/CSS/images to `src`
4. Run `gulp` (you may need to install gulp globally first: `npm install -g gulp`)
