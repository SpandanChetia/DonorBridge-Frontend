const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { application } = require("express");
const csrf = require("csurf");
const graphqlHttp = require("express-graphql");

const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");

const app = express();

const csrfProtection = csrf();
app.set("view engine", "pug");
app.set("view", "views");

app.use(csrfProtection);

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver
  })
);
