# Information on Webdesign

## Github Pages
[Getting started with GitHub Pages](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/getting-started-with-github-pages).

## Bootstrap components to use within this framework

- [Bootstrap Navbar](https://getbootstrap.com/docs/5.0/components/navbar/)
- [Bootstrap Modal](https://getbootstrap.com/docs/5.0/components/modal/)
- [Bootstrap Buttons](https://getbootstrap.com/docs/5.0/components/buttons/)
- [Bootstrap Dropdowns](https://getbootstrap.com/docs/5.0/components/dropdowns/)
- [Bootstrap Popovers](https://getbootstrap.com/docs/5.0/components/popovers/)

## How to customize

Nice article on this topic: 
[How To Customize Twitter’s Bootstrap](https://www.smashingmagazine.com/2013/03/customizing-bootstrap/).

Search Bootstrap classes:
[text-primary Bootstrap class](https://bootstrapshuffle.com/classes/colors/text-primary).

Align images in Boostratp
[Bootstrap Images](https://getbootstrap.com/docs/5.0/content/images/).

How does the grid system work?
[Boostrap Grid System](https://getbootstrap.com/docs/5.0/layout/grid/#how-it-works).

Search and use Fontawesome Icons
[Fontawesome Icons](https://fontawesome.com/icons).

Protect your Website Content
[How to Copyright a Website to Protect It](https://www.thebalancesmb.com/copyright-a-website-to-protect-it-4145788).

## Wallpapers

Free Art Wallpapers
[Unsplash](https://unsplash.com/wallpapers/art).
[Please read the Unsplash Terms & Conditions](https://unsplash.com/terms).

## Get some inspirational resources

- [Startbootstrap](https://startbootstrap.com/previews/)
- [Nice theme on Startbootstrap](https://startbootstrap.com/previews/agency).
- [Getbootstrap 5.0 Examples](https://getbootstrap.com/docs/5.0/examples/)

## SCSS vs. SASS vs. CSS
[What's the difference between SCSS and Sass?](https://stackoverflow.com/questions/5654447/whats-the-difference-between-scss-and-sass)
[What is the difference between CSS and SCSS?](https://stackoverflow.com/questions/46400443/what-is-the-difference-between-css-and-scss)
[]()

Sass is a CSS pre-processor with syntax advancements. Style sheets in the advanced syntax are processed by the program, and turned into regular CSS style sheets. However, they do not extend the CSS standard itself.

CSS variables are supported and can be utilized but not as well as pre-processor variables.

There are two syntaxes available for Sass. The first, known as SCSS (Sassy CSS) and used throughout this reference, is an extension of the syntax of CSS. This means that every valid CSS stylesheet is a valid SCSS file with the same meaning. This syntax is enhanced with the Sass features described below. Files using this syntax have the .scss extension.

The second and older syntax, known as the indented syntax (or sometimes just “Sass”), provides a more concise way of writing CSS. It uses indentation rather than brackets to indicate nesting of selectors, and newlines rather than semicolons to separate properties. Files using this syntax have the .sass extension.

### CSS

In CSS we write code as depicted bellow, in full length.

```
body{
 width: 800px;
 color: #ffffff;
}
body content{
 width:750px;
 background:#ffffff;
}
```
### SCSS

In SCSS we can shorten this code using a @mixin so we don’t have to write color and width properties again and again. We can define this through a function, similarly to PHP or other languages.

```
$color: #ffffff;
$width: 800px;

@mixin body{
 width: $width;
 color: $color;

 content{
  width: $width;
  background:$color;
 }
}
```

### SASS

In SASS however, the whole structure is visually quicker and cleaner than SCSS.

- It is sensitive to white space when you are using copy and paste,
- It seems that it doesn't support inline CSS currently.

```
$color: #ffffff
$width: 800px
$stack: Helvetica, sans-serif

body
  width: $width
  color: $color
  font: 100% $stack

  content
    width: $width
    background:$color

```

## Basics

[EM vs REM vs PX – Why you shouldn't “just use pixels”](https://engageinteractive.co.uk/blog/em-vs-rem-vs-px).
TL;DR:
 - Pixels are ignorant, don’t use them.
 - Use REMs for sizes and spacing.
 - Use EMs for media queries.