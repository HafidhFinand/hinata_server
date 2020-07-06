require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const router = require("./router")

if (process.env.NODE_ENV == "test") {
  mongoose.connect(
    `mongodb+srv://elixir-fox:2291403Xx!@hinata.zgsl0.gcp.mongodb.net/adeps?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
} else {
  mongoose.connect(
    `mongodb+srv://elixir-fox:2291403Xx!@hinata.zgsl0.gcp.mongodb.net/adeps?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
}

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)

module.exports = app
