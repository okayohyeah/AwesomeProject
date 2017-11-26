import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://okayohyeah.files.wordpress.com/2015/06/etsy-gache-rushrose-001.jpg'
    }; 
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', color: '#fffdee'}}>You are not ugly.</Text>
        <Text style={{color: '#e3a3a3'}}>I am serious.</Text>
        <Text style={{fontWeight: 'bold', color: '#93dbd0'}}>Do not be sad.</Text>
        <Text style={{color: '#eb8c00'}}>Smile!{'\n'}</Text>
        <Text style={{color: '#fffdee' }}>Just remember this.</Text> 
        <Text style={{color: '#93dbd0'}}>You will be happy!{'\n'}</Text> 
         <Image source={pic} style={{width: 255, height: 300}}/>      
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
