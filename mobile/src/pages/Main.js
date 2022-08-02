import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


function Main() {
    return (
        <View style={styles.container}>
          <MapView style={styles.map} />
        </View>
      );
}

export default Main;

