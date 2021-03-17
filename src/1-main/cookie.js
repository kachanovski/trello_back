const cors = require("cors")
const cookieParser = require("cookie-parser")

const cookie = (app) => {

    // const whitelist = ['http://localhost:3000', 'http://example2.com'];
    const corsOptions = {
        credentials: true,
        origin: (origin, callback) => {
        // if(whitelist.includes(origin || ""))
        //     return callback(null, true)
        //
        // callback(new Error('Not allowed by CORS'));
        console.log("origin: ", origin);
        callback(null, true); // everyone is allowed
    }
}

    app.use(cors(corsOptions));
    app.use(cookieParser());
}

module.exports = cookie

