# HTML Tour
This repository houses the HTML tour, built using the Jekyll static-site generator, for our project.

## Accessing This Website
Simply download this repository, navigate to the `_site` directory and open the `index.html` file via your desired browser.

UPDATE: This website can be auto-rebuilt and served using GitHub Pages, but for that to work this repo needs to be public. I have set this repo as private to prevent the other group further copying our work. I've found that Cloudflare works with private repos so therefore have implemented it with that.

To visit this website without downloading the repo you can visit [html-tour.pages.dev](html-tour.pages.dev). Anytime a change is made in the `main` branch, Cloudflare will automatically re-build the website and the updates will be reflected in ~5 minutes at the URL.

## Modifying Website Content
### Setting up a Local Development Environment
You need to have Jekyll installed on your local machine. Visit this [Jekyll Docs](https://jekyllrb.com/docs/installation/) webpage to access guides on how to install based on your OS.

Now we need to install dependencies. Browse to the source-code directory in your terminal, you should be in the same level as the Gemfile. Simply run `bundle install` to install everything that's defined in the Gemfile.

Once Jekyll and all dependencies are installed, we can run the build command so that the source-code can be compiled into a set of static HTML files. We use the build command instead of the serve command which sets up a server to make sure that we have a representation of the website closest to the version we will be submitting.

Now run `jekyll b -w` in the terminal. The `b` command is the same as `build`, we're essentially telling Jekyll to read through the entire source-code and generate a set of HTML file inside of the `_site` directory. The `-w` flag tells Jekyll to watch for any changes in the source-code and automatically re-build after any changes. If you just want to build the website and don't plan on making changes, you can ignore the `-w`.

After the website has been built by Jekyll, open your internet browser, open the 'Open File' window so you can open `index.html` (this depends on the browser but it's usually CTR+O, or CMD+O). The website will be opened now, and if you have Jekyll build running with the `-w` flag, then you can make changes and reloading the webpage will show the changes.

IMPORTANT: If you make any changes to the website and want to commit to this repository, make sure you run `jekyll b` before pushing! This eliminates any discrepancy between the Jekyll source-code and HTML source-code in the `_site` directory.

During submission, we only need the `_site` directory for this, we can safely ignore the rest of the files as long as `jekyll b` has been run and the `_site` directory is up to date, and we can also rename the `_site` directory to whatever we want (within reason).

### Home Page
#### Features Grid
Open the `_data/home/features.yml` file and add content:
```
- title: Title of Feature
  image_name: image.jpg
  description: |
    Multi-line description goes here.
```
The image needs to be pasted in the `assets/img/home/features` directory.

### About Page
#### Team Directory
Open the `_data/about/team.yml` file and add content:
```
- name: Example Person
  role: CEO
  portrait: portrait.svg
```
The portrait image needs to be pasted in the `assets/img/about/team` directory.

## Contributing
I will be refactoring the website so that any required content changes can be carried out via `.yml` files without having to manually modify the HTML stuff. This will be completed soonish (as soon as I have finalised on the overall website content structure with Jon and Matteo).

Once that's done, this README file will be updated to show how to use the `.yml` files in the above section.

## References
Some of the UI elements/blocks may have been taken from [Flowrift](https://flowrift.com/) or [Tailblocks](https://tailblocks.cc/) albeit heavily modified by me.