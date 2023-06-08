const contacts = [{}]


// Figuring out how to push an object into an array
// console.log(contacts)

document.querySelector('#add-contact').addEventListener('click', function(e){
    e.target.textContent = 'Button was clicked!'
})

document.querySelector('#add-contact').addEventListener('click', function(contact){
   console.log(`this button was clicked`)
    const li = document.createElement('li')
        li.textContent = contact
        document.querySelector('#list')
    console.log(contacts)
})

const addContact = document.querySelector('#ordered-list')
const searchInput = document.querySelector('#search-input').addEventListener('input', function(e){
    e.target.value
    console.log(e.target.value)
})

const phoneNumberInput = document.querySelector('#phone-number').addEventListener('input', function(e){
    console.log(e.target.value)
    e.target.value
})

document.querySelector('#add-contact').addEventListener('click', function(e){
    addContact.push(searchInput)
    document.getElementById('#ordered-list').textContent()
})
