import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextInput from './components/TextInput';
import Button from './components/Button';

const Login = () => {
  const [title, setTitle] = useState('Welcome');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = () => {
    setTitle(`Selamat Datang ${email}`);
    console.log({email, password});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder="Masukkan email anda"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Masukkan password anda"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <Button text="Sign In" onPress={onSignIn} />
      <Button text="Create new account" color="grey" textColor="white" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});
