const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/openapi.json')
const routes = require("./src/1-main/routes");
const {PORT} = require('./src/1-main/config')
const {MongoDBUris} = require("./src/1-main/config");



const app = express();

const port = process.env.PORT || PORT

routes(app)

app.use(bodyParser.json({limit: "7mb"}));
app.use(bodyParser.urlencoded({limit: "7mb", extended: false}));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get('/', (req,res)=> {
    res.send('Hello world')
})

const start = async () => {
    try {
        await mongoose.connect(MongoDBUris, {
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