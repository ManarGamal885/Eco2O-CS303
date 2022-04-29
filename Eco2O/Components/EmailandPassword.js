import React, {useState} from 'react';
import {
    StyleSheet, View, TextInput, 
} from 'react-native';

export default function EmailandPassword () {

    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }

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
    }
});