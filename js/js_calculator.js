
var cArr;
function dis(value){
    var cStr= document.getElementById("screenTxt").value+=value;
    //result(cArr);
    // console.log(cStr);
    if(value=='del'){
        cStr.pop();
    }
}
function result(value){
    //var cStr = dis();
    // var screenVal = document.getElementsByClassName("screenclass")[0].value;
    console.log("Element Name",value);
    value = value.replace("+", ",+,").replace("*", ",*,").replace("/", ",/,").replace("-", ",-,");
    cArr=value.split(",");
    console.log(cArr);
    var nVal=0;
    

for (i = 0; i <= cArr.length; i++) {
    cItem = cArr[ i ];
    if (cItem == "*") {
        tLeft = parseFloat(cArr[ i - 1 ]);
        tRight = parseFloat(cArr[ i + 1 ]);
        nVal = tLeft * tRight;
        cArr[ i - 1 ] = nVal;
        cArr.splice(i, 2);
        i = cArr.length;
       // document.getElementById("screenTxt").value=nVal;
    }
}


for (i = 0; i <= cArr.length; i++) {
    cItem = cArr[ i ];
    if (cItem == '/') {
        tLeft = parseFloat(cArr[ i - 1 ]);
        tRight = parseFloat(cArr[ i + 1 ]);

        nVal = tLeft / tRight;
        cArr[ i - 1 ] = nVal;
        cArr.splice(i, 2);
        i = cArr.length;
    }
}


//var tResult = parseFloat(cArr[ 0 ]);
for (i = 1; i < cArr.length; i++) {
    if (cArr[ i ] == '+') {
        nVal = parseFloat(cArr[ i - 1 ]) + parseFloat(cArr[ i + 1 ]);
    } else if (cArr[ i ] == '-') {
        nVal = parseFloat(cArr[ i - 1 ]) - parseFloat(cArr[ i + 1 ]);
    }
    i++;
}

//console.log("output is ===");
//console.log(tResult);
 //document.getElementById("screenTxt").innerHTML=nVal;
 console.log(nVal);
document.getElementById("screenTxt").value=nVal;
}

function clearText(){
    console.log("Clear Input");
   document.getElementById("screenTxt").value = '';

}
