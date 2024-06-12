// frontend/src/App.js
import React, { useEffect, useState } from 'react';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/news')
      .then(response => response.json())
      .then(data => setNews(data));
  }, []);

  return (
    <div className="App">
      <h1>Daftar Berita</h1>
      <ul>
        {news.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>Kategori: {item.category}</p>
            <p>{item.summary}</p>
            <p>Keywords: {item.keywords.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
