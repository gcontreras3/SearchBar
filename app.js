const contacts = [{}]




// Figuring out how to push an object into an array

contacts.push({
    name: 'Jerry',
    phone: 13412341341
})
console.log(contacts)
document.querySelector('#add-contact').addEventListener('click', function(e){
    e.target.textContent = 'Button was clicked!'
})

// document.querySelector('#add-contact').addEventListener('click', function(contact){
//    console.log(`this button was clicked`)
//     const p = document.createElement('p')
//         p.textContent = contact.text
//         document.querySelector('#list')
//     console.log(contacts)
// })