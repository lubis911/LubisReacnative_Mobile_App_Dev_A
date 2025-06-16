import React from 'react';
import {TextInput as Input, StyleSheet, TextInputProps} from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  placeholder: string;
}

const CustomTextInput = ({placeholder, ...rest}: CustomTextInputProps) => {
  return <Input style={styles.input} placeholder={placeholder} {...rest} />;
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 14,
    color: 'black',
  },
});
