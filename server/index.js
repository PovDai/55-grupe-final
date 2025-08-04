import express from "express"

const app = express();

app.get('/', (req, res) => {
    return res.json({
        status: 'success',
        message:'Server is running',
    })
});

app.listen(3000, () => {
    console.log('Server running http://localhost:3000');
})