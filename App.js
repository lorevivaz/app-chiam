import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import CommunicationController from './model/CommunicationController';

export default function App() {

  const [delivertext, setDelivertext] = useState('loading...');

  useEffect(() => {
    console.log('component loaded for the first time ');

    CommunicationController.getOrder(1)
      .then((data) => {
        console.log('data loaded', data);
        setDelivertext("delivery arrived");
      })
      .catch((error) => {
        console.log('error loading data', error);
        setDelivertext('error loading data');
      });
  }, []);

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