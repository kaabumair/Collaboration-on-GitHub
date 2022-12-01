const express = require('express') //require which dependency
const { deflate } = require('zlib')
const app = express() //app using express function
const port = 3000 //what port to use

const path = require('path')
const res = require('express/lib/response')
const prompt = require("prompt");
app.use(express.static("html"));

app.get('/', (req, res) => { //request = req, and res = response
  res.sendFile(path.join(__dirname, 'html/index.html')) //send request.
})

app.get('/users', (req, res) => { //request = req, and res = response
  res.send('Hello Umer! Im WORKING fine') //send request.
})

app.get('/sum',function(req,res){
    var a=Number(req.query.first);
    var b=Number(req.query.sec);
    var c;
    c=a+b;
    response = {
        result: c  
    };
    console.log(response);
    res.end(JSON.stringify(response));
}
);

app.get('/sub',function(req,res){
    var a=Number(req.query.first);
    var b=Number(req.query.sec);
    var c;
    c=a-b;
    response = {
        result: c  
    };
    console.log(response);
    res.end(JSON.stringify(response));
}
);

app.get('/mul',function(req,res){
    var a=Number(req.query.first);
    var b=Number(req.query.sec);
    var c;
    c=a*b;
    response = {
        result: c  
    };
    console.log(response);
    res.end(JSON.stringify(response));
}
);

app.get('/div',function(req,res){
    var a=Number(req.query.first);
    var b=Number(req.query.sec);
    var c;
    c=a/b;
    response = {
        result: c  
    };
    console.log(response);
    res.end(JSON.stringify(response));
}
);

app.get('/area',function(req,res){
    var a=Number(req.query.first);
    var b=Number(req.query.sec);
    var c;
    c=0.5*a*b;
    response = {
        result: c  
    };
    console.log(response);
    res.end("the area of rectangle is" + JSON.stringify(response));
}
);

app.get('/evenorodd',function(req,res){
    var a=Number(req.query.first);
    if(a % 2 == 0) {
        let c = "the number is even"
        response = {
            result: c
        }
        console.log("The number is even.");
        res.end(JSON.stringify(response));
        }

// if the number is odd
      else {
        let d = "the number is odd"
        response = {
            result: d
        }
        console.log("The number is odd.");
        res.end(JSON.stringify(response));
        } 
        });



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) //check which port the app is using
}) // to run this type localhost:3000
