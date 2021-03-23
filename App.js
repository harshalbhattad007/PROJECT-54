import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';



export default class App extends Component {
  render() {
    return (
      <View>
       <Sound1/>
       <Sound2/>
       <Sound3/>
       <Sound4/>
       <Sound5/>
    
      </View>
    );
  }
}


class Sound1 extends Component{
    displayAlert (){
        alert("hi");
   }

   render() {
    return (
      <View style = {{ marginTop:10, width:100,marginLeft:150}}>
          <Button color = "red" title = "sound 1" onPress ={this.displayAlert}/>
      </View>
    );
  }
}
class Sound2 extends Component{
  displayB (){
    alert ("hello")
  }
    render(){
      return(
        <View style = {{ marginTop:10 , width: 100 , marginLeft:150}}>
          <Button color = "blue" title = "sound 2 " onPress = {this.displayB}/>
        
        </View>
      )
    }
}
class Sound3 extends Component{
    displayC (){
        alert("Good Evening");
   }

   render() {
    return (
      <View style = {{ marginTop:10, width:100,marginLeft:150}}>
          <Button color = "yellow" title = "sound 3" onPress ={this.displayC}/>
      </View>
    );
  }
}
class Sound4 extends Component{
    displayD (){
        alert("Good Day");
   }

   render() {
    return (
      <View style = {{ marginTop:10, width:100,marginLeft:150}}>
          <Button color = "orange" title = "sound 4" onPress ={this.displayD}/>
      </View>
    );
  }
}
class Sound5 extends Component{
    displayE (){
        alert("Good Morning");
   }

   render() {
    return (
      <View style = {{ marginTop:10, width:100,marginLeft:150}}>
          <Button color = "purple" title = "sound 5" onPress ={this.displayE}/>
      </View>
    );
  }
}
