// learning objects

//creating the object and putting the value in that
let myobj = {
    name : "Pradeep Kumar",
    profession : "Trainee Software Developer",
    mobile : 6386236314,
    isActive : true,
    marks : [95,84,78,99,79] ,
    
    allData : function()
    {
        return this.name + this.mobile + this.isActive;
    }

};


console.log(myobj.allData());

// this is about the object display

var person  = {
    name : "Akhand Singh",
    college : "LBSIMDS",
    mobile : 9918259211,
}


console.log(person.name + " "+ person.college + " "+ person.mobile)

// another example  to print the object value using the for in loop

var x, text = " ";
var data = {

    name: "Aditya Singh",
    college: "LBSIMDS",
    mobile: 9955664455,

}

for(x in data)
{
    text = text+data[x] + " ";
}

console.log(text)

// using object value in the program - 

var data = {
    name : "Sachin Tendulkar",
    profession : "professional cricketter",
    isPlaying : false,


}

var bcci_list = Object.values(data);
console.log(bcci_list);

// using JSON stringfy method in the object

var myNewObj = {
    name : "Sourav Ganguly",
    nickName : "Dada",
    profession : "Professional Cricketter",
    Batting_Style : "Left Handed",
    isPlaying : false,
}



var checkOnce = JSON.stringify(myNewObj);
console.log(checkOnce);

//stringfy function -- note stringyfy could not work on functions
 
var obj2 = {
    name : "Pradeep",
    age : function()
    {
        return 26;
    }
}

console.log(JSON.stringify(obj2)) // only get name as a result

// and this can be work when you convert the function into the string. 

obj2.age = obj2.age.toString();
var datass = JSON.stringify(obj2); // this will return the result but function as it is
console.log(datass)// output

//stringyfy arrays

var rawData = ["Pradeep", "Akhand", "Diwakar","Roli", "Shashi"];
console.log(rawData);

console.log(JSON.stringify(rawData));

rawData.forEach(x  => {console.log(x)});// this is the test of foreach method

//object accessors

// creating an object 
var dev = {
    firstName : "Raman",
    lastName : "Srivastava",
    language : "English",

     get lang() {
            return this.language
     }

}

console.log(dev.language);

// javascript setter using for object - using the set keywords

var dataPerson = {
    firstName: "John",
    lastName: "Doe",
    language: "",

    set lang(lang){
        this.language = lang

    }
}
dataPerson.lang = "english" // setting the language in the key value - lang
console.log(dataPerson.language); // getting to language and then printing

// javascript getter function

var personlist = {
    firstName: "John",
    lastName: "Doe",

    get full_name (){
        return this.firstName + " " + this.lastName;
    }
}
console.log(personlist.full_name)

// ussig of data quality in the 0bject

// using the uppercase function to make the phrase upper case or any value. 

var checkData = {
    firstName: "John",
    lastName: "Doe",
    language: "en",

    get lang(){
        return this.language.toLocaleUpperCase(); // changing case from lower to upper
    },

    get name ()
    {
        return this.firstName.toUpperCase();
    }
}
console.log(checkData.lang)
console.log(checkData.name)

// setiing the upper case in the language when the language value is empty

var findPerson = {
    firstName: "John",
    lastName: "Doe",
    language: "",

set lang(lang)
{
return this.language = lang.toUpperCase();
}
}
findPerson.lang = "spanish";
console.log(findPerson.language );  

// object constructor - 
// very important topic to learn

function persion(fullname, age, eduction, hair)
{
    this.full_name = fullname;
    this.age = age;
    this.eduction = eduction;
    this.hair = hair;

}
// now creating an object using this predefined structure
var pradeepData = new persion("Pradeep Kumar Sahani",26,"Master Of Computer Application", "Black");

console.log("Hello"+ " " +pradeepData.full_name + " " + " are you" + " "+ pradeepData.age + " "+ "year old");

// in the above method we are creating instance and also creating object with the help of instance and constructor



