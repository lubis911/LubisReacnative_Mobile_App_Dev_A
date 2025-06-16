import React from 'react';
import {
  View,
  Text,
  TextInput as RNTextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import type {TextInputProps} from 'react-native';

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({children}: TitleProps) => (
  <Text style={styles.title}>{children}</Text>
);

interface InputProps extends TextInputProps {
  label: string;
}

const Input = ({label, ...props}: InputProps) => (
  <View style={styles.inputGroup}>
    <Text style={styles.label}>{label}</Text>
    <RNTextInput style={styles.input} placeholderTextColor="#999" {...props} />
  </View>
);

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  onPress: () => void;
}

const Button = ({
  text,
  backgroundColor = '#f97316',
  textColor = '#fff',
  onPress,
}: ButtonProps) => (
  <TouchableOpacity
    style={[styles.button, {backgroundColor}]}
    onPress={onPress}>
    <Text style={[styles.buttonText, {color: textColor}]}>{text}</Text>
  </TouchableOpacity>
);

const Exercise4 = () => {
  return (
    <View style={styles.container}>
      <Title>Welcome</Title>

      <Input label="Username" placeholder="Masukan username anda" />
      <Input
        label="Password"
        placeholder="Masukan password anda"
        secureTextEntry
      />

      <Button text="Sign In" onPress={() => console.log('Sign In')} />

      <Button
        text="Sign in with Google"
        backgroundColor="#db4437"
        onPress={() => console.log('Google')}
      />
      <Button
        text="Sign in with Facebook"
        backgroundColor="#1877f2"
        onPress={() => console.log('Facebook')}
      />
      <Button
        text="Sign in with Apple"
        backgroundColor="#000000"
        onPress={() => console.log('Apple')}
      />
    </View>
  );
};

export default Exercise4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'left',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  inputGroup: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  button: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
