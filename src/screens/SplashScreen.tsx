import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import Logo from '../../assets/imgs/katni-removebg-preview.png'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/rootStackParams'
import Animated, { FadeIn, FadeInUp, FadeOut } from 'react-native-reanimated'

const SplashScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'HomeScreen' }],
            })  
        }, 2000)
    }, [])
    return (
        <View style={styles.container}>
            <Animated.Text style={styles.title}>KATNI</Animated.Text>
            <Animated.View 
            style={styles.logo} 
            >
                <Animated.Image source={Logo} style={styles.logo} sharedTransitionTag="logo" />
            </Animated.View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        letterSpacing: 5,
    },
    logo: {
        width: 150, 
        height: 150,
        resizeMode: 'contain',
        // filter: [
        //     { grayscale: 100 },          // 100% = 1
        //     { invert: 80 },          // 80% = 0.8
        //     { sepia: 0.39 },          // 39% = 0.39
        //     { saturate: 4221 },      // 4221% = 42.21
        //     { hueRotate: '17rad' },  // degrees as string
        //     { brightness: 100.1 },     // 101% = 1.01
        //     { contrast: 100.1 }        // 101% = 1.01
        // ]
    }
})