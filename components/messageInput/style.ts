import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginBottom: 10,
      padding: 10,
    },
    containerButton:{
      backgroundColor:'#3777f0',
      height:40,
      width:40,
      alignItems:'center',
      borderRadius:50,
      justifyContent:'center'

    },
    containerInput:{
      // width:'90%',
      flexDirection:'row',
      alignItems:'center',
      height:40,
      borderRadius: 20,
      backgroundColor:'#f2f2f2',
      padding: 5,
      justifyContent:'space-between',
      flex:1
    },
    text:{
      color:'black',
      fontWeight:'400',
      flex:1,
      marginHorizontal:5
    },
    buttonText:{
      fontSize:30,
      color:'white',
      alignItems:'center'
    },
  });
  

export default styles;