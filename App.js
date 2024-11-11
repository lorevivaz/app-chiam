import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import CommunicationController from './model/CommunicationController';

export default function App() {

  const [delivertext, setDelivertext] = useState('loading...');

  useEffect(() => {
    console.log('component loaded for the first time ');

    CommunicationController.getOrder(2)
      .then((data) => {

        let status = data.status;

        console.log('status', status);


if (status === "COMPLETED") {
  setDelivertext("book was delivered");

} else {

  CommunicationController.getObjectDeliveryDate(2).then((data) => {
    
    
    let deliveryDate = data.date;
    console.log('deliveryDate', deliveryDate);

    const date = new Date(deliveryDate);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // i mesi sono indicizzato da 0 a 11
    const year = date.getUTCFullYear();


    setDelivertext("book will be delivered on " + day + "/" + month + "/" + year);


  }).catch((error) => {
    console.log('error loading data', error);
    setDelivertext('error loading data');
  });

  
}     
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