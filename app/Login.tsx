import { useFonts } from 'expo-font';
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Long_Button from "../components/Long_Button";

const Login = () => {
  const [fontsLoaded] = useFonts({
    'Lexend-SemiBold': require("../assets/fonts/Lexend-SemiBold.ttf"),
    'Lexend-Bold': require("../assets/fonts/Lexend-Bold.ttf")
  });

  return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/images/goldy.png")}></Image>
        <View style={{alignSelf: "center"}}>
          <Text style={{fontFamily: "Lexend-Bold", color: "#35424A", fontSize: 26}}>Hi There!</Text>
        </View>
        <View style={{marginHorizontal: "10%"}}>
          <Long_Button text="Google SSO Log In"></Long_Button>
        </View>
        
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF9F0',
  },
  logo: {
    alignSelf: "center",
    width: "60%", //use this to adjust image size
    height: "60%", //use this to shift the image
    resizeMode: "contain"       // Should fit the entire image
  },
  buttonFont: {

  }
});

export default Login;