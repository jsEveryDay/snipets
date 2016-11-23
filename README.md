# JS Snippets

## package.json regex version selector


```javascript
([>|<|=|~|^|\s])*?(\d+\.)?(\d+\.)?(\*|\d+)
```
![Image of regex](https://i.stack.imgur.com/N00l2.png)

## Registering a custom html5 data-* attribute

```html
<div data-onload="sampleFunction('param1', 2)"></div>
```

```javascript
/* Find any element which has a 'data-onload' function and load that to simulate an onload. */
$('[data-onload]').each(function(){
    eval($(this).data('onload'));
});
```

## Code to check if you scrolled to bottom of the page

```javascript
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
    }
};
```

## Function Expressions vs Function Declarations (Named Functions)

```javascript
//named functions
function timeTravel(year) {
    console.log(this.firstName + " " + this.lastName + " is time traveling to " + year);
}
```

```javascript
//function expression
var someFn = function iHazName() {
    console.log("I like to express myself...");
    if(needsMoreExpressing) {
        iHazName(); // the function's name can be used here
    }
};

// you can call someFn() here, but not iHazName()
someFn();
```

## Insert an Item at a Specific Index with JavaScript

```javascript
// The original array
var array = ["one", "two", "four"];
// splice(position, numberOfItemsToRemove, item)
array.splice(2, 0, "three");

array;  // ["one", "two", "three", "four"]
```

```javascript
//using Prototype way
Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};
```
## Remove an Item From an Array 

```javascript
// Start with an initial array
var array = ["a", "b", "c"];

// Find and remove item from an array
var i = array.indexOf("b");
if(i != -1) {
	array.splice(i, 1);
}
```
> Of course if you'd like to remove multiple occurrences of the same string/number:

```javascript
for(var i = array.length-1; i--;){
	if (array[i] === "b") array.splice(i, 1);
}
```
## Clone Arrays

```javascript
//clone contents of array
var clone = myArray.slice(0); //the references are kept
```
```javascript
//deep clone
Array.prototype.clone = function() {
	return this.slice(0);
};
```
## Empty an Array

```javascript
//Setting the length equal to zero empties the existing array, not creating another array!
myArray.length = 0; 
```

## Sort an Array of Objects by Property using sort(fn)

* Let's say you have an array of objects representing persons and you want to sort them by age

<pre class="{javascript}">
[
	{ name: "Robin Van Persie", age: 28 },
	{ name: "Theo Walcott", age: 22 },
	{ name: "Bacary Sagna", age: 26  }
].sort(function(obj1, obj2) {
	// Ascending: first age less than the previous
	return obj1.age - obj2.age;
});
	// Returns:  
	// [
	//	  { name: "Theo Walcott", age: 22 },
	//	  { name: "Bacary Sagna", age: 26  },
	//	  { name: "Robin Van Persie", age: 28 }
	// ]
</pre>

## Turning Array-like Objects Into Arrays

* As you may know JavaScript has types, like nodeList or the arguments variable within a function, that are similar to arrays, but not arrays. This means that we can access their elements using an array-like notations (for example arguments[0]) but we can’t use array methods such as forEach() and join().

* Let’s say we have a nodeList of DOM elements retrieved as follows:

```javascript
var list = document.getElementsByClassName('book');
```
* We want to iterate over this array-like object using the forEach() method. If we call forEach() directly on the variable (list.forEach(...)) we obtain the error: “Uncaught TypeError: undefined is not a function”. To avoid this issue, one of the most used techniques is to use the prototype property and the call() method as shown below:

```javascript
Array.prototype.forEach.call(list, function() {...});

//or 

[].forEach.call(list, function() {...});

```

* jQuery way: 

```javascript
$.makeArray(list).forEach(function() {...});;
```

## Phonegap deviceready listener

```javascript
// When PhoneGap is loaded and talking with the native device,
    // it will call the event `deviceready`.
    // 
    document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
    //
    function onDeviceReady() {
        // Now safe to use the PhoneGap API
    }
```

## Viewing the Current State of an Object
>Using console.log on objects which may change will throw you off.

>This snippet prints out the object and its values at the immediate state


`console.logNow = function(o){console.log(JSON.parse(JSON.stringify(o)));}; //for logging those objects that might change.`

## Binding email - KendoUI

```
//viewmodel.js
var viewModel = kendo.observable({
    mail: "mail@mail.com",
    mailtoLink: function() {
        return "mailto:" + this.get("mail");
    } 
})

kendo.bind($("#example"), viewModel)

//index.html
<div id="example">
    <a data-bind="attr: { href: mailtoLink }">mail</a>
</div>
```

## Handling click binding - KendoUI

```
var doSomething = function (e) { console.log("Global"); }
 
var viewModel = kendo.observable({
    doSomething: function (e) { console.log("ViewModel"); }
});

<div data-role="view" data-model="viewModel">
    <span data-role="button" data-click="doSomething">
        Clicking me will call doSomething() and print "Global"
    </span>
    <span data-role="button" data-bind="click: doSomething">
        Clicking me will call viewModel.doSomething() and print "ViewModel"
    </span>
</div>
```

## Grab Date object from input & convert to string

```
var startDate = document.getElementById("BookingStartDate").valueAsDate; //grab a date object from user input
                   console.log(startDate);
                   console.log(kendo.toString(startDate, "yyyy-MM-dd" ));
```

## Navigating back using Icenium simulator

`$("body").data().kendoMobilePane.navigate("#:back");`

## Logging object to console

```
function LogSomeStuff (obj) {
        var output, property;
        for (property in obj) {
            output += property + ': ' + obj[property] + '; ';
        }
        console.log(output);
    }
```

## Getters and Setters, Properties

>Object.defineProperty(obj, prop, descriptor)
>defineProperty method takes three arguments:
* The first is the object to add the property to
* second is the name of the property
* third is an object that describes the property (known as the property’s descriptor - has get,set optional keys)
>You may also pass following keys:
 * configurable (false by default): if this is true, the property’s configuration will be modifiable in future.
 * enumerable (false by default): if true, the property will appear when looping over the object (for (var key in obj)).

```javascript
var person = {
    firstName: 'Jimmy',
    lastName: 'Smith'
};

Object.defineProperty(person, 'fullName', {
    get: function() {
        return firstName + ' ' + lastName;
    },
    set: function(name) {
        var words = name.split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }
});

```

<pre lang="javascript"><code>
person.fullName = 'Jack Franklin';
console.log(person.firstName); // Jack
console.log(person.lastName) // Franklin
</code></pre>

>We can also define properties that don’t have explicit getters or setters:

```javascript
Object.defineProperty(person, 'age', {
    value: 42 //read-only property
});
```

>If a property has a value key set, it cannot have a getter or setter. 
>Properties can have values or accessors, not both.
>this property will not appear when we loop over the object’s keys.
>If we wanted to make a property writable, we would need to set the writable property:

```javascript
Object.defineProperty(person, 'age', {
    value: 42, //Now, person.age = 99; will work.
    writable: true
});
```
## Masked TextBox - Kendo UI

```
<input id='phone' type="text" />

<script>

  (function(){

    $('#phone').kendoMaskedTextBox({
      mask: '(999) 000-0000'
    });      

  }());

</script>
```

## Debugging Kendo UI MVVM bindings

```
<input id="fname" data-bind="value: firstName">
```
>select element using ***console*** and write `$0` in console
```
$0.kendoBindingTarget //this is where Kendo UI stores data about the binding that is attached to the element
```
>object returned:
```
{
    options: ,
    source: , // the JavaScript object that we are bound to.
    target: , // the HTML element, same as the one you already selected to get this far.
    toDestroy: []
}
```
- $0.kendoBindingTarget.source.firstName; // see to what value is bound to, returns "John"

>Advanced usage:

```
var kendoValueBinder = $0.kendoBindingTarget.toDestroy[1];
kendoValueBinder.source === kendoValueBinder.parents[0];
// returns true

function getKendoBindingValue(kendoBinder) {
    var numParents = kendoBinder.parents.length;
    var i = 0;
 
    for(i = 0; i < numParents; i++) {
        if(kendoBinder.path in kendoBinder.parents[i]) {
            return kendoBinder.parents[i][kendoBinder.path];
        }
    }
 
    return undefined; // not found.
}

```

## Handling API using JSON & jQuery

```javascript
$.getJSON('http://hipsterjesus.com/api/', function(data) {
  $('body').append(data.text);
});
```

>or using promises:

```javascript
var promise = $.getJSON('http://hipsterjesus.com/api/');

promise.done(function(data) {
  $('body').append(data.text);
});

promise.fail(function() {
  $('body').append('<p>Oh no, something went wrong!</p>');
});
```
>you can remove promise variable also:

```javascript
$.getJSON('http://hipsterjesus.com/api/')

.done(function(data) {
  $('body').append(data.text);
})

.fail(function() {
  $('body').append('<p>Oh no, something went wrong!</p>');
})
//always event handler that's called regardless if the request succeed or fails.
.always(function() {
  $('body').append('<p>I promise this will always be added!.</p>');
});
```
>creating wrapper object:

```javascript
//THEN method allows us to modify the result of a promise and pass it to the next handler in the chain. 
var wrapperObject = {
  html: function() {
    return $.getJSON('http://hipsterjesus.com/api/').then(function(data) {
      return data.text;
    });
  }
};
//we can then use our wrapper object like this:
wrapperObject.html().done(function(html) {
  $("body").append(html);
});
```
>adding method to object and chaining promises:

```javascript
var wrapperObject = {

  html: function() {
    return $.getJSON('http://hipsterjesus.com/api/').then(function(data) {
      return data.text;
    });
  },
//returns array of paragraphs
  paragraphs: function() {
    return this.html().then(function(html) {
      return html.replace(/<[^>]+>/g, "").split("");
    });
  },
//the return value of a promise's callback is passed to the next callback in the chain, 
//we're free to create small functional methods that change the data as it's passed through them.
  sentences: function() {
    return this.paragraphs().then(function(paragraphs) {
      return [].concat.apply([], paragraphs.map(function(paragraph) {
        return paragraph.split(/. /);
      }));
    });
  }
};
```
>multiple API calls:

```javascript
var firstData = null;
var secondData = null;

var responseCallback = function() {

  if (!firstData || !secondData)
    return;

  // do something
}

$.get("http://example.com/first", function(data) {
  firstData = data;
  responseCallback();
});

$.get("http://example.com/second", function(data) {
  secondData = data;
  responseCallback();
});

//or using promises
var firstPromise = $.get("http://example.com/first");
var secondPromise = $.get("http://example.com/second");

$.when(firstPromise, secondPromise).done(function(firstData, secondData) {
  // do something
});
```
##  the Value of this in Methods

```javascript
var marty = {
    firstName: "Marty",
    lastName: "McFly",
    timeTravel: function(year) {
        console.log(this.firstName + " " + this.lastName + " is time traveling to " + year);
    }
}

marty.timeTravel(1955);
// Marty McFly is time traveling to 1955
```
>you can take the marty object’s timeTravel method and create a new reference to it from another object. 
>enabling us to apply behavior (functions) to more than one target instance

```javascript
var doc = {
    firstName: "Emmett",
    lastName: "Brown",
}

doc.timeTravel = marty.timeTravel;
doc.timeTravel(1885);
// Emmett Brown is time traveling to 1885
//when you’re invoking a method, the this context is the parent object it’s being invoked from.
```

>What happens when we save a reference to the marty.TimeTravel method and invoke our saved reference?

```javascript
var getBackInTime = marty.timeTravel;
getBackInTime(2014);
// undefined undefined is time traveling to 2014
```
>Whenever a function is called, we must look at the immediate left side of the brackets / parentheses “()”. If on the left side of the parentheses we can see a reference, then the value of “this” passed to the function call is exactly of which that object belongs to, otherwise it is the global object.

>The Value of this in Methods When Invoked Asynchronously:

```javascript
var flux = document.getElementById("flux-capacitor");
flux.addEventListener("click", marty.timeTravel);
marty.timeTravel = function(year) {
    console.log(this.firstName + " " + this.lastName + " is time traveling to " + year);
    console.log(this);
};
flux.addEventListener("click", function(e) {
    marty.timeTravel(someYearValue); 
});

```
![consolelog](http://tdn.azurewebsites.net/wp-content/uploads/2014/04/jsquicks_afjq_3.png)

>The Value of this Inside Constructor Functions:

```javascript
var TimeTraveler = function(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
    // Constructor functions return the
    // newly created object for us unless
    // we specifically return something else
};

var marty = new TimeTraveler("Marty", "McFly");
console.log(marty.firstName + " " + marty.lastName);
// Marty McFly
```

>Using Call, Apply & Bind

```javascript
//The call and apply methods that exist on the Function prototype both allow us to invoke a function and pass in this value
someFn.call(this, arg1, arg2, arg3);

someFn.apply(this, [arg1, arg2, arg3]);

doc.timeTravelFor = function(instance, year) {
    this.timeTravel.call(instance, year);
    // alternate syntax if you used apply would be
    // this.timeTravel.apply(instance, [year]);
};

var einstein = {
    firstName: "Einstein", 
    lastName: "(the dog)"
};
doc.timeTravelFor(einstein, 1985);
// Einstein (the dog) is time traveling to 1985

```
## Detect if mobile app or web is running - KendoUI

```javascript
if (typeof cordova == "undefined") {
                       //it's html5
                   }
                   else {
                       //it's hybrid 
                   }
```
## Dynamically load Google Analytics js file - Kendo UI

```javascript
    function googleTrackingPixel() {
        // set google variables as globals
        window.google_conversion_id = config.google_conversion_id
        window.google_conversion_language = config.google_conversion_language
        window.google_conversion_format = config.google_conversion_format
        window.google_conversion_color = config.google_conversion_color
        window.google_conversion_label = config.google_conversion_label
        window.google_conversion_value = config.google_conversion_value
        window.google_remarketing_only = config.google_remarketing_only

        //bez ovoga ne radi
        var oldDocWrite = document.write // save old doc write

        document.write = function (node) { // change doc write to be friendlier, temporary
            $("body").append(node)
        }

            $.getScript("http://www.googleadservices.com/pagead/conversion.js", function () {
                setTimeout(function () { // let the above script run, then replace doc.write
                document.write = oldDocWrite
            }, 100)
            })
    }
```
## Reference .vsdoc files in Visual Studio to enable intellisense

```
<% if(false) 
{ %>
    <script src="/path/to/vsdoc.js" type="text/javascript"></script>
<% } %>
```
>or at the top of your .js file: 
```
/// <reference path="/path/to/vsdoc.js" />
```
>Sometimes you'll also need to press Ctrl + Shift + J to update javascript intellisense in visual studio

## Self-executing or “immediately-invoked function

```javascript
//normal function
function sayHello(){
    alert('hello');
};
```
```javascript
//self-executing function
(function sayHello(){
    alert('hello');
})();
```
##Sharing properties using prototype chains

```javascript
//ecma6 way
var PersonProto = {
	describe: function() {
		return 'Person named ' + this.name;
	}
};

var jane = {
	__proto__: PersonProto,
	name: 'Jane' 
};

var tarzan = {
	__proto__: PersonProto,
	name: 'Tarzan'
};

jane.describe() //Person named Jane
```
```javascript
//ecma5 way
var jane = Object.create(PersonProto);
jane.name = 'Jane';
```
```javascript
//Sharing methods
//Instance-specific properties
function Person(name) {
	this.name = name;
}
//shared properties 
Person.prototype.describe = function() {
	return 'Person named' + this.name;
};
```
##Inheritance between constructors
```javascript
//Superconstructor
function Person(name) {
    this.name = name;
}
Person.prototype.sayHelloTo = function(otherName) {
    console.log(this.name + '  says hello to ' + otherName);
};
Person.prototype.describe = function () {
    return 'Person named ' + this.name;
};
```
> Employee must:    

1. inherit Persons instance properties  
2. create the instance property title  
3.  inherit Persons prototype properties  
4.  override method Person.prototype.describe and call overridden method (super-call)  

```javascript
//Subconstructor
function Employee(name, title) {
    Person.call(this, name);  //1.
    this.title = title;  //2.
}

Employee.prototype = Object.create(Person.prototype);  //3.
Employee.prototype.describe = function() {  //4.
    return Person.prototype.describe.call(this)  //5.
            + ' (' + this.title + ')';
};

//test 
var jane = new Employee('Jane', 'CTO');
jane.name;
jane.title;
Object.keys(jane);
jane.sayHelloTo('Alex');
jane.describe();

```

##jQuery selectors
```javascript
$("#item") // select an element with the id of "item"

$(".fancybutton") // select an element with a class of "fancybutton"

$("li:even") // select the even numbered items in a list

$("ul li:nth-child(3)") // select the 3rd list item in an unordered list
```
* [more selectors] (http://flippinawesome.org/2014/05/12/rethinking-dom-traversal/?utm_source=rss&utm_medium=rss&utm_campaign=rethinking-dom-traversal)

##Notification Widget - Kendo UI
```html
<span id="popupNotification"></span>
```
```javascript
var popupNotification = $("#popupNotification").kendoNotification().data("kendoNotification");

popupNotification.show("Hey there!", "info");
```

##Remove element from HTML
```javascript
function removeElement(ele) {
    ele.parentNode.removeChild(ele);
}

removeElement(document.getElementById("image_X"));
//can apply display:none or visibility:hidden to hide img outline
```
```javascript
//set src to empty
$('#img').attr('src', '');
```
##Closing browser tab

```javascript
open(location, '_self').close();
```
##Remove image with specific src attribute

```javascript
$(document).ready(function() {
$("img").each(function() {
if($(this).attr("src") == "testImage.png") {
$(this).remove();
//Or you can use
$(this).hide();
//Or you can use
$(this).css("display", "none");
}
});
});
```
##Change Image Source Attribute of all images belonging to a specific Class in jQuery

```javascript
$('#change_src').click(function() {
 
$('.img_class').each(function(){
$(this).attr('src','somedir/some_image_name.jpg');
});
 
});
```
##Change Size / Style Attribute of all Images belonging to a specific Class in jQuery

```javascript
$('#change_src').click(function() {
 
$('.img_class').each(function(){
 
//Check if the style attribute is already defined. If yes, then get that value
 
if($(".img_class[style]").length)
 
{
 
var current_style = $(this).attr('style');
 
}
 
else
 
{
 
//Assign empty value
 
var current_style = '';
 
}
 
$(this).attr('style','width:150px;' + current_style);
 
});
 
});
```
##Select all elements with id that contains string:

```javascript
$(document).ready(function(){
    $('#test').click(function(){
           $('div[id^="Some_id_"]').each(function()
           {
                $(this).css('color','blue');                                  
           });
    }); 
});
```

##Convert HTML to text:

- Content without dashes, ampersands and other punctuation codes
```javascript
var text = html.replace(/<\/?[^>]+>/ig, " ");
```

- Workaround
```javascript
var temp = document.createElement("div");
   temp.innerHTML = html;
   return temp.textContent || temp.innerText || "";
```

##Make div clickable if there is link text

```javascript
$(function(){
     $("div").click(function(){
         window.location=$(this).find("a").attr("href");
         return false;
    });
});
```
##A One-Time Event Creation Function

```javascript
// create a one-time event
function onetime(node, type, callback) {
 
    // create event
    node.addEventListener(type, function(e) {
        // remove event
        e.target.removeEventListener(e.type, arguments.callee);
        // call handler
        return callback(e);
    });
 
}
```
> Using function:

```javascript
// one-time event
onetime(document.getElementById("myelement"), "click", handler);
 
// handler function
function handler(e) {
    alert("You'll only see this once!");
}
```
