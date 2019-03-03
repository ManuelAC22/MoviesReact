import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


function Suggestion(props) {
    <View style={styles.container}>
        <View>
            <View style={styles.genero}>
                <Text style={styles.generoTexto}>
                    {props.genres[0]}
                </Text>
            </View>
        </View>
        <View style={styles.right}>
            <Text style={style.title}>
                {props.title}
            </Text>
            <Text style={style.years}>
                {props.years}
            </Text>
            <Text style={style.ratting}>
                {props.rating}
            </Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    genero: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 7,
    },
    generoTexto: {
        color: 'white',
        fontSize: 11,
    },
    title: {
        fontSize: 18,
        color: '#44546b'
    },
    years: {
        backgroundColor: '#70b124',
        paddingHorizontal: 4,
        paddingVertical: 6,
        color: 'white',
        fontSize: 11,
        overflow: 'hidden',
        alignSelf: 'flex-start',
        borderRadius: 5,
    },
    ratting: {
        color: '#6b6b6b',
        fontSize: 14,
        fontWeight: 'bold',
    },
    cover: {
        width: 150,
        height: 100,
        resizeMode: 'contain'
    },
    right: {
        paddingLeft: 10,
        color: '#44546b'
    }
})

export default Suggestion;