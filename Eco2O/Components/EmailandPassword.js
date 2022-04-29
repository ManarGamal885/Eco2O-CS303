import React, {useState} from 'react';
import {
    StyleSheet, View, TextInput, TouchableOpacity
} from 'react-native';


export default function EmailandPassword () {

    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }
    const onPress = () => setCount(prevCount => prevCount + 1);

    return(
        <View>
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
            
        
                <TouchableOpacity style={styles.button1}> 
                    {/* <Text style={styles.buttonText}>Sign in</Text> */}
                </TouchableOpacity>
            
                {/* <Text style={styles.OrText}>Or</Text> */}
            
            
            
                <TouchableOpacity style={styles.button2}>
                    {/* <Text style={styles.buttonText}>Sign in</Text> */}
                </TouchableOpacity>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderLeftColor: '#9C8A8A',
        width: 329,
    },
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    button1: {
        backgroundColor: '#004D25',
        padding: 20,
        borderRadius: 50,
        width: 328,
        height: 72,
        justifyContent: 'space-between',
    },
    button2: {
        backgroundColor: '#598B71',
        padding: 20,
        borderRadius: 50,
        width: 328,
        height: 72,
        justifyContent: 'space-between',
    },
    buttonText: {
        color: 'white',
    },
    OrText: {
        color: '8D8D8D',
        fontSize: 20,
    },
});