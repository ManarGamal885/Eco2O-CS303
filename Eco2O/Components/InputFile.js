import React from 'react';
import {
    StyleSheet, View, Text, TextInput, TouchableOpacity
} from 'react-native';

export default function InputFile () {

    const changeHandler = (val) => {
        setText(val);
    }

    return(
        <View>
            <View style={styles.rectangle}>
                {/* <View>
                    <TextInput
                        style={styles.name}
                        placeholder='Name'
                        onChange={changeHandler}
                    />
                    <TextInput
                        style={styles.username}
                        placeholder='Username'
                        onChange={changeHandler}
                    />
                </View> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rectangle: {
        color: '#F9F9F9',
        width: 414,
        height: 788,
        borderRadius: 50,

    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderColor: '#9C8A8A',
    },
});