import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import ChatRoomItems from '../components/ChatRoomItems/ChatRoomItems';
import ChatRooms from '../assets/dummy-data/ChatRooms';
import Messages from '../components/Messages/Messages';
import chatData from '../assets/dummy-data/Chats';
import MessageInput from '../components/messageInput/MessageInput'

export default function ChatRoomScreen() {
  return (
   
      <SafeAreaView style={styles.container}>
            <FlatList 
                data= {chatData.messages}
                renderItem= {({item}) => <Messages message = {item}/> }
                inverted
            />
            <MessageInput/>
      </SafeAreaView>
   
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex:1
  },
});