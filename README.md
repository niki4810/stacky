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
			<!-- some content -->
	    </div>
	    <div>
			<!-- some content -->
	    </div>
	    <div>
			<!-- some content -->
	    </div>
	    <div>
		    <!-- some content -->  
	    </div>
	</div>	
```

* call the stacky function over the container

```javascript
	$(".three").stacky();	
```


## Setting options

### Setting custom width

By default the stacky stretches to the full width of its parent container, however if you want to set a static width, you can pass it along as an option as shown below. 

```javascript
	$(".three").stacky({
		width: 100 //set the stacky width to 100px
	});	
```

### Hiding the default toggle button

stacky attaches a default toggle button to the first child container. However if you wish to hide this button you can simply set the `showToggleButton` property to `false` as shown below

```javascript
	$(".two").stacky({
			    showToggleButton : false
	});
```

### Custom events for opening, collapsing and toggle a stacky

As mentioned above, stack provides a default toggle button. However if you wish to open, collapse or toggle an external source such as a button click, you can simply trigger a `openStacky` , `collapseStacky` or `toggleStacky` events.

```javascript
	$("#btnOpen").click(function () {
			    $(".two").trigger("openStacky"); //opens a stacky when a button is clicked
	});
	$("#btnClose").click(function () {
			    $(".two").trigger("collapseStacky"); //collapses a stacky
	});
	$("#btnToggle").click(function () {
			    $(".two").trigger("toggleStacky"); //toggles the state of a stack
	});
```


## License

Stacky is licensed under MIT