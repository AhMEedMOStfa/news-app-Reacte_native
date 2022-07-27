import * as React from 'react';
import { View,ScrollView} from 'react-native';
import Footer from './footer';
import Header from './header';
import Card from './card';
export default function News() {
    return(
        <View style={{backgroundColor:'#eee',flex:1}}>
            <Header />
            <Card/>
                <Footer />
        </View>
        );
}