import React from 'react';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
// import UserList from '../components/UserList/UserList';
// import ChatRooms from '../assets/dummy-data/ChatRooms';
import Usercompo from '../components/UserList/UserList';
import Users from '../assets/dummy-data/Users'

export default function UserListScreen() {
  return (
    <ScrollView>
       <View style={styles.container}>
          {
            Users.map((user)=>{
              return(
                <Usercompo key={user.id} item ={user}/>
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

