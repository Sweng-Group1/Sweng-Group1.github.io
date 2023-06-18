# HTML Tour
This repository houses the HTML tour, built using the Jekyll static-site generator, for our project.

## Accessing This Website
To visit this website without downloading the repo you can visit [sweng-group1.github.io/html-tour/](https://sweng-group1.github.io/html-tour/). Anytime a change is made in the `main` branch, GitHub Pages will automatically re-build the website and the updates will be reflected in ~5 minutes at the URL.

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
#### index.md
Open the `_pages/index.md` file. The `banner` is the text that shows in the browser tab. The `subtitle` is shown above the `Take a tour` button.
#### Introduction Section
Open the `_data/home/introduction.yml` file and change contents:
```
title: The title content
subtitle: Introducing What's On&#58;
content: |
  Some content...
```
#### Testimonials
Open the `_data/home/features.yml` file and add content:
```
- name: Name OF Person
  role: Role
  portrait_img_name: image.jpg
  logo_img_name: YUSU.png
  quote: |
    We are very interested in this product and think it would bring a lot of value to the student body and their interest groups. Very exciting!
```
The image needs to be pasted in the `assets/img/home/testimonials` directory.
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
#### about.md
Open the `_pages/about.md` file. The `banner` is the text that shows in the browser tab and above the subtitle. The `subtitle` is shown in the grey box at the top of the page.
#### Introduction Section
Open the `_data/about/introduction.yml` file and change contents:
```
title: The title content
subtitle: Introducing What's On&#58;
content: |
  Some content...
```
#### Case Study
Open the `_data/about/casestudy.yml` file and change contents:
```
title: Empowering university students and unions
bold_content: |
  This para will span two columns and will be bold.
first_column: |
  Left column under the bold content.
second_column: |
  Right column under the bold section.
```
#### Team Directory
Open the `_data/about/team.yml` file and add content:
```
- name: Example Person
  role: CEO
  portrait: portrait.svg
```
The portrait image needs to be pasted in the `assets/img/about/team` directory.
#### Department Directory
Open the `_data/about/departments.yml` file and add content:
```
- name: Team Name
  portrait: custom_maps.svg
  description:
    - A paragraph
    - Another paragraph is needed.
    - have as many paras, it's just a forloop in the html
```
The portrait image needs to be pasted in the `assets/img/about/team` directory.

### Pricing Page
#### pricing.md
Open the `_pages/pricing.md` file. The `banner` is the text that shows in the browser tab and above the subtitle. The `subtitle` is shown in the grey box at the top of the page.
#### Introduction Section
Open the `_data/pricing/introduction.yml` file and change contents:
```
title: The title content
subtitle: Introducing What's On&#58;
content: |
  Some content...
```
#### Pricing Tables
Open the `_data/pricing/pricing.yml` file and change contents. This will change the description of each grid item in the pricing table.

### Downloads Page
#### downloads.md
Open the `_pages/downloads.md` file. The `banner` is the text that shows in the browser tab and above the subtitle. The `subtitle` is shown in the grey box at the top of the page.
#### Introduction Section
Open the `_data/downloads/introduction.yml` file and change contents:
```
title: The title content
subtitle: Introducing What's On&#58;
content: |
  Some content...
```
#### Download Sections
Open the files `_data/downloads/***_downloads.yml`, replace `***` with the respective department.

It's self-explanatory, open the file and figure it out urself, i cba to explain it.
## Contributing
I will be refactoring the website so that any required content changes can be carried out via `.yml` files without having to manually modify the HTML stuff. This will be completed soonish (as soon as I have finalised on the overall website content structure with Jon and Matteo).

Once that's done, this README file will be updated to show how to use the `.yml` files in the above section.

## References
Some of the UI elements/blocks may have been taken from [Flowrift](https://flowrift.com/) or [Tailblocks](https://tailblocks.cc/) albeit heavily modified by me.
