


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list,page){
    let startIndex = (page * 9) - 9;
    let endIndex = page * 9;

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
    let numPages = list.length / 9;
    
    let element = document.querySelector(".link-list");

    element.innerHTML = "";

    for(let i = 0; i < numPages; i++){
        element.innerHTML += `
            <li>
                <button type="button">${i+1}</button>
            </li>`;
    }
}


// Call functions
showPage(data,1);
addPagination(data);
