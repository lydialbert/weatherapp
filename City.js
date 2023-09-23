import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native'

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'}
const City = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require("../../assets/city-background.jpg")} style={styles.imageLayout}>
            </ImageBackground>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageLayout: {
        flex: 1,
        justifyContent: 'center',
    },
});
export default City;
