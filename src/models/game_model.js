const { Schema, model } = require('mongoose')

const GameSchema = new Schema({

    name: {

        type: String,
        required: true

    },

    year: {

        type: Date,
        required: true

    },

    developmentTeam: {

        type: String

    },

    sales: {

        type: Number,
        required: true

    },

    description: {

        type: String,
        required: true

    },

    console: {

        type: String,
        required: true

    },

})

module.exports = model('Game', GameSchema)