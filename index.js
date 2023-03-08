const express = require('express');
const app = express();
const cors = require('cors');


    const lang = [
    {
        id: 1,
        name : "JS"
    },
    {
        id: 2,
        name : "python"
    },
    {
        id: 3,
        name:"PHP"
    }
];

app.use(cors({
    origin: ["https://codewithsudeep.com","https://www.google.com"]
}));


app.get('/lang',cors(), (req, res) =>{
    res.send(lang);
});
app.listen(5000);
console.log('listening on port 5000');