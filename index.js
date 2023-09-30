var express = require('express')

const SERVER_PORT = 8089
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//Lab Exercise 4
//http://localhost:8089/hello
app.get("/hello", (req, res) => {
    res.send("Hello Express JS");
})

//http://localhost:8089/user
app.get("/user", (req, res) => {
    const { firstname, lastname } = req.query;
    const user = {
      firstname,
      lastname,
    };
    res.json(user);
  });

//http://localhost:8089/user/Pritesh/Patel
app.post("/user/:firstname/:lastname", (req, res) => {
    const { firstname, lastname } = req.params;
    const user = {
      firstname,
      lastname,
    };
    res.json(user);
});


//Lab IN-Class Code
//http://localhost:8089/
app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/plan")
    res.status(201).send("Welcome to Express Web Server")
    
    //res.send("<h1>Welcome to Express Web Server</h1>")
    //res.end("<h1>Welcome to Express Web Server</h1>")
})

//http://localhost:8089/student
app.get("/student", (req, res) => {
    const stud = {
        sid: 1,
        snm: "Kaarish Parameswaran",
        method: "GET"
    }

    res.send(stud)
})

//http://localhost:8089/student
app.post("/student", (req, res) => {
    const stud = {
        sid: 1,
        snm: "Kaarish Parameswaran",
        method: "POST",
        header: req.headers
    }

    //res.send(stud)
    res.json(stud)

})

//http://localhost:8089/faculty
app.get("/faculty", (req, res) => {
    res.send("Hello Faculty")
})

//PATH Parameter
//http://localhost:8089/employee/king/kaarish
app.get("/employee/:fname/:lname", (req, res) => {
    const data = req.params
    let fnm = req.params.fname
    let lnm = req.params.fname.lname

    //let city = req.params.city
    res.send(data)
})

//Query parameter
//http://localhost:8089/employee?fnm=kaarish&lnm=parameswaran
app.get("/employee", (req, res) => {
    const data = req.query
    if(data.id == undefined){
        res.send("Required id as a query param")
    }else{
        res.send(data)
    }
})

//Accept data as a body
//http://localhost:8089/hotels
app.post("/hotels", (req, res) => {
    const data = req.body
    res.send(data)
})





app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})

