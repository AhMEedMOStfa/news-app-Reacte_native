import * as React from 'react';
import { View, Text,Image,SafeAreaView,TouchableOpacity } from 'react-native';
import { NavigationContext } from '@react-navigation/native';

export default function Header() {
  const navigation = React.useContext(NavigationContext);
    return(
      <SafeAreaView>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'red',padding:20}}>
          <View style={{flexDirection:'row'}}>
                <Image source={require('../img/home.png')}style={{width:50,height:50}}/>
                <Text style={{fontSize:25,marginLeft:10,fontWeight:'bold',color:'black',marginTop:5,color:'white'}}>Home News</Text>
          </View>
          <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('myweb')}}>
             <Image source={require('../img/google.png')}style={{width:50,height:50}} />
            </TouchableOpacity>
          </View>
        </View>       
      </SafeAreaView>
        );
}
