import React from 'react';
import {
    StyleSheet, View, Text, Image
} from 'react-native';

export default function Confirm () {
    return (
        <View>
            <View>
                <Image
                    source={require('../assets/undraw_chore_list_re_2lq8.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.textStyle}>
                <Text style={styles.text}>
                    Code had been sent
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        paddingTop: 20,
        width: 351,
        height: 207,
    },
    textStyle:{
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    text: {
        width: 293,
        height: 51,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});