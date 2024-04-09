require('dotenv').config(); 
const { MongoClient , ObjectId } = require('mongodb')

const express  = require("express");

const server = express(); 
server.use(express.json());

// mongoDB credenciales