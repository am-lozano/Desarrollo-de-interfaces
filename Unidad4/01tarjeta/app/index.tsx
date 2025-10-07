    // import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';
    import { Image } from 'react-native';
    // import "../assets/images/soldado.webp"

    export default function index(){
      return(
        <View style = {styles.container}>
          <View style = {styles.card}>
            <Image style = {styles.avatar} source = {require('../assets/images/soldado.webp')}></Image>
            <Text style = {styles.name}> Fernando Galinda </Text>
          </View>
        </View>
      )
    }

    const styles = StyleSheet.create(
      {
        container: {
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto'
        },
        
        card:{
          width: 350,
          height: 200,
          borderWidth: 3,
          borderColor: '#f00',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50
        },

        name: {
          fontSize: 20,
          fontWeight: 'bold',
          color: '#000',
        },

        avatar: {
          width: 100,
          height: 100,
          borderRadius: 100,
          marginBottom: 20
      }
    }
    )