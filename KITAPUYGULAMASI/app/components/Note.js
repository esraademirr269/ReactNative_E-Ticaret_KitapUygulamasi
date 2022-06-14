
import React from 'react';
import{
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Note extends React.Component{
  render (){
    return(
      <View key={this.props.keyval} style={styles.node}>
          <Text style={styles.noteText}>{this.props.val.date}</Text>
          <Text style={styles.noteText}>{this.props.val.note}</Text>
            <TouchableOpacity onPress={this.props.deleteMethod} 
            style={styles.noteDelete}>
            <Text  style={{ width:37 , height:37 }} ><Image source={require('./çöpkovasi.png')} style={{ width:27 , height:27 }} /></Text>
            </TouchableOpacity>
      </View>
    );
  }S
}


const styles=StyleSheet.create({
    node:{
        position:'relative',
        padding:20,
        paddingRight:100,
        borderBottomWidth:2,
        borderBottomColor:'#ededed',
    },
    noteText:{
        paddingLeft:20,
        borderLeftWidth:10,
        borderLeftColor:'#E91E63',
    },
    noteDelete:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
       // backgroundColor:'#2980b9',
        padding:10,
        top:10,
        bottom:10,
        right:10,
    }
    
});

