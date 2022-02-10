import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/core'

export default function ChatRoomItems({item}) {
  const user = item.users[1];
  const navigation = useNavigation();
  
  const pressHadle =() =>{
    navigation.navigate("ChatRoom");
  }
  return (
      <Pressable onPress={pressHadle} style={styles.subcontainar}>
        <View style={styles.imagecon}>
           <Image source={{uri:user.imageUri}} style={styles.image}/>
           { 
           item.newMessage ? <View style={styles.badgeContainer}>
             <Text style={styles.badgeText}>
               {item.newMessage}
             </Text>
           </View> : null
           }
           
        </View>
          <View style={styles.titles}>
              <View style={styles.topcontainer}>
                  <Text style={styles.titletop}>{user.name}</Text>
                  <Text style={styles.titletime}>11.30am</Text>
              </View>
           <Text numberOfLines={1} style={styles.titlebottom}>{item.lastMessage.content}</Text>
        </View>             
      </Pressable>       
  //{}
  )
}


