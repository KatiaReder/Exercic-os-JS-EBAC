const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const server = express()

server.listen(3000)
server.use(cors())
server.use(bodyParser.urlencoded({extended: true}))

server.use(express.json())
const contacts = 
[
    {
        "name": "Katia"
    },
    {
        "name": "Maria"
    },
    {
        "name": "Alice"
    },
    {
        "name": "Lia"
    },
]


server.get('/contact', (req, res) => {
   return res.json(contacts)
} )


//adiciona
server.post('/contact',  (req, res) => {
    const { name } = req.body
    contacts.push({"name": name})
    return res.json(contacts)
})

//atualiza
server.put('/contact/:index', (req, res) => {
    const { index } = req.params
    const {name} = req.body
    contacts[index] = {"name": name}

    return res.json(contacts)
})

server.delete('/contact/:index', (req, res) => {
    const { index } = req.params
    contacts.splice(index, 1)
    return res.json(contacts)
})