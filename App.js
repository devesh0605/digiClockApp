import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment'
import KeepAwake from 'react-native-keep-awake'

const styles=StyleSheet.create({
  
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
      <View>
        <Text>{this.state.time}</Text>
        <Text>{this.state.date}</Text>
      </View>
    )
  }
}