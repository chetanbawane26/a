var exp=require('express');
var mysql=require('mysql2');
var app=exp();

var conn=mysql.createConnection({
     host:"localhost",
       user:"root",
       password:"root",
       database:"DAC" 
});

conn.connect(function(err){
    if(!err)
    console.log("connected to DB");
    else
    console.log("error!!!! plz check the connection");
});

app.listen(9000,function(){
    console.log("server connected on 9000 port");
});

app.get('/login',function(req,res){
    res.sendFile(__dirname+'/HTMLform.html');
});

app.get('/getname',function(req,res){
    var eid=req.query.empid;
    console.log(eid);
    conn.query('select * from emp where EMPNO='+eid,function(err,result){
        if(!err)
        {
           str="<h1>";
           str+="Welcome "+result[0].ENAME
           str+="</h1>";
           res.send(str);
        }    
    })
})