import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../types/navigation';

import Logo from '../../assets/Logo.svg';

type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SplashScreen'
>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Home'); //pindah ke Home setelah 2 detik
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.text}>Money Tracker</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02CF8E',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    marginTop: 24,
  },
});
