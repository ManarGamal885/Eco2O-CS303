import React, {useState} from 'react';
import {
    StyleSheet, View, Text,TextInput, TouchableOpacity, Linking
} from 'react-native';


export default function EmailandPassword () {

    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }
    

    return(
        <View>
            <View style={styles.EmailPassword}>
                <TextInput
                        style={styles.input}
                        placeholder='Email'
                        onChange={changeHandler}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        onChange={changeHandler}
                    />
            </View>

            <View style={styles.container}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.buttonText}>Sign in</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.OrText}>Or</Text>
                </View>

                <View style={styles.container}>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttonText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.forgetpassLine}>
                    <Text style={styles.hyperlink}>forget Password</Text>
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderColor: '#9C8A8A',
        width: 329,
    },
    EmailPassword: {
        paddingBottom: 10,
        paddingTop: 10,
    },
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
    },
    button1: {
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
    button2: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#598B71',
        borderRadius: 50,
        width: 300,
        height: 72,
        justifyContent: 'space-between',
    },
    buttonText: {
        paddingTop: 8,
        color: 'white',
        textShadowColor: '#424242',
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 6,
        textAlign: 'center',
        fontSize: 30,
    },
    OrText: {
        paddingTop: 3,
        color: 'gray',
        fontSize: 20,
        textAlign: 'center',
    },
    forgetpassLine:{
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    },
    hyperlink: {
        paddingTop: 2,
        color: '#3366B4',
        fontSize: 20,
        width: 193,
        height: 31,
        textAlign: 'center',
    },
});