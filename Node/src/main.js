const elem = document.getElementById('title')
elem.innerHTML = 'rodando node com webpack'

const list = document.getElementById('list')
const api = 'http://localhost:3000/contact'
const btn = document.getElementById('btn')

//Fetch api
fetch(api, {method:'get'})
.then((response) => response.json())
.then(function(data){
    data.map(contact => {
        let li = document.createElement('li')
        li.innerHTML = contact.name 
        list.appendChild(li)
     
    })
})