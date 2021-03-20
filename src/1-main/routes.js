const auth = require("../2-features/1-auth")
const boards = require("../2-features/2-board/1-boards");
const column = require("../2-features/2-board/2-columns");
const cards = require("../2-features/2-board/3-cards");
const team = require("../2-features/3-team");
const isAuth = require("./1-helpers/isAuth");

const routes = (app) => {
    app.use('/auth', auth)
    app.use('/boards', isAuth(boards))
    app.use('/column', isAuth(column))
    app.use('/cards', isAuth(cards))
    app.use('/team', isAuth(team))
}
module.exports = routes