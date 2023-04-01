import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type, bgColor, fgColor}) => {
    return (
        <Pressable 
        onPress={onPress}
        style={[
            styles.container, 
            styles[`container_${type}`],
            bgColor? {backgroundColor: bgColor} : {}
        ]}
        > 
        <Text style={[
            styles.text, 
            styles[`text_${type}`],
            fgColor? {color: fgColor} : {}
            ]}>
            {text}
        </Text>

        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    container_PRIMARY: {
        backgroundColor: '#8F52FC',
    },
    container_SECONDARY: {},
    container_TERTIARY: {},
    text: {
        fontWeight: 'bold',
    
    },
    text_PRIMARY: {
        color: '#fff',
        fontSize: 20,
        textTransform: 'uppercase',
    },
    text_SECONDARY: {},
    text_TERTIARY: {
        color: '#8F52FC',
    },
})

export default CustomButton
