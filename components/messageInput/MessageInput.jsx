import React,{useState} from 'react'
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import styles from './style'
import { FontAwesome5, Feather, MaterialCommunityIcons, AntDesign, Ionicons} from '@expo/vector-icons'; 



export default function MessageInput() {
    const[message, setMessage] =useState('');

    const pressPlus=()=>{
       
    }

    const pressSend=()=>{
        
    }

    const presHadle=()=>{
        if(message){
            pressSend()
         }
        else{
            pressPlus()
         }
    }
    return (
    <KeyboardAvoidingView 
            style={styles.root}
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            keyboardVerticalOffset={100}

            >
        
        <View style={styles.containerInput}>
            <FontAwesome5 name="smile-beam" size={24} color="black" />
            <TextInput style={styles.text} 
                placeholder='Add Message'
                value={message}
                onChangeText={(value)=>setMessage(value)}
            />

            <Feather name="camera" size={24} color="black" />
            <MaterialCommunityIcons name="microphone-outline" size={24} color="black" />
        </View> 
        <Pressable onPress={presHadle} style={styles.containerButton}> 
            {message ? <Ionicons name="send" size={24} color="white" /> : <AntDesign name="plus" size={24} color="white" />}
        </Pressable> 
    </KeyboardAvoidingView>      
    //{}
    )
  }