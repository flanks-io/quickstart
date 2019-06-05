const express = require('express');
const flanks = require('flanks');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());
let user_token;


app.post('/createUser', (req, res) => {
    console.log('creating user');
    const formData = req.body;
    if (formData) {
        flanks.createUser({
            user: formData.username,
            password: formData.password,
            bank: formData.bank,
        }).then(r => res.json(r.data))
        .catch(err => res.status(err.response.status).json(err.response.data));
    }
});

app.post('/pullData', (req, res) => {
    if (!user_token) {
        if (req.body && req.body.user_token) {
            user_token = req.body.user_token;
        } else {
            res.status(401).json('Unauthorized');
        }
    }
    
    flanks.getAccountData({ user_token })
        .then(r => res.json(r.data))
        .catch(err => res.status(err.response.status).json(err.response.data));
});


const server = app.listen(process.env.PORT || 3000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server listening at http://${host}:${port}`);
});