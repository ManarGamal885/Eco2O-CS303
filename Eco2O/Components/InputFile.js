import React from 'react';
import {
    StyleSheet, View, Text, TouchableOpacity,
    TextInput
} from 'react-native';


export default function InputFile () {

    const changeHandler = (val) => {
        setText(val);
    }

    return(
        <View>
            <View style={styles.rectangle}>
                <View style={styles.name_username}>
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
                </View>
                <View>
                    <TextInput
                        style={styles.name}
                        placeholder='Email'
                        onChange={changeHandler}
                    />
                    <TextInput
                        style={styles.name}
                        placeholder='Password'
                        onChange={changeHandler}
                    />
                    <TextInput
                        style={styles.name}
                        placeholder='Confirm password'
                        onChange={changeHandler}
                    />
                </View>
                <View style={styles.name_username}>
                    <TextInput
                        style={styles.name}
                        placeholder='City'
                        onChange={changeHandler}
                    />
                    <TextInput
                        style={styles.username}
                        placeholder='State'
                        onChange={changeHandler}
                    />
                </View>
                <View style={styles.name_username}>
                    <TextInput
                        style={styles.name}
                        placeholder='Gender'
                        onChange={changeHandler}
                    />
                    <TextInput
                        style={styles.username}
                        placeholder='Age'
                        onChange={changeHandler}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.name}
                        placeholder='Phone number'
                        onChange={changeHandler}
                    />
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text buttonText>Sign up</Text>
                    </TouchableOpacity>
                </View>
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
    name_username: {
        flexDirection: 'row',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
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
        paddingTop: 8,
        color: 'white',
        textShadowColor: '#424242',
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 6,
        textAlign: 'center',
        fontSize: 30,
    }
});