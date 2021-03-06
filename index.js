const express = require('express')
const app = express()



const middleware = (req, res, next) => {
    const daterequest = new Date()
    let day = daterequest.getDay();
    let hour = daterequest.getHours();
    if (day > 0 && day < 5 && hour <= 17 && hour >= 9)
        return next();
    else res.send('<h1>we are closed now</h1>');

}


app.use(middleware);
const port = 5500;


app.get("/(#home)?", (req, res) => {
    res.sendFile(__dirname + "/public/home.html")
})

app.get("/services", (req, res) => {
    res.sendFile(__dirname + "/public/services.html")
})

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact.html")
})

app.get("/styleme.css", (req, res) => {
    res.sendFile(__dirname + "/public/styleme.css")
})


app.listen(port, () => {
    console.log("server is running on port " + port)

})
