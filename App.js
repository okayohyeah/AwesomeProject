import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', color: '#fffdee'}}>You are not ugly.</Text>
        <Text style={{color: '#e3a3a3'}}>I am serious.</Text>
        <Text style={{fontWeight: 'bold', color: '#93dbd0'}}>Do not be sad.</Text>
        <Text style={{color: '#eb8c00'}}>Smile</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#591647',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
