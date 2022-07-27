import * as React from 'react';
import { View,TouchableOpacity,Image,Linking } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
export default function Footer() {
   const navigation=React.useContext(NavigationContext);
        return(
                <View style={{flexDirection:'row',backgroundColor:'black',padding:10,justifyContent:'space-evenly'}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('about')}} >
                        <Image source={require('../img/info.png')} style={{width:40,height:40}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Linking.openURL('whatsapp://send?text=hello&phone=+201022850465')}}>
                        <Image source={require('../img/whats.png')}style={{width:40,height:40}}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../img/home.png')}style={{width:40,height:40}}/>
                    </TouchableOpacity>
                </View>
      
           
            );
}
