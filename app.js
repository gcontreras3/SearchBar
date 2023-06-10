const contacts = [{
    name: '',
    phone: ''
}]


// Figuring out how to push an object into an array
const testItem = document.createElement('li');
    
    
document.querySelector('#test-input').addEventListener('input', function(e){
    console.log(e.target.value)
    testItem.textContent = e.target.value
    document.querySelector('#testOL').appendChild(testItem)
})





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
function addContactBtn(){
    if(seachInput.value === ''){
        alert("Enter a contact name")
    }
    else {
        let li = document.createElement('li')
        li.innerHTML = searchInput.value
        addContact.appendChild(li)
    }
}
const phoneNumberInput = document.querySelector('#phone-number').addEventListener('input', function(e){
    console.log(e.target.value)
    e.target.value
})

document.querySelector('#add-contact').addEventListener('click', function(e){
    addContact.push(searchInput)
    document.getElementById('#ordered-list').textContent()
})


const toggleBtn = document.querySelector('#toggleBtn')
const divList = document.querySelector('.listHolder')

toggleBtn.addEventListener('click', () => {
    if(divList.style.dipslay === 'none'){
        divList.style.display = 'block'
        toggleBtn.innerHTML = 'Hide List'
    } else {
        divList.style.display = 'none'
        toggleBtn.innerHTML = 'Show List'
    }
})

// add list items

// create variables

const addInput = document.querySelector('#addInput')
const addBtn = document.querySelector('#addBtn')

addBtn.addEventListener('click', () => {
    const ul = divList.querySelector('ul')
    const li = doucment.createElement('li')
    li.innerHTML = addInput.value
    ul.appendChild(li)
})