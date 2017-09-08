console.log ("Hello World!")
const express= require("express")

const app = express()
// console.log(app)
app.get("/", function(request, response){
console.log("in response")
response.send("Hi Mom!!! :)")
})

app.listen(9001, function(){
  console.log("Hi Mom!")
})
