stacky
======

Stacky is a simple jquery plugin for organizing your container as a stack. It makes use of css3 transitions for creating a slide down/up animation as you toggle the stack.

##Demo

View an example at the following [link](http://niki4810.github.io/stacky/example/default.html)


##How to set up

To set up a basic stacky : 

* include the dependent libraries and css files

```html

	<link href="stacky.css" rel="stylesheet" type="text/css" />
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script src="stacky.js"></script>

```

* create a basic html template as shown below

```html

	<div class="three">
	    <div>
	         <h1>1</h1>

	    </div>
	    <div>
	         <h1>2</h1>

	    </div>
	    <div>
	         <h1>3</h1>

	    </div>
	    <div>
	         <h1>4</h1>

	        <div></div>
	    </div>
	</div>
	
```

* call the stacky function over the container

```javascript

	$(".three").stacky();
	
```