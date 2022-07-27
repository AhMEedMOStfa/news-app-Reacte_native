import * as React from 'react';
import { ScrollView,View, Text,Image,TouchableOpacity,ActivityIndicator,FlatList } from 'react-native';
import { NavigationContext } from '@react-navigation/native';

export default function Card () {
    const navigation=React.useContext(NavigationContext);
    const [news,setNews]=React.useState([]);
    const [isLoading,setLoad] = React.useState(true);
    const getNews=async()=>{
        try{const res = await fetch('https://mockend.com/HosamZewain/test/posts');
        const news = await res.json();
        setNews(news);
        }catch(error){
            console.log(error);
        }finally{
            setLoad(false);
        }
    }
    React.useEffect(()=>{
        getNews()
    },[]);
        return(
            <ScrollView>
                 
                {
                    isLoading
                    ?
                    <ActivityIndicator size='large' color='red'/>
                    :
                    <FlatList
                    data={news}
                    keyExtractor={({id},index)=>id}
                    renderItem={({item})=>(
                        <TouchableOpacity onPress={()=>{navigation.navigate('details',{image:item.image,title:item.title,body:item.body})}}>
                        <View style={{flexDirection:'row',backgroundColor:'#fff',margin:10,padding:10,alignItems:'center',borderRadius:10}}>
                                <Image source={{uri:item.image}}style={{width:120,height:200,borderRadius:10}}/>
                                <View style={{margin:10,flexShrink:1}}>
                                    <Text style={{fontWeight:'bold',fontSize:22}}>{item.title}</Text>
                                    <Text style={{fontSize:18}}>{item.body.substring(0,100)+'...read more'}</Text>
                                </View>
                        </View>       
                    </TouchableOpacity>
                    )} />
                }
            </ScrollView>
            );
}
