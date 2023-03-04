const express= require("express");
const bodyParser=require("body-parser");
const CONSTANT = require("./config/constant");
const cors = require('cors')
const loginRouter=require('./routes/loginR');
const registerRouter=require('./routes/registerR');




const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors())

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/Front_end/registerF.html")
});
app.get('/login',(req,res)=>{
    res.sendFile(__dirname + "/Front_end/loginF.html")
});

app.use('/', loginRouter);
app.use('/', registerRouter);


app.listen(CONSTANT.PORT,()=>{
    console.log(`Server is listening at http://localhost:${CONSTANT.PORT}`)
})