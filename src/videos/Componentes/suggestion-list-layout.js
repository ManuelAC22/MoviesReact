import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function suggestionListLayout(props) {
    return (
        <View style={style.container}>
            <Text style={style.title}>{props.title}</Text>
            {props.children}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        paddingVertical: 30,
        flex: 1,
    },
    title: {
        color: 'red',
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 8,
        fontWeight: 'bold',
    }
})

export default suggestionListLayout;