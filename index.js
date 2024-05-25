const express = require("express");
const app = express();
const data= require('./Middleware/middleware.js')
require('dotenv').config();



app.use(express.json())
app.get('/', (req, res) => {
    console.log(req.query);
    res.status(200).json({ name: req.query.name, sirName: req.query.sirName }); // corrected sirName
});

app.post('/data',data, (req, res) => {
console.log(req.body)
res.status(200).json({name:req.body.name, sirName:req.body.sirName, age:req.body.age})
// req.send("its working")
    // res.status(200).json({ name: req.body.name, sirName: req.body.sirname }); // corrected sirName
});
app.post('/student/:name', (req, res)=>{
console.log(req.params.name)
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
