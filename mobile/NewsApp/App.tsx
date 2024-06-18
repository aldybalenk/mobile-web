import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
return (
<View style={styles.container}>
<WebView source={{ uri: 'http:// 192.168.1.6:3000' }} style={styles.webview} />
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
},
webview: {
flex: 1,
},
});

export default App;