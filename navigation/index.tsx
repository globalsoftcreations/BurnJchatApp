/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Text, View, StyleSheet, Image, useWindowDimensions, } from 'react-native';
import { Feather, Ionicons, AntDesign, FontAwesome} from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import {useNavigation} from '@react-navigation/core'


import ChatRoomScreen from '../screens/ChatRoomScreen';
import HomeScreen from '../screens/HomeScreen'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {

  
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ headerTitle: HomeHeader }} 
      />
      <Stack.Screen 
            name="ChatRoom" 
            component={ChatRoomScreen} 
            options={{ headerTitle: ChatRoomHeader, headerBackVisible:false}} />

      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
const HomeHeader = (props) =>{
  return(
    <View style={styles.headContain}>
      <Image source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}} style={styles.headImage}/>
      <Text style={styles.headTitle}>Home</Text>
      <Feather name="camera" size={24} color="black" style={{marginHorizontal:5}} />
      <Feather name="edit-2" size={24} color="black" style={{marginHorizontal:5, padding:10}}/>
    </View>
    
  )
}

const ChatRoomHeader = (props) =>{
  const navigation = useNavigation();

  const pressBack =() =>{
    navigation.navigate("Home");
  }
  return(
    <View style={styles.chatContain}>
      <Pressable onPress={pressBack}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
     
      <Image source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}} style={styles.headImage}/>
      <Text style={styles.chatTitle}>Asanka</Text>
      <View style={styles.iconContain}>
        <FontAwesome name="video-camera" size={24} color="black" style={{marginHorizontal:5}}/>
        <Feather name="phone" size={24} color="black" style={{marginHorizontal:5}}/>
        <Ionicons name="menu-outline" size={24} color="black" style={{marginHorizontal:5}}/>
      </View>
      
    </View>
    
  )
}

const styles = StyleSheet.create(
  
  {
    headContain:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      flex: 1,
      padding:10
    },
    headImage:{
      width:30,
      height:30,
      borderRadius:50
    },
    headTitle:{
      width:'65%',
      textAlign:'center',
      fontWeight:'bold'
      // justifyContent:'center',
    },
    chatContain:{
      // backgroundColor:'red',
      flex: 1,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      padding:10
    },
    chatTitle:{
      width:'45%',
      fontWeight:'bold',
      marginLeft:5,
    },
    iconContain:{
    //  backgroundColor:'yellow',
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center',
     margin:10,
     padding:5
     
    },

  }
)
/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
