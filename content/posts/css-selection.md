---
title: Style Highlighted Text with CSS
url: css-selection
categories:
- Web Development
tags:
- css
date: 2018-11-18 10:48:33 +0000
type: blog

---
Today I was trying to decide what content to write about, when I accidently highlighted some text on my own blog.

Normally, the background color of the highlighted portion shows up in blue, in the same shade as the browser's default focus color. While this is not a bad thing at all, I would prefer it to match my color palette (black, yellow, white).

Never having styled a highlight before, I set out to discover how to do it and, 60 seconds later, it was done!

```css
::selection {
  background-color: #fed900;
}
```

According to [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection "MDN Documentation"), the pseudo-element `::selection` allows us to specifically target content that has been highlighted by clicking and dragging with the mouse.

Historically, only the `color` and `background-color` properties were supported, but today many more properties can be used (as of November 2018):

* `color`
* `background-color`
* `cursor`
* `caret-color`
* `outline`
* `text-decoration`
* `text-emphasis-color`
* `text-shadow`

## Feature Support

Support for ::selection is good, reaching [82% of the users](https://caniuse.com/#feat=css-selection "CanIUse Feature Support"). The notable exceptions are iOS Safari and Opera Mini, that don't support it at all. That means almost 12% of all users, but the good news is their browser will simply ignore the selector and display the browser's default selection style.

Also, while sources online will suggest you use the vendor prefix `::-moz-selection` to target Firefox, this is no longer needed since Firefox version 62. If you decide to include the prefixed selector, you can use the snippet below and target both at once.

```css
::selection,
::-moz-selection {
  color: black;
  background-color: yellow;
}
```

## Multiple Highlight Styles

In my case, I wanted the highlight color to be applied globally to my whole blog, but it is also possible to create several different highlight styles, by using the pseudo-selector together with a class selector:

    .red-highlight::selection {
      background-color: red;
    }
    
    .blue-highlight::selection {
      background-color: blue;
    }