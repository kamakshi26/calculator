const express=require("express");
const bodyParser=require("body-parser");
const app=express();
/*app.get('/',function(req,res)
{
  res.send("hey there")
});*/
app.use(bodyParser.urlencoded({extended: true}));
app.get("/bmicalculator",function(req,res)
{
  res.sendFile(__dirname + "/bmicalculator.html");
});
app.post("/bmicalculator",function(req,res)
{
  console.log(req.body);
  var w=Number(req.body.weight);
  var h=Number(req.body.height);
   var val=w/(h*h);

   res.send("your bmi is "+val);
});
app.get('/',function(req,res)
{
  res.sendFile(__dirname + "/index.html");
});
app.post('/',function(req,res)
{
  console.log(req.body);
  var num1=Number(req.body.firstnum);
  var num2=Number(req.body.secondnum);
  var value=num1+num2;
  res.send("calculated value is "+ value );
});

app.listen(3000,function()
{
  console.log("server started running")
});
