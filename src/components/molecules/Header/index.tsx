import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type HeaderProps = {
  text: string;
};

const Header: React.FC<HeaderProps> = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#020202',
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    marginLeft: 24,
    marginVertical: 38,
  },
});
