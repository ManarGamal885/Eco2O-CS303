import React, { useState } from 'react';
import {
    View, StyleSheet, Text, Image, TextInput,
    TouchableOpacity
} from 'react-native';
import Confirm from './Confirm';

export default function Email () {

    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <View style={styles.imageStyle}>
                <Image
                    source={require('../assets/WhatsApp Image 2022-04-24 at 10.35.25 PM (1).jpeg')}
                    style={styles.image}
                />
            </View>
            <View style={styles.Email}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    onChange={changeHandler}
                />
            </View>
            {/*<View style={styles.button}>
                <TouchableOpacity 
                style={styles.buttonStyle} 
                // onPress ={() => <Confirm/>}
                >
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    imageStyle:{
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 277,
        height: 210,
    },
    input: {
        marginBottom: 10,
        // paddingHorizontal: 8,
        // paddingVertical: 6,
        borderBottomWidth: 1,
        borderColor: '#9C8A8A',
        width: 329,
    },
    Email: {
        // paddingBottom: 10,
        // paddingTop: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        alignContent: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#004D25',
        borderRadius: 50,
        width: 300,
        height: 72,
        justifyContent: 'space-between',
    },
    buttonText: {
        color: 'white',
        textShadowColor: 'gray',
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 6,
        textAlign: 'center',
        fontSize: 30,
    },
}); 