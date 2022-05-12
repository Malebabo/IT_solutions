import { ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { useState } from 'react';

export default function App() {
  const [Registered, setRegistered] = useState(true);

  return (
    <View style={styles.container}>
       <ImageBackground style = {{height: 270, width: '100%',marginTop: 28}}
        source = {require('./assets/wall.jpg')}>
           <Text style = {{fontSize: 27,color:'#D4D4D4',marginTop: 70,marginLeft:30}}>Welcome</Text>
           <Text style = {{fontSize: 12,color:'#D4D4D4',marginLeft:30,marginBottom: 100}}>
             Business IT Solutions and Innovation, Inc.</Text>
              {Registered? <Login/>:<SignUp setRegistered = {setRegistered}/>}
       </ImageBackground>
      
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4D4D8',
    alignItems: 'center',
  }
});
