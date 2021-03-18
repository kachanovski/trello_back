const auth = require("../2-features/1-auth")
const boards = require("../2-features/2-boards");
const column = require("../2-features/3-columns");
const cards = require("../2-features/4-cards");

const routes = (app) => {
    app.use('/auth', auth)
    app.use('/boards', boards)
    app.use('/column', column)
    app.use('/cards', cards)
}
module.exports = routes