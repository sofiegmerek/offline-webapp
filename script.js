
window.addEventListener('DOMContentLoaded', init);
let time = 0;

function init(){
    time = 1;
    console.log("initiated");
    if(localStorage.getItem('names') == null){
        var names = new Array();
        //names[0] = "New member name?"
        console.log("names does not exist");
        console.log("hi");
        console.log(names);
        names.push("rest1");
        console.log("why");
        console.log(names);
        names.push("rest2");
        localStorage.setItem("names", JSON.stringify(names));
    }else{
        console.log("names exists");
    }
}



(function() {
    if(time == 0){
        init();
    }
    //Check to see if localStorage is supported
    if(window.localStorage)
        console.log("Local Storage Supported")
    else
        console.log("No support for Local Storage")

    //prompt user for username and age
  // let username = prompt("Enter username:", "")
   // let age = prompt("Enter age:", "")

    //add username and age to localstorage
   // window.localStorage.setItem("username", username)
    //window.localStorage.setItem("age", age)
console.log("mama");
    //show number of objects stored
   // console.log(window.localStorage.length)

   // console.log(window.localStorage.getItem("username"))
    //console.log(window.localStorage.getItem("age"))
    
   console.log("wello");

//indow.localStorage.setItem("names",names );

var storedNames = JSON.parse(localStorage.getItem("names"));
console.log(storedNames);
console.log("store names above");
    
})();
function store(){ //stores items in the localStorage
    console.log("STORING");
    var brand = document.getElementById('carBrand').value;
    var price = document.getElementById('carPrice').value;
    var key = document.getElementById('key').value;

    const car = {
        brand: brand,
        price: price,
    }
console.log("meee");
    window.localStorage.setItem(key,JSON.stringify(car));  
console.log("wehere");
    let recipes = localStorage.getItem('recipes');
    console.log(recipes);

   
var names = JSON.parse(localStorage.getItem('names'));
console.log("hi");
console.log(names);
console.log("names above");
names.push("piss2");
console.log(names);
names.push(JSON.stringify(car.brand));
console.log("newwe");
localStorage.setItem("names", JSON.stringify(names));
var storedNames = JSON.parse(localStorage.getItem("names"));
console.log(storedNames);


    localStorage.setItem('recipes', JSON.stringify(recipes));
/*
    window.localStorage.setItem(key,JSON.stringify(car));  
    let mom = Array(car);
   // window.localStorage.setItem('pal',JSON.stringify(mom));  

    let recipes = JSON.parse(localStorage.getItem('pal'));
    console.log(recipes);
    recipes.push(car);

    window.localStorage.setItem('pal',JSON.stringify(recipes));  

*/
    //converting object to string
}

function retrieveRecords(){ //retrieves items in the localStorage
    var key = document.getElementById('retrieveKey').value; //gets key from user
    console.log("retrive records");
    var records = window.localStorage.getItem(key); //searches for the key in localStorage
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}

function removeItem(){ //deletes item from localStorage
    var key = document.getElementById('removeKey').value; //gets key from user
    localStorage.removeItem(key) //passes key to the removeItem method
    console.log("remove items");
}

function clearStorage(){ //clears the entire localStorage
    localStorage.clear()
    console.log("clear records");
}

window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("carForm").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
}