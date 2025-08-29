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
        <View>
          <Image style={styles.logo} source={require("../assets/images/goldy.png")}></Image>
          <View style={{alignSelf: 'center', flex: 1, marginTop: 20, marginBottom: -20}}>
            <Text style={{fontFamily: 'Lexend-Bold', color:'#35424A', fontSize:26, alignSelf: 'center'}}>Sign In</Text>
            <Text style={{fontFamily: 'Lexend-SemiBold', color:'#989EB1', fontSize:16, marginTop: 4}}>Hi There! Welcome back</Text>
          </View>
          <View style={{marginHorizontal: "10%"}}>
            <View>
              <Long_Button text="Google SSO Log In"></Long_Button>
            </View>
            <View style={{marginTop: '15%'}}>
              <Long_Button text="Email Log In"></Long_Button>
            </View>
          </View>
          <View style={{marginTop: "20%"}}>
            <Text style={{fontFamily: 'Lexend-SemiBold', color:'#989EB1', fontSize:16, marginTop: 4, textAlign: 'center'}}>New to GopherClubhouse?</Text>
            <View style={{marginHorizontal: '10%', marginTop: '10%'}}>
              <Long_Button text="Sign Up"></Long_Button>
            </View>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCF9F0',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    height: '100%'
  },
  logo: {
    alignSelf: "center",
    width: "60%", //use this to adjust image size
    height: "60%", //use this to shift the image
    resizeMode: "contain",     // Should fit the entire image
    marginTop: "-10%",
    marginBottom: "-30%"
  },
  buttonFont: {

  }
});

export default Login;