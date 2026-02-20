import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Unfortunately listening on port https://localhost:${port}`);
})
