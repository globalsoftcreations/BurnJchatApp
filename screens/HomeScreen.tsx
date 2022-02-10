import React from 'react';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import ChatRoomItems from '../components/ChatRoomItems/ChatRoomItems';
// import ChatRooms from '../assets/dummy-data/ChatRooms';
import ChatRooms from '../assets/dummy-data/ChatRooms'

export default function TabOneScreen() {
  return (
    <ScrollView>
       <View style={styles.container}>
         {/* <FlatList 
          data={ChatRooms}
          renderItem={({items}) => <ChatRoomItems item ={items}/>}
          showsHorizontalScrollIndicator={false}
         /> */}
          {
            ChatRooms.map((chat)=>{
              return(
                <ChatRoomItems key={chat.id} item ={chat}/>
                ); 
              })
          }
      </View>
    </ScrollView>
   
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%'
  },
});

