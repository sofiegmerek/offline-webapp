(function() {
    //Check to see if localStorage is supported
    if(window.localStorage)
        console.log("Local Storage Supported")
    else
        console.log("No support for Local Storage")

    //prompt user for username and age
   let username = prompt("Enter username:", "")
    let age = prompt("Enter age:", "")

    //add username and age to localstorage
    window.localStorage.setItem("username", username)
    window.localStorage.setItem("age", age)

    //show number of objects stored
    console.log(window.localStorage.length)

    console.log(window.localStorage.getItem("username"))
    console.log(window.localStorage.getItem("age"))
    
})();
function store(){ //stores items in the localStorage
    var brand = document.getElementById('carBrand').value;
    var price = document.getElementById('carPrice').value;
    var key = document.getElementById('key').value;

    const car = {
        brand: brand,
        price: price,
    }

    window.localStorage.setItem(key,JSON.stringify(car));  
    let mom = Array(car);
   // window.localStorage.setItem('pal',JSON.stringify(mom));  

    let recipes = JSON.parse(localStorage.getItem('pal'));
    console.log(recipes);
    recipes.push(car);

    window.localStorage.setItem('pal',JSON.stringify(recipes));  


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