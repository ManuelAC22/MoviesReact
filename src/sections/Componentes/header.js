import React, {Component} from 'react';
import {  View,Image,StyleSheet,SafeAreaView} from 'react-native';

function Header(props){
    return(
        <View>
            <SafeAreaView>
                <View>
                    <Image source={require('../../../assets/logo-autonoma.jpg')} style={style.logo}/>
                </View>
            </SafeAreaView>
        </View>
    )
}

const style = StyleSheet.create({
    logo:{
        width:300,
        height: 60,
        resizeMode: 'contain',
    }
})

export default Header;