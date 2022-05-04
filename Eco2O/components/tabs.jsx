import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../pages/profile';
import Contactus from '../pages/contactUs';
import Home from '../pages/home';

const Tab = createBottomTabNavigator();

export default function tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Profile' component={Profile} />
            <Tab.Screen name='Contact Us' component={Contactus} />
            <Tab.Screen name='Home' component={Home} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})