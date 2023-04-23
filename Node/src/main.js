const elem = document.getElementById('title')
elem.innerHTML = 'rodando node com webpack'

const list = document.getElementById('list')
const api = 'http://localhost:3000/contact'
//Fetch api

fetch(api, {method:'get'})
.then((response) => response.json())
.then(function(data){
    data.map(contact => {
        let li = document.createElement('li')
        li.innerHTML = contact.name 
        list.appendChild(li)
        let button = document.createElement('button')
        button.innerHTML = "Deletar"
        button.onclick = deleteIndex()
        list.appendChild(button)
    })
})


    fetch(`${api}/:index`, {method:'put'})
    .then((response) => response.json())
    .then(function(data){
        console.log(Object.keys(data));
    })
    


function deleteIndex() {
    fetch(`${api}/:index`, {method:'delete'})
    .then((response) => response.json())
    .then(function(data){
    //    data.pop()
    })
    
}




