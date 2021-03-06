require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const Player = require('./models/players')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

app.get('/players', async (req, res) => {
    const data = await Player.find({})
    res.send(data)
})

app.post('/players', async (req, res) => {
    const body = req.body
    const newPlayer = new Player({
        name: body.name,
        club: body.club,
        important: body.important
    })
    const saved = await newPlayer.save()
    console.log(saved)
    res.send(saved)
})

app.delete('/players/:id', async (req, res) => {
    await Player.findByIdAndRemove(req.params.id)
    res.status(204).end()
})

app.put('/players/:id', async (req, res) => {
    const body = req.body
    const newPlayer = {
        name: body.name,
        club: body.club,
        important: body.important
    }
    const data = await Player.findByIdAndUpdate(req.params.id, newPlayer, {new: true})
    res.send(data)
})

app.patch('/players/:id', async (req, res) => {
    const body = req.body
    const newPlayer = {...body, important: !body.important}
    const data = await Player.findByIdAndUpdate(req.params.id, newPlayer, {new: true})
    res.send(data)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
})