
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    subcontainar:{
      flexDirection:'row',
      padding: 10,
   },
    imagecon:{
     padding: 10,
    },
    image:{
      width:50,
      height:50,
      borderRadius:50
    },
    titles:{ 
      flex: 1, 
      padding:10,
      justifyContent:'center'
    },
    topcontainer:{
      flexDirection:'row',
      justifyContent:"space-between",
    },
    titletime:{
      fontSize: 10,
    },
    titletop: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    titlebottom: {
      fontSize: 12,
      fontWeight: '200',
      marginBottom:5
    },
    badgeContainer:{
      backgroundColor:'#3872E9',
      width:17,
      height:17,
      borderRadius:50,
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      borderWidth:1,
      borderColor:'white',
      left:45,
      top:10
      
    },
    badgeText:{
      color:'white',
      fontSize:12
      
    }
  });
  

  export default styles;