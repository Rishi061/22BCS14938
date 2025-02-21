const express = require('express');
const app = express();
app.use(express.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];
    const numbers = data.filter(x => !isNaN(x));
    const alphabets = data.filter(x => /^[a-zA-Z]$/.test(x));
    const highestAlphabet = alphabets.length ? [alphabets.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()))[0]] : [];

    const response = {
        "is_success": true,
        "user_id": "22BCS14938",  
        "email": "22BCS14938@cuchd.in",
        "roll_number": "22BCS14938",
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_alphabet": highestAlphabet
    };

    res.json(response);
});

app.get('/bfhl', (req, res) => {
    res.json({
        "operation_code": 1
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
