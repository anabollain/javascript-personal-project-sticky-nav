# JS Sticky Nav

## Description

The aim of this exercise is to make a sticky navigation menu when the vertical scroll reaches a certain value. 

To do so, we use the following properties:

**HTMLElement.offsetTop**
According to the MDN, it is a read-only property that returns the distance of the outer border of the current element relative to the inner border of the top of the `offsetParent`, the *closest positioned* ancestor element. 

**Window.scrollY**

A read-only property of the `window` interface that returns the number of pixels that the document is currently scrolled vertically. 

**Description**

Using the *scroll event*, along with a simple comparison between the value of the precedent two properties, we add or remove a CSS class from JS, combined with a series of transitions to make it more dynamic. 

## Javascript Used

* querySelector()
* HTMLElement.offsetTop
* HTMLElement.paddingTop
* window.scrollY
* conditionals
* classList()
* scroll event

## Credits

* [30 Day Vanilla JS Coding Challenge](https://javascript30.com/)

