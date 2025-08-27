import { useFonts } from 'expo-font';
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProperties = {
    text: string
}

const Long_Button = (props: ButtonProperties) => {

    const [fontsLoaded] = useFonts({
        'Lexend-SemiBold': require("../assets/fonts/Lexend-SemiBold.ttf")
    });

    return(
        <Pressable style={style.button}>
            <Text style={style.buttonText}>{props.text}</Text>
        </Pressable>
    );
}

const style = StyleSheet.create({
    button: {
        backgroundColor: "#F85F6A",
        padding: "5%",
        borderRadius: 6,
        maxHeight: 60,
        marginTop: -25,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 8, // For Android
    },
    buttonText: {
        textAlign: "center",
        fontFamily: "Lexend-SemiBold",
        fontSize: 23,
        color: "white"
    }
})

export default Long_Button