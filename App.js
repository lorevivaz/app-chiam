import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState  } from 'react';

export default function App() {
const [delivertext, setDelivertext] = useState('loading...');


  return (
    <View style={styles.container}>
      <Text>{delivertext}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
