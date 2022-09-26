const express = require("express")


const app = express()

app.get('/', (_, response) => {
  return response.status(200).json({
    message: "I'm working"
  })
})

app.listen(3000)