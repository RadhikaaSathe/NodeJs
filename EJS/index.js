const express=require("express");
const app = express();
const port=3000;

app.listen(port,()=>{
    console.log("Server listening");

})
app.get('/',(req,res)=>{
    res.send("I am root");
})
app.get('/home',(req,res)=>{
    res.render("home.ejs");
})

app.get('/dice',(req,res)=>{
    let diceval=Math.floor(Math.random()*6)+1;
    res.render("dice.ejs",{diceval});
});

app.get("/ig/:username",(req,res)=>{
    let{username}=req.params;
    res.render("ig.ejs",{username});
})