import * as React from 'react';
import { View,Image,ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Splash extends React.Component {
    render(){

        return(
            <View style={{backgroundColor:'black',flex:1,justifyContent:'center',alignItems:'center' }} >
                <Image source={require('../img/logo.png')}/>
                <ActivityIndicator size='large' color='white' />
                {this.navigateHome()}
            </View>       
            );
    }
       
     navigateHome(){
        AsyncStorage.getItem('visit3').then((value)=>{
            if(value){
                setTimeout(()=>{this.props.navigation.navigate('news')},1000);
            }
            else
            {
                setTimeout(()=>{this.props.navigation.navigate('about')},1000);
            }
        })
    }
}
