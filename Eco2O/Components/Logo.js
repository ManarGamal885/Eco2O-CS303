import React from 'react';
import {
    View, Text, StyleSheet, Image
} from 'react-native';

export default function Logo () {
    return (
        <View>
        <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 277,
        height: 127,
    },
});