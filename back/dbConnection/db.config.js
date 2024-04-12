require('dotenv').config(); 
const { MongoClient , ObjectId } = require('mongodb')

// mongoDB credenciales
const dbURL = process.env.DB_URL;
const dbName = process.env.DB_NAME; 


const clientConnection = new MongoClient(dbURL);
const dbConnection = clientConnection.db(dbName); 
// mongoDB connection
clientConnection.connect();