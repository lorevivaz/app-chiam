import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState  } from 'react';

export default function App() {
const [delivertext, setDelivertext] = useState('loading...');

useEffect(() => {
  console.log('component loaded for the first time ');
}, []); // la dipendenza vuota [] assicura che il codice venga eseguito solo una volta



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
