# [HTML Tour](https://Sweng-Group1.github.io)
This repository houses the HTML tour, built using the Jekyll static-site generator, for our project.

## Accessing This Website
Github Pages seamlessly supports with Jekyll, it can detect the Jekyll code base (inside the `html-tour` directory) and automatically generate the static site directory and serve to the [URL](https://Sweng-Group1.github.io).

In order to view this website locally, you must have Jekyll installed and run `cd html-tour && jekyll build`, this command will generate a `_site/` directory within `html-tour` which houses the compiled HTML source code, from there the `index.html` file can be accessed via a web browser.

> I have excluded the `_site/` from the gitignore, so everytime I build the website locally, the compiled website will be pushed to the repository. Pushing the `_site/` directory to the repo isn't good practice, however, it's easier than creating a Github Workflow to do this outside of the repo by creating a new release.

## Contributing
Github Pages actively looks for changes in the main branch so as soon as there's a change, it will automatically compile and serve the website.

Create a branch with the naming scheme `development/<name-of-changes>`, add any updates to that branch, test it locally and only when you can verify everything works as intended you can merge to the `main` branch. This precaution is to prevent any accidental breakages in the website.