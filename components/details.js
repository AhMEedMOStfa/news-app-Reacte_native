import * as React from "react";
import { View,Image,Text } from "react-native";
import MyHeader from "./MyHeader";
export default class Details extends React.Component {
  render(){
    return (
      <View>
        <MyHeader/>
                <Image source={{uri:this.props.route.params.image}}style={{width:'100%',height:200}}/>
                <View style={{margin:10}}>
                    <Text style={{fontWeight:'bold',fontSize:20,textAlign:'center'}}>{this.props.route.params.title}</Text>
                    <Text style={{fontSize:16}}>{this.props.route.params.body}</Text>
                </View>
      </View>  
    );

  }
}
