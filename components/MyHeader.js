import * as React from 'react';
import { View, Text,Image,SafeAreaView,TouchableOpacity } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function MyHeader() {
  const navigation = React.useContext(NavigationContext);
    return(
      <SafeAreaView>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'red',paddingVertical:30,paddingHorizontal:10}}>
          <View>
                <Icon.Button
                name="arrow-left"
                backgroundColor='transparent'
                onPress={()=>{navigation.navigate('news')}}>
                </Icon.Button>
          </View>
                <Text style={{fontSize:25,marginLeft:10,fontWeight:'bold',color:'black',color:'white'}}>Details News</Text>
        </View>       
      </SafeAreaView>
        );
}
