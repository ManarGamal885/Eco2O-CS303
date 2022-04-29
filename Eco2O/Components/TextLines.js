import React from 'react';
import {
    StyleSheet, View, Text
} from 'react-native';

export default function textLines () {
    return(
        <View style={styles.text}>
        <Text style={styles.text1}>
            Bulding zero wast
        </Text>
        <Text style={styles.text2}>
            communities
        </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        width: 294,
        height: 78
    },
    text1: {
        textAlign: 'center',
        color: '#357142',
        fontSize: 25,
        fontWeight: 'bold',
        textShadowColor: '#B7B7B7',
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 6,
    },
    text2: {
        textAlign: 'center',
        color: '#357142',
        fontSize: 25,
        fontWeight: 'bold',
        textShadowColor: '#B7B7B7',
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 6,
    },
});