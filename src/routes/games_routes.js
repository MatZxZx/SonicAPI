const { Router } = require('express')
const Game = require('../models/game_model')

const router = Router()

router.get('/', async(request, response) => {

    const games = await Game.find()

    return response.send(games)

})

router.get('/:name', async(request, response) => {

    const game = await Game.findOne({name: request.params.name})

    return response.send(game)

})

router.post('/', async(request, response) => {

    const newGame = new Game(request.body)
    const gameSaved = await newGame.save()
    return response.send(gameSaved)

})

router.delete('/:name', async(request, response) => {

    return response.send("HELLO WORLD!")

})

router.put('/:name', async(request, response) => {

    return response.send("HELLO WORLD!")

})

module.exports = router