import express from 'express';
import {createClient} from '@supabase/supabase-js'
import morgan from 'morgan'
import bodyParser from "body-parser";
import cors from 'cors';

const SUPAURL = "https://kzwkpqllpzngbcsufydb.supabase.co";
const SUPAKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6d2twcWxscHpuZ2Jjc3VmeWRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNDMyMTAsImV4cCI6MjA2NDYxOTIxMH0.gKRs8R1ZAfm1mw4_luhNnw8rnFe8YUP7Dvj9inFYb8E";
const supabase = createClient(SUPAURL, SUPAKEY);

const app = express();

// const corsOption = {
//     origin: '*',
//     methods: [ 'GET', 'POST', ],
//     allowedHeaders: [ 'Content-Type', ],
// };

// using morgan for logs
app.use(morgan('combined'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({
  origin: ['http://localhost:3001', 'http://localhost:3000'],
}));

app.post('/api/login', async (req, res) => {
    console.log('login', req.body);
    const { error } = await supabase.auth.signInWithPassword(req.body);
    if (error) res.send({ success: false });
    else res.send({ success: true });
});

app.get('/get-loggedinuser', async (req, res) => {
    const { data } = await supabase.auth.getUser();
    if (data.user && data.user.id) {
        if (data.user && data.user.id) {
            const response = await supabase
            .from('users')
            .select()
            .match({ guid: data.user.id, isActive: true })
            .single()            
            res.send({ success: true, user: response.data });
          } else res.send({ success: false });
    }
    else res.send({ success: false });
});

app.get('/api/users', async (req, res) => {
    console.log("supabase", supabase)
    const response = await supabase
    .from('users')
    .select()
    console.log("response", response)
    res.send({ success: true, users: response.data });
});

app.post('/api/create', async (req, res) => {
    const { statusText} = await supabase
    .from('users')
    .insert(req.body)
    res.send({ success: true, user: statusText === "Created" && req.body });
});

app.get('/', (req, res) => {
    res.send("Hello I am working my friend Supabase <3");
});

app.get('*', (req, res) => {
    res.send("Hello again I am working my friend to the moon and behind <3");
});

app.listen(3001, () => {
    console.log(`> Ready on http://localhost:3001`);
});