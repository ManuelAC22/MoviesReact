import React from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native';


function Suggestion(props) {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Image 
                    style={styles.cover} 
                    source={{
                        uri:props.medium_cover_image
                    }} 
                    />
                </View>
                <View style={styles.genero}>
                    <Text style={styles.generoTexto}>
                        {props.genres[0]}
                    </Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={styles.years}>
                    {props.year}
                </Text>
                <Text style={styles.ratting}>
                    {props.rating}
                </Text>
            </View>
        </View>
    )
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
        marginLeft:5,
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
        resizeMode: 'cover',
        borderRadius:10,
        marginLeft:5,
        marginBottom:5,
    },
    right: {
        paddingLeft: 10,
        color: '#44546b'
    }
})

export default Suggestion;