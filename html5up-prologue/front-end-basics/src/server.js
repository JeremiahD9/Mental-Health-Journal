import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});