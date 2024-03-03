const sv = require('./app')

const port = sv.get('PORT')

require('./database/database')

sv.listen(sv.get('PORT'), () => {

    console.log("Server Online", port)

})