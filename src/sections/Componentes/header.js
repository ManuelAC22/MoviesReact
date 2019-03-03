import React, {Component} from 'react';
import {  View,Image,StyleSheet,SafeAreaView} from 'react-native';

function Header(props){
    return(
        <View>
            <SafeAreaView>
                <View style={style.container}>
                    <Image source={require('../../../assets/logo-autonoma.jpg')} style={style.logo}/>
                </View>
                <View style={style.right}>
                    {props.children}
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
    },
    container:{
        backgroundColor: '#ff801c',
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    right:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end'
    }
})

export default Header;