const auth = require("../2-features/1-auth")
const boards = require("../2-features/2-board/1-boards");
const column = require("../2-features/2-board/2-columns");
const cards = require("../2-features/2-board/3-cards");
const team = require("../2-features/3-team");

const routes = (app) => {
    app.use('/auth', auth)
    app.use('/boards', boards)
    app.use('/column', column)
    app.use('/cards', cards)
    app.use('/team', team)
}
module.exports = routes