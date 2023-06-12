// Creating the array of objects
const contacts = [{
    name: '',
    phone: ''
}]

const filters = {
    searchText: ''
}
// let newListItem = document.createElement('p')
// document.querySelector('#addName').addEventListener('input',function(e){
//     const newItem =  newListItem.textContent = e.target.value
// document.querySelector('#contact-list').appendChild(newListItem)
// contacts.push(newItem)
// localStorage.setItem(newItem)
// localStorage.getItem(newItem)
// })
  

const contactList = document.querySelector('#contact-list')
const itemFunction = document.querySelector('#addName').addEventListener('input', function (e) {
    
    // e.target.value
    contactList.textContent = e.target.value
    
    
})
document.querySelector('#contact-list').appendChild(itemFunction)




// document.querySelector('#contact-list').innerHTML = ''



// 1. Get name from user input and add it to the list
// 2. Get Phone from user input and add it to the list
// 3. For Filter Contacts button, use a drop down
// 4. For sort Contacts button, use a drop down





// Filter functions

const renderContacts = function (contacts, filters){
    const filteredContacts = contacts.filter(function(contact){
        return contact.name.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#contact-list').innerHTML = ''
    filteredContacts.forEach(function(contact){
        contactsEl.textContent = contacts.name
        document.querySelector('#contact-list').appendChild(contactsEl)
    })
}
const generateContactDOM = function(contact){
    const contactsEl = document.createElement('p')

        if (contacts.name.length > 0){
            contactsEl.textContent = contacts.name
        } else {
            contactsEl.textContent = 'Unnamed contact'
        }
        return contactsEl
}

document.querySelector('#search-input').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderContacts(contacts, filters)
})
// let btnAdd = document.querySelector('#add-contact')
// let addNameInput = document.querySelector('#addName')
// let contactsName = contacts.name

// btnAdd.addEventListener('click', () =>{
//     contactsName.push(addNameInput.value)
//     addNameInput.value = ''; // reset the value of input after adding it
//     console.log(contacts)
// })

// document.querySelector('#addName').addEventListener('input', function(e){
//     console.log(e.target.value)
//     const addName = e.target.value
//     const addToList = document.querySelector('#ordered-list').innerHTML
    
// })


// Event listener for phone number input
// document.querySelector('#phone-number').addEventListener('input', function(e){
//     console.log(e.target.value)
//     contacts.phone.appendChild(e.target.value)
// })














//TESTING FUNCTIONS

// Figuring out how to push an object into an array
// const testItem = document.createElement('li');
    


// this function adds a list item but deletes it after the input is deleted
// document.querySelector('#test-input').addEventListener('input', function(e){
//     console.log(e.target.value)
//     testItem.textContent = e.target.value
//     document.querySelector('#testOL').appendChild(testItem)
// })





// console.log(contacts)

// document.querySelector('#add-contact').addEventListener('click', function(e){
//     e.target.textContent = 'Button was clicked!'
// })

// document.querySelector('#add-contact').addEventListener('click', function(contact){
//    console.log(`this button was clicked`)
//     const li = document.createElement('li')
//         li.textContent = contact
//         document.querySelector('#list')
//     console.log(contacts)
// })

// const addContact = document.querySelector('#ordered-list')

// const searchInput = document.querySelector('#search-input').addEventListener('input', function(e){
//     e.target.value
//     console.log(e.target.value)
// })
// function addContactBtn(){
//     if(seachInput.value === ''){
//         alert("Enter a contact name")
//     }
//     else {
//         let li = document.createElement('li')
//         li.innerHTML = searchInput.value
//         addContact.appendChild(li)
//     }
// }
// const phoneNumberInput = document.querySelector('#phone-number').addEventListener('input', function(e){
//     console.log(e.target.value)
//     e.target.value
// })

// document.querySelector('#add-contact').addEventListener('click', function(e){
//     addContact.push(searchInput)
//     document.getElementById('#ordered-list').textContent()
// })


// const toggleBtn = document.querySelector('#toggleBtn')
// const divList = document.querySelector('.listHolder')

// toggleBtn.addEventListener('click', () => {
//     if(divList.style.dipslay === 'none'){
//         divList.style.display = 'block'
//         toggleBtn.innerHTML = 'Hide List'
//     } else {
//         divList.style.display = 'none'
//         toggleBtn.innerHTML = 'Show List'
//     }
// })

// add list items

// create variables

// const addInput = document.querySelector('#addInput')
// const addBtn = document.querySelector('#addBtn')

// addBtn.addEventListener('click', () => {
//     const ul = divList.querySelector('ul')
//     const li = doucment.createElement('li')
//     li.innerHTML = addInput.value
//     ul.appendChild(li)
// })