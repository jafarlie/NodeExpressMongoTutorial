const express = require('express');
const app = express();
app.use(express.json());

app.get('/index', (req, res) => {
    res.send("hello");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));