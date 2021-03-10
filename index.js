const { json } = require('body-parser')
const express = require('express')
const fs = require('fs')

const app = express()

const user = {
    "user4": {
        "name": "Mohit",
        "password": "password4",
        "profession": "student",
        "id": 4
    }
}

app.get('/listUsers', (req, res) => {
    fs.readFile(__dirname + "/" + "user.json", "utf8", (err, data) => {
        if (err)
            console.log(error)
        else
            console.log(data)
        res.end(data)

    })
})

app.post('/addUser', (req, res) => {
    fs.readFile(__dirname + "/" + "user.json", "utf8", (err, data) => {
        data = JSON.parse(data);
        data["user4"] = user["user4"]
        console.log(data)
        res.end(JSON.stringify(data))
    })
})
app.get("/:id", (req, res) => {
    fs.readFile(__dirname + "/" + "user.json", "utf8", (err, data) => {
        var users = JSON.parse(data)
        var user = users["user" + req.params.id]
        console.log(user)
        res.send(JSON.stringify(user))
    })
})

app.delete("/deleteUser/:id", (req, res) => {
    fs.readFile(__dirname + "/" + "user.json", "utf8", (err, data) => {
        data = JSON.parse(data);
        delete data["user" + req.params.id]
        console.log(data);
        res.send(JSON.stringify(data))
    })
})



app.listen(8080)