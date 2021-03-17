const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/openapi.json')
const routes = require("./src/1-main/routes");
const {config} = require('./src/1-main/config')

const app = express();

const port = process.env.PORT || config.PORT



// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authoriztion");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

routes(app)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


const start = async () => {
    try {
        await mongoose.connect(config.MongoDBUris, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        })
        app.listen(port, () =>
            console.log(`Example app listening on port ${port}!`),
        );
    } catch (e) {
        console.log(e)
    }
}

start()