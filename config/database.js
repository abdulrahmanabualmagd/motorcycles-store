/*
    Choosing which database are going to be used 
    Routers => Controllers => Services => [This File] => Models Index(Database Access)
*/

require("dotenv").config();
const path = require("path");

const identityPath = path.join(__dirname, `../models/${process.env.IDENTITY_DATABASE}/index`);
const applicationPath = path.join(__dirname, `../models/${process.env.APPLICATION_DATABASE}/index`);

const dbIdentity = require(identityPath)();

const dbApplication = require(applicationPath)();

module.exports = {
    dbIdentity,
    dbApplication,
};
