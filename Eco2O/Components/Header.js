import React from 'react';
import {
    View, StyleSheet, Text, Image
} from 'react-native';

export default function Header () {
    return (
        <View>
            <View style={styles.imageStyle}>
                <Image
                    source={require('../assets/lock-icon-11.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.text}>
                <Text style={styles.textStyle}>
                    Forget
                </Text>
                <Text style={styles.textStyle}>
                    Password
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        width: 349,
        height: 125,
        // paddingTop: 45,
    },
    textStyle: {
        textAlign: 'center',
        color: 'black',
        fontSize: 50,
        fontWeight: 'bold',
        textShadowColor: '#B7B7B7',
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 6,
    },
    imageStyle: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: 20,
        // paddingBottom: 10,
    },
    image: {
        width: 60,
        height: 81,
        // paddingBottom: 5,
    }
});