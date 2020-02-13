/*
    var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    var text = "";
    var i;
    for (i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
    */
    
    /*
    var x = 0;
    switch (x) {
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
    }
    document.getElementById("demo").innerHTML = text;
    */

    /*
    var text = ""
    var i = 0;

    do {
    text += "<br>The number is " + i;
    i++;
    }
    while (i < 10);  

    document.getElementById("demo").innerHTML = text;
    */

    /*
    var text = "";
    var i = 0;
    while (i < 10) {
    text += "<br>The number is " + i;
    i++;
    }
    document.getElementById("demo").innerHTML = text;
    */

    /*
    var fruits, text, fLen, i;
    fruits = ["Banana", "Orange", "Apple", "Mango"];
    fLen = fruits.length;

    text = "<ul>";
    for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";

    document.getElementById("demo").innerHTML = text;
    */
    
    var i=19;
    function myFunction1(){
    var text="";
    var count;
    
    for(;i<60;i++)
    {
        if(i==20)
        {
            window.alert("you are on 20");
            i++;
            break;
        }
        else if(i==35)
        {
            window.alert("you are on 35");
            i++;
            break;
        }
        else if(i==50)
        {
            window.alert("you are on 50");
            i;
            break;
        }
        else if(i==59){
            alert("you are up");
        }
    }
}