const mongoose = require('mongoose')

const PATH = process.env.MONGODB_URL

mongoose.connect(PATH)
    .then(() => console.log('todo bien'))
    .catch(() => console.log('algo salio mal'))