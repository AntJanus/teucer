Teucer
======
A jQuery utility that automatically AJAXifies a website. The plugin relies on a perfectly working non-js website in order to make it JS-ready and use AJAX to supplement some modern interactions (avoid constant refreshing).

##Usage

`$('#path .to element').teucer('#path .to container');`

Explanation:

1. Supply the path to a clickable element. The element has to have a path. Either use an anchor and Teucer will automatically use the `href` tag or use `data-teucer` to supply the URL
2. Path to the container is the selector for the container which you want to use to pull in new content.

Example:

Let's say we have a small website with html code like so:

````
<html><head><title>Hello</title></head><body>
<a href="/url/to/somwhere" id="#clickableELement">click</a>
<div id="changingContent">Article content goes here</div>
</body></html>
````

Where `#changingContent` is the only part of the website that changes (other than title). The menu may stay the same, a footer may stay the same etc. except for the container. Now, if you click on `#clickableElement` you get to a new page where the `#changingContent` is different. Use Teucer like so:

`$('#clickableElement').teucer('#changingContent');`

Whenever you click on `#clickableElement`, Teucer will automatically pull in the new content, and replace the existing content. 
