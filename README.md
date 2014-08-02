# responsive-content.js [![NPM version](http://img.shields.io/npm/v/responsive-content.js.svg?style=flat)](https://www.npmjs.org/package/responsive-content.js)

[![Build Status](http://img.shields.io/travis/Tyriar/responsive-content.js.svg?style=flat)](http://travis-ci.org/Tyriar/responsive-content.js)
[![Code climate](http://img.shields.io/codeclimate/github/Tyriar/responsive-content.js.svg?style=flat)](https://codeclimate.com/github/Tyriar/responsive-content.js)

A JavaScript library that transforms a piece of text at a breakpoint as well as produces a screen reader specific version.

## Why?

The specific use case this was created for was for the use of relative directions such as "left, right" to refer to the UI. With responsive design becoming so prevalent you need to be a little more careful when you use these as the element being referred to may not *always* be to the left.

## Installing

**Bower**

```bash
# via bower
bower install --save responsive-content.js

# via npm
npm install --save responsive-content.js
```

## Including

```html
<script src="bower_components/responsive-content.js/src/responsive-content.js"></script>
```

## Usage

This will change the span's content to "above" when the viewport is less than 600 pixels wide.

```javascript
<span class="responsive-content" data-breakpoint="600" data-text="above">left</span>
<script>
  // Initialise
  responsiveContent();
</script>
```

### Screen reader text

The optional `data-accessible-text` attribute can be used to specify a screen reader version of the text explicitly.

```javascript
<span class="responsive-content" data-breakpoint="600" data-text="right" data-accessible-text="above">left</span>
```

This will transform to this, where the element with `aria-hidden="true"` will change depending on viewport width.

```javascript
<span class="responsive-content" data-breakpoint="600" data-text="above">
  <span aria-hidden="true">to the left</span>
  <span style="position: absolute; left: -9999px;">above</span>
</span>
```
