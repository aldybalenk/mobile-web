// mobile/NewsApp/App.js
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';

const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/news')
      .then(response => response.json())
      .then(data => setNews(data));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {news.map(item => (
          <View key={item.id} style={styles.newsItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>Kategori: {item.category}</Text>
            <Text>{item.summary}</Text>
            <Text>Keywords: {item.keywords.join(', ')}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  newsItem: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
