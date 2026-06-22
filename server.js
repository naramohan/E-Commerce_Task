const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));


// REGISTER

app.post("/register",(req,res)=>{

    const {name,email,password} = req.body;

    db.query(
        "INSERT INTO users(name,email,password) VALUES(?,?,?)",
        [name,email,password],
        (err,result)=>{

            if(err){
                return res.status(500).send(err);
            }

            res.send("User Registered");
        }
    );
});


// LOGIN

app.post("/login",(req,res)=>{

    const {email,password} = req.body;

    db.query(
        "SELECT * FROM users WHERE email=? AND password=?",
        [email,password],
        (err,result)=>{

            if(err){
                return res.status(500).send(err);
            }

            if(result.length>0){
                res.json(result[0]);
            }else{
                res.status(401).send("Invalid Credentials");
            }
        }
    );
});


// GET PRODUCTS

app.get("/products",(req,res)=>{

    db.query(
        "SELECT * FROM products",
        (err,result)=>{

            if(err){
                return res.status(500).send(err);
            }

            res.json(result);
        }
    );
});


// PLACE ORDER

app.post("/orders",(req,res)=>{

    const {
        user_id,
        product_name,
        price
    } = req.body;

    db.query(
        "INSERT INTO orders(user_id,product_name,price) VALUES(?,?,?)",
        [
            user_id,
            product_name,
            price
        ],
        (err,result)=>{

            if(err){
                return res.status(500).send(err);
            }

            res.send("Order Placed Successfully");
        }
    );
});


// VIEW ORDERS

app.get("/orders",(req,res)=>{

    db.query(
        "SELECT * FROM orders",
        (err,result)=>{

            if(err){
                return res.status(500).send(err);
            }

            res.json(result);
        }
    );
});



app.listen(5000,()=>{
    console.log("Server Running On Port 5000");
});
