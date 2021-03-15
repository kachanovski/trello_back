const USER_NAME = process.env.MONGO_DB_USER_NAME || "trello_clone";
const PASSWORD = process.env.MONGO_DB_USER_PASSWORD || "trello_password";
const MONGO_DB_URL = process.env.MONGO_DB_URL || "cluster0.kbyeg.mongodb.net/myFirstDatabase"; // bd for tests

const MongoDBUris = `mongodb+srv://${USER_NAME}:${PASSWORD}@${MONGO_DB_URL}?retryWrites=true&w=majority`;
const PORT = 5000;
exports.PORT = PORT
exports.MongoDBUris = MongoDBUris