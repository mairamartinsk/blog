---
title: "Style Highlighted Text with CSS"
url: "css-selection"
categories: ["Web Development"]
tags: ["css"]
date: 2018-11-18T11:48:33+01:00
type: "blog"
draft: false
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

- `color`
- `background-color`
- `cursor`
- `caret-color`
- `outline`
- `text-decoration`
- `text-emphasis-color`
- `text-shadow`

## Feature Support

Support for ::selection is good, reaching [82% of the users](https://caniuse.com/#feat=css-selection "CanIUse Feature Support"). The notable exception are iOS Safari and Opera Mini, that don't support it at all. That means almost 12% of all users, but the good news is their browser will simply ignore the selector and display the default browser selection style. 

Also, while sources online will suggest you use the vendor prefixed `::-moz-selection` to target Firefox, this is no longer needed since Firefox v.62. If you decide to include the prefixed version, you can use the snippet below and target both at once.

```css
::selection,
::-moz-selection {
  color: black;
  background-color: yellow;
}
```

## Multiple Highlight Styles

In my case, I wanted the highlight color to be applied globally to my whole blog, but it is also possible to create several different highlight styles, by using the pseudo-selector together with a class selector:

```css
.red-highlight::selection {
  background-color: red;
}

.blue-highlight::selection {
  background-color: blue;
}
```

Then, on your html structure you can decide where the selection highlight will be applied to:

```html
<p>This paragraph will have the default style applied or the global ::selection style.</p>
<p class="red-highlight">This paragraph's text will display a red background when highlighted by user.</p>
<p class="blue-highlight">And this paragraph will have a blue background when selected!</p>
```