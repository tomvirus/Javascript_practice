console.log('Here we will practice the function of js');

// creating function using the function constructor

var myfunction = new Function("a", "b", "return a*b") // done using function constructor

console.log(myfunction(8,7));

// another method to write the function and this will be same as above

var myData = function (a,b)
{
    return a*b;
}

console.log(myData(99,56)) // normal way as we define

// function hoisting

console.log(checkData(7));


function checkData(y){
    return y*y

}

// self invoking function

(function ()
{
        var arr = [5, 99];
        arr.forEach(x => { console.log(x * x) })
   
}) ();




