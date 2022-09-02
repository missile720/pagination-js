/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
//number shown per page
let numberPerPage = 9;
//array to hold objects from data array
let arrayHolder = [];

function showPage(list,page){
    let startIndex = (page * numberPerPage) - numberPerPage;
    let endIndex = 0;

    //check to see if length is less than numberPerPage for endIndex
    if(list.length > numberPerPage){
        endIndex = page * numberPerPage;
        //checking to see if endIndex is greater length length of list
        if(endIndex > list.length){
            endIndex = list.length;
        }
    }
    else{
        endIndex = list.length;
    }

    let element = document.querySelector(".student-list");

    element.innerHTML = "";

    for(let i = startIndex; i < endIndex; i++){
        element.innerHTML += `
            <li class="student-item cf">
                <div class="student-details">
                    <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                    <h3>${list[i].name.first} ${list[i].name.last}</h3>
                    <span class="email">${list[i].email}</span>
                </div>
                <div class="joined-details">
                    <span class="date">Joined ${list[i].registered.date}</span>
                </div>
            </li>`;
    }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list){
    let numPages = 0;

    //checks for less than nine
    if(list.length > numberPerPage){
        numPages = Math.ceil(list.length / numberPerPage);
    }
    else if(list.length > 0){
        numPages = 1;
    }
    else{
        numPages = 0;
    }
    
    let element = document.querySelector(".link-list");

    element.innerHTML = "";

    for(let i = 0; i < numPages; i++){
        element.innerHTML += `
            <li>
                <button type="button">${i+1}</button>
            </li>`;
    }

    //selects buttons
    let buttonElements = document.querySelectorAll("button");
    //loops through all buttons and adds click event listeners
    for(let i = 0; i < buttonElements.length; i++){
        buttonElements[i].addEventListener("click", buttonClick);
    }
}

// Call functions
showPage(data,1);
addPagination(data);

//initial button setup for the first button to be active
let buttonElements = document.querySelectorAll("button");
buttonElements[0].classList.add("active");

function buttonClick(event){
    //grabs button number and stores it in variable
    let num = parseInt(event.target.innerHTML);
    
    //selects all buttons
    let buttonElements = document.querySelectorAll("button");

    //loops through buttons
    for(let i = 0; i < buttonElements.length; i++){
        //checks if button is the current one clicked
        if(i === (num - 1)){
            //adds class active
            buttonElements[i].classList.add("active");
        }
        else{
            //removes class active
            buttonElements[i].classList.remove("active");
        }
    }
    
    //updates page to page user clicked also checks if holder is empty
    if(arrayHolder.length === 0){
        //shows pages based on total data list
        showPage(data,num);
    }
    else{
        //shows pages based on search parameter
        showPage(arrayHolder,num);
    }
    
}

//select the input field
let inputText = document.getElementById("inputText");
//adds event listener as input is typed or deleted
inputText.addEventListener("input", search);

function search(event){
    //stores input field
    let input = event.target.value;
    //array to hold objects from data array
    arrayHolder = [];

    //checks if input is empty
    if(input === ""){
        // Call functions
        showPage(data,1);
        addPagination(data);

        //initial button setup for the first button to be active
        let buttonElements = document.querySelectorAll("button");
        buttonElements[0].classList.add("active");
    }
    else{
        //loops through data array
        for(let i = 0; i < data.length; i++){
            //checks data array if it contains search field value
            if(data[i].name.first.toLowerCase().includes(input.toLowerCase()) || data[i].name.last.toLowerCase().includes(input.toLowerCase())){
                //pushes data into arrayHolder
                arrayHolder.push(data[i]);
            }
        }
        // Call functions
        showPage(arrayHolder,1);
        addPagination(arrayHolder);

        //initial button setup for the first button to be active
        let buttonElements = document.querySelectorAll("button");
        buttonElements[0].classList.add("active");
    }
}