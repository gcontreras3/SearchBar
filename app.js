// Creating the array of objects
const contacts = [{
    name: '',
    phone: ''
}]

const filters = {
    searchText: ''
}

// function renderText() {
//     var userInput = document.getElementById("addName").value
//     var outputDiv = document.getElementById("contact-list")
//     outputDiv.innertext = userInput;
    

//     // Create a new paragraph element
//     var paragraph = document.createElement("p")
//     paragraph.innerText = userInput

//     // Append the paragraph element to the output div
//     outputDiv.appendChild(paragraph)

//     // Clear the input field
//     document.getElementById("addName").value = " ";

// }


function renderText(){
    var userInput = document.getElementById("addName").value;
    var outputDiv = document.getElementById("contact-list");

    var paragraph = document.createElement("p");
    paragraph.innerText = userInput;
    outputDiv.appendChild(paragraph);

    document.getElementById("addName").value = " ";

    // Save the rendered input to localStorage
    var savedInputs = localStorage.getItem("savedInputs") || [];
    if (Array.isArray(savedInputs)){
        savedInputs.push(userInput);
    } else {
        savedInputs = [userInput];
    }
    localStorage.setItem("savedInputs", JSON.stringify(savedInputs));
}

// Retrieve the saved inputs from localStorage when the page is loaded
window.onload = function(){
    var savedInputs = localStorage.getItem("savedInputs");
    if (savedInputs){
        savedInputs = JSON.parse(savedInputs);
        var outputDiv = document.getElementById("contact-list");

        for (var i = 0; i < savedInputs.length; i++){
            var paragraph = document.createElement("p");
            paragraph.innerText = savedInputs[i];
            outputDiv.appendChild(paragraph)
        }

    }
    // localStorage.clear()
}