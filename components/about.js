import * as React from "react";
import { View,Image,Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class About extends React.Component {
    componentDidMount(){
      AsyncStorage.setItem('visit3','yes');
    }
    render(){
        return (
          <View>
            <Image source={require('../img/hady.jpg')}style={{width:'100%',height:200}}/>
                <View style={{margin:10}}>
                    <Text style={{fontWeight:'bold',fontSize:20,textAlign:'center'}}>Hello Sakka</Text>
                    <Text style={{fontSize:16}}>Learn how low-code solutions allow you to create customized applications tailored to your unique industrial IoT use cases. Download our latest ebook now.</Text>
                </View>
          </View>
        );
    }
}
