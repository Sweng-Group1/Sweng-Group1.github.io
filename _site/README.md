# [HTML Tour](https://Sweng-Group1.github.io)
This repository houses the HTML tour, built using the Jekyll static-site generator, for our project.

## Accessing This Website
Github Pages seamlessly supports with Jekyll, it can detect the Jekyll code base (inside the `html-tour` directory) and automatically generate the static site directory and serve to the [URL](https://Sweng-Group1.github.io).

In order to view this website locally, you must have Jekyll installed and run `cd html-tour && jekyll build`, this command will generate a `_site/` directory within `html-tour` which houses the compiled HTML source code, from there the `index.html` file can be accessed via a web browser.

> I have excluded the `_site/` from the gitignore, so everytime I build the website locally, the compiled website will be pushed to the repository. Pushing the `_site/` directory to the repo isn't good practice, however, it's easier than creating a Github Workflow to do this outside of the repo by creating a new release.

## Modifying Website Content
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
Github Pages actively looks for changes in the main branch so as soon as there's a change, it will automatically compile and serve the website.

Create a branch with the naming scheme `development/<name-of-changes>`, add any updates to that branch, test it locally and only when you can verify everything works as intended you can merge to the `main` branch. This precaution is to prevent any accidental breakages in the website.

## References
Some of the UI elements/blocks may have been taken from [Flowrift](https://flowrift.com/) or [Tailblocks](https://tailblocks.cc/) albeit heavily modified by me.