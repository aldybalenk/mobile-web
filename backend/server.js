// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

const news = [
    {
        id: 1,
        title: 'Berita Pertama',
        category: 'Teknologi',
        summary: 'Ringkasan berita pertama',
        keywords: ['teknologi', 'inovasi', 'terbaru']
    },
    {
        id: 2,
        title: 'Berita Kedua',
        category: 'Olahraga',
        summary: 'Ringkasan berita kedua',
        keywords: ['olahraga', 'sepakbola', 'skor']
    },
    // Tambahkan berita lain sesuai kebutuhan
];

app.get('/api/news', (req, res) => {
    res.json(news);
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
