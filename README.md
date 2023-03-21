# basicJSX
<a href="https://www.npmjs.com/package/basicjsx"><img src="https://img.shields.io/npm/v/basicjsx"></img></a>
<a href="https://www.npmjs.com/package/basicjsx"><img src="https://img.shields.io/npm/dw/basicjsx"></img></a>
<a href="https://github.com/tnichols217/basicJSX"><img src="https://img.shields.io/github/package-json/v/tnichols217/basicJSX?label=Github"></img></a>

A simple implementation of JSX without React for basic server side rendering applications.

## Usage
Import package as `React`
```js
import React from "basicjsx"
```

Now any JSX will be converted into `HTMLElement`s (using linkedom).

## Custom Elements
Custom elements can be written as a function of the type 
```ts
(props: Object, children: HTMLElement[]) => HTMLElement
```
Where `props` are key-value pairs of the html properties of the element (ie. the style tag on an element), and `children` is a list of all contained elements

### Default Custom Elements
Some default custom elements are provided as `CustomElements` in the package and can be imported with
```js
import {CustomElements} from "basicjsx"
```
- `CustomElements.Insert` inserts an HTMLElement from the `obj` property\
  (ie. `<CustomElements.Insert obj={<p></p>}></CustomElements.Insert>` becomes `<p></p>`)
- `CustomElements.Render` renders HTML in the `html` property into HTMLElements.\
  THIS IS AN UNSAFE METHOD, NO INPUT VALIDATION IS BEING DONE, SANITIZE INPUT BEFORE USING.\
  (ie. `<CustomElements.Render html="<p>1</p>"></CustomElements.Render>` renders to `<p>1</p>` as an HTMLElement
