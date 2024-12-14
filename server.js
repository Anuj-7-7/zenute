import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __dirname=dirname(fileURLToPath(import.meta.url));

// Set up views and static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


// Define routes for each section
app.get('/', (req, res) => {
    res.render('index'); // Renders index.ejs
});

app.get('/aboutus', (req, res) => {
    res.render('aboutus'); // Renders aboutus.ejs
});

app.get('/grasssoln', (req, res) => {
    res.render('grasssoln'); // Renders grasssoln.ejs
});

app.get('/brandt', (req, res) => {
    res.render('brandt'); // Renders brandt.ejs
});

app.get('/allet', (req, res) => {
    res.render('allet'); // Renders allett.ejs
});

app.get('/gkb', (req, res) => {
    res.render('gkb'); // Renders gkb.ejs
});

app.get('/baroness', (req, res) => {
    res.render('baroness'); // Renders baroness.ejs
});

app.get('/rentalservice', (req, res) => {
    res.render('rentalservice'); // Renders rentalservice.ejs
});

app.get('/sportfielmaintainance', (req, res) => {
    res.render('sportfielmaintainance'); // Renders sportfieldmaintainance.ejs
});

app.get('/agronomy', (req, res) => {
    res.render('agronomy'); // Renders agronomy.ejs
});

app.get('/equipmentmaintainance', (req, res) => {
    res.render('equipmentmaintainance'); // Renders equipmentmaintainance.ejs
});

app.get('/mainblog', (req, res) => {
    res.render('mainblog'); // Renders mainblog.ejs
});

app.get('/contact', (req, res) => {
    res.render('contact'); // Renders contact.ejs
});
app.get("/blogone",(req,res)=>{
    res.render('blogone');
})
app.get("/blogtwo",(req,res)=>{
    res.render('blogtwo');
})
app.get("/blogthree",(req,res)=>{
    res.render('blogthree');
})


app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
