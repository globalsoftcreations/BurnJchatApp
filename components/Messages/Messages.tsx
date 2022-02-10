import React,{useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './style';
import chatData from '../../assets/dummy-data/Chats';
const myId = 'u1';


const Message = ({message}) =>{
    
    const isMe = message.user.id === myId;
    
  return (
        <View  style={[styles.container,
             {backgroundColor: isMe ? '#3777f0' : 'lightgray', 
              marginLeft: isMe ? 'auto' : 10, 
              marginRight:isMe ? 10: 'auto'
              }]}>
            <Text style={[styles.text, {color:isMe ? 'white' : 'black'}]}>{message.content}</Text>
        </View>
  )
}

export default Message;
