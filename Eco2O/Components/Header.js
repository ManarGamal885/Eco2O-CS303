import React from 'react';
import {
    View, StyleSheet, Text, Image, FlatList
} from 'react-native';

export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.signUp}>
                <Text>Sign up</Text>
            </View>
            <View>
                <Image
                    source={require('../assets/undraw_connected_world_wuay.png')}
                    style={styles.image}
                />
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 2,
        flexDirection: 'row',
    },
    signUp: {
        width: 164,
        height: 64,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000000',
        textShadowColor: '#B7B7B7',
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 6,
        justifyContent: 'flex-start',
    },
    image: {
        width: 196,
        height: 118,
        justifyContent: 'flex-end',
    }
});