import React, { useState, useEffect } from 'react';
import NewsList from './NewsList';
import './App.css';

const App = () => {
  const [newsData, setNewsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(data => {
        console.log('Data fetched from API:', data);
        setNewsData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNews = newsData.filter(news => 
    news.judul_berita.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.jenis_berita.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.ringkasan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.keywords.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Daftar Berita Pemrograman Terkini</h1>
      <input
        type="text"
        placeholder="Search news..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <NewsList newsData={filteredNews} />
    </div>
  );
};

export default App;
