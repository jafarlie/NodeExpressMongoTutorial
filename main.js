const express = require('express');
const app = express();
app.use(express.json());
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/Public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));