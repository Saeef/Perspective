# Perspective
Perspective is a new and an innovative way of inline styling to html elements by creating custom attributes
It is not recommended to fully style an html element with perspective, instead prespective is made to add quick changes like the text colour or the margin of an element.
Perspective is only 327 bytes minified!


## Installation
To start using perspective in your project, simply download/clone the github repo and link the perspective file in your html file
```<script src="dist/perspective.min.js"```


## Usage
In your main js file, initialize any css properties that you would like to use first so that the corresponding attributes become available so like if you want the attribute for text colour change then just simply add ```perspective('color')``` in your main js file. 
To initialize a property which has two name you simply do this, in this example we are setting perspective to background colour change ```perspective('background', 'color')```
To start using Perspective in any html element, simply add the attribute ```p-``` and then the css property name that you initialized, for exmaple for that color intialization, to start using it we will add the attribute ```p-color``` to out html element and the value of that attribute will be the colour.
For the two named properties, the html attribute will be like this ```p-background-color``` or ```p-margin-top```

## example
```html
	<h1 p-color="red" p-margin-bottom="10px">Perspective is Awesome!</h1>
	<script src="dist/perspective.min.js"></script>
	<script>
		perspective('color')
		perspective('margin', 'bottom')
	</script>
```

## License
The MIT License (MIT)

Copyright (c) 2016 Ahmed Tarek

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
