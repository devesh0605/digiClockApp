import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment'
import KeepAwake from 'react-native-keep-awake'

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000',
    justifyContent:'center',
    alignItems:'center',

  },
  timeText:{
    color: 'white',
    fontSize:60,
  },
  dateText:{
    color: 'white',
    fontSize:40,
  }

})
export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      time:moment().format('LTS'),
      date:moment().format('LL')
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.timeText}>{this.state.time}</Text>
        <Text style={styles.dateText}>{this.state.date}</Text>
      </View>
    )
  }
}