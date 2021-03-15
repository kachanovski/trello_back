const auth = require("../2-features/1-auth")
const boards = require("../2-features/2-boards");


const routes = (app) => {
    app.use('/auth', auth)
    app.use('/boards', boards)
}
module.exports = routes