import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import Header from '../../components/molecules/Header';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import NullPhoto from '../../../assets/NullPhoto.png';

const SignUp: React.FC = () => {
  return (
    <View style={styles.pageContainer}>
      <Header text="Sign Up" />
      <View style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profileBorder}>
            <TouchableOpacity activeOpacity={0.5}>
              <Image source={NullPhoto} />
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={26} />
        <TextInput text="Full Name" placeholder="Enter your full name" />
        <Gap height={26} />
        <TextInput
          text="Email Address"
          placeholder="Enter your email address"
        />
        <Gap height={16} />
        <TextInput text="Password" placeholder="Enter your password" />
        <Gap height={24} />
        <Button text="Continue" onPress={() => {}} />
        <Gap height={12} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 24,
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileBorder: {
    height: 110,
    width: 110,
    borderColor: '#8D92A3',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 110 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
