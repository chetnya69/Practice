// you can change the content of tags by .innreHTML like
// document.getElementById("test1").innerHTML="Text of paragraph changed using javascript";

// we can change style of html by adding property .style.propertyname; like
// we cannot add different styles in same document but if a property have different values then we can add it
// document.getElementById("test1").style.color="red";
// document.getElementById("test2").style.fontSize="20px";

// we can add use javascript through functions like
// function myfunction(){
//     document.getElementById("test1").innerHTML="Text of paragraph changed using javascript"
//     document.getElementById("test1").style.color="red";
//     document.getElementById("test2").style.fontSize="20px";
//     window.alert("Text will be changed");
//     window.confirm("are you sure to chnage the text");
// }

// OBJECTS: it is declared as follows (we can write it in single line too)
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
//   document.getElementById("demo").innerHTML = person.firstName + " " + person.lastName; //Display data from object
//   fullName : function() {                              // () is necessary to display 
//    return this.firstName + " " + this.lastName;}       // another methoda
//

// EVENTS: 
    // onchange	// An HTML element has been changed
    // onclick	    // The user clicks an HTML element
    // onmouseover	// The user moves the mouse over an HTML element
    // onmouseout	// The user moves the mouse away from an HTML element
    // onkeydown	// The user pushes a keyboard key
    // onload	    // The browser has finished loading the page

// String Methods:
    // indexOf();
    // lastIndexOf();
    // str.length();
    // search();
    // str.slice(start, end)
    // str.substring(start, end)
    // str.substr(start, length)
    // replace();
    // toUpperCase();
    // toLowerCase();
    // concat();
    // charAt(position)
    // charCodeAt(position);
    // str.split();

//Numbers: 
    // toString()
    // toExponential()
    // oFixed()
    // toPrecision()
    // valueOf()
    // Number()
    // parseInt()
    // parseFloat()
    // MAX_VALUE	        //Returns the largest number possible in JavaScript
    // MIN_VALUE	        //Returns the smallest number possible in JavaScript
    // POSITIVE_INFINITY	//Represents infinity (returned on overflow)
    // NEGATIVE_INFINITY	//Represents negative infinity (returned on overflow)
    // NaN	                //Represents a "Not-a-Number" value

//Arrays: it is declared as follows (we can write it in single line too)
        // var cars = [
        //     "Saab",
        //     "Volvo",
        //     "BMW"
        // ];
    //array methods: 
        // arr.join() // joins all array elements into a string.
        // arr.toString()
        // arr.push();
        // arr.pop();
        // arr.shift();
        // arr.unshift();
        // arr.length;
        // arr.splice();
        // arr.slice();
        // arr1.concat(arr2);
    // array sorting: 
    // var arr = [40, 100, 1, 5, 25, 10];
    // document.getElementById("demo").innerHTML = arr;  

    // function sort() {
    // arr.sort();                                         // to sort alphabetically
    // document.getElementById("demo").innerHTML = arr;

    // points.sort(function(a, b){return a - b});       // to sort numerically
    // document.getElementById("demo").innerHTML = points;
    //}
    //Methods
        // arr.sort();
        // arr.revers();
        // arr.sort(function(a, b){return a - b}); // ascending order
        // arr.sort(function(a, b){return b - a}); // descending order
        // Math.max.apply(null, arr);              // to retrieve highest value
        // Math.min.apply(null, arr);              // to retrieve lowest value
        

        // arr.forEach(myfunction               // to retrieve all array elemets once example
            // it has 3 arguments                       // var txt = "";
                // value, index, array                  // var numbers = [45, 4, 9, 16, 25];
                                                        // numbers.forEach(myFunction);
                                                        // document.getElementById("demo").innerHTML = txt;
                                                        
                                                        // function myFunction(value) {
                                                        //   txt = txt + value + "<br>";             
                                                        // }
        //arr.map(myfunction)                   // creates a new array by performing a function on each array element.
            // it has 3 arguments           value, index, array            

        // arr.filter(myfunction)               // creates a new array of Elements which satisfies the condition.    
            // it has 3 arguments:          value, index, array

        // arr.reduce(myfunction)               // picks elements from left to right and returns a single value;
            // its has four arguments:      total, value, index, array 

        // arr.reduceRight(myfunction)          // picks elements from right to left anf returns a single value;
            // its has four arguments:      total, value, index, array

        // arr.every(myfunction)                // check if all array elements pass a test. It returns a boolean value (true/false)
            // it has 3 arguments:          value, index, array

        // arr.some(myfunction)                 // check if some array elements pass a test. It returns a boolean value (true/false)
            // it has 3 arguments:          value, index, array

        // arr.find(myfunction)                 // returns first value satidfy that conditon.
            // it has 3 arguments:          value, index, array


// Switch Case: 
    // var day=prompt("Please enter Day");
    // switch (day) {
    // case 0:
    //     day = "Sunday";
    //     break;
    // case 1:
    //     day = "Monday";
    //     break;
    // case 2:
    //     day = "Tuesday";
    //     break;
    // case 3:
    //     day = "Wednesday";
    //     break;
    // case 4:
    //     day = "Thursday";
    //     break;
    // case 5:
    //     day = "Friday";
    //     break;
    // case  6:
    //     day = "Saturday";
    // }
    // default:
     //   text = "please enter a valid day";
    // document.getElementById("demo").innerHTML = "Today is " + day;

// try catch (erroe handling):
    // var message, x;
    // message = document.getElementById("p01");
    // message.innerHTML = "";
    // x = document.getElementById("demo").value;
    // try {
    // if(x == "") throw "empty";
    // if(isNaN(x)) throw "not a number";
    // x = Number(x);
    // if(x < 5) throw "too low";
    // if(x > 10) throw "too high";
    // }
    // catch(err) {
    // message.innerHTML = "Input is " + err;
    // }


// JavaScript Methods:
    // document.getElementById();
    // document.getElementsByClassName();
    // document.getElementsByTagName();
    // document.querySelectorAll();

// JavaScript DOM Events: 
    // onmouseover
    // onmouseout
    // onmousedown
    // onmouseup
    // onclick
    // onchange
    // onload 
    // onunload
