import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/core'

export default function UserList({item}) {
  // const user = item.users[1];
  const navigation = useNavigation();
  
  const pressHadle =() =>{
    navigation.navigate("ChatRoom");
  }
  return (
      <Pressable onPress={pressHadle} style={styles.subcontainar}>
        <View style={styles.imagecon}>
           <Image source={{uri:item.imageUri}} style={styles.image}/>
           
        </View>
          <View style={styles.titles}>
              <View style={styles.topcontainer}>
                  <Text style={styles.titletop}>{item.name}</Text>
              </View>
        </View>             
      </Pressable>       
  //{}
  )
}


