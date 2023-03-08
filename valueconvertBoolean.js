/*Following values will be converted to false
1. Null
2. NaN
3. 0
4. empty string (single & double qoutes)
5. undefined*/
var name0 = null;
var name1 = NaN;
var name2 = 0;
var name3= " ";
var name4 = undefined;

if(name0){
    console.log("Result ")
};

if(name1){
    console.log("result")
};


/*All theses will be converted to ture

1. {}   // Objects
2. "agsaaaaaaad"  // string 
3. 1        // any number other then zero
*/

var myName = "Muhammad iqbal";

var myNumber = 1;
if(myName){
    console.log("Result ")
    if(myNumber){
        console.log("Good")
    }
};

//value convet to boolean with &&(AND) operation

var value = "Muhammad" && "iqbal";
var value2 = false && "iqbal";
console.log(value);

// value convert to boolean with ||(OR) operation

var value0 = 0 || "iqbal iqbal";
var value00 = 1 || " ";
console.log(value0);
console.log(value00);



