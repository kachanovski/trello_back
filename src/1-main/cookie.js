const cors = require("cors")
const cookieParser = require("cookie-parser")

const cookie = (app) => {

    const corsOptions = {
        credentials: true,
        origin: (origin, callback) => {
        callback(null, true);
    }
}

    app.use(cors(corsOptions));
    app.use(cookieParser());
}

module.exports = cookie

