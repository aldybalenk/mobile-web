import React from 'react';

const NewsItem = ({ title, category, summary, keywords }) => {
  return (
    <div className="news-item">
      <h2>{title}</h2>
      <p><strong>Kategori:</strong> {category}</p>
      <p>{summary}</p>
      <p><strong>Keywords:</strong> {keywords.join(', ')}</p>
    </div>
  );
};

export default NewsItem;
