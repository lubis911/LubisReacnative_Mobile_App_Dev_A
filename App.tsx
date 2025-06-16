import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Title from './Komponen/Title';
import InputField from './Komponen/InputField';
import SubmitButton from './Komponen/SubmitButton';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    console.log({
      name,
      username,
      email,
      address,
      phone,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title>Registration</Title>
      <InputField label="Name" value={name} onChangeText={setName} />
      <InputField
        label="Username"
        value={username}
        onChangeText={setUsername}
      />
      <InputField label="Email" value={email} onChangeText={setEmail} />
      <InputField label="Address" value={address} onChangeText={setAddress} />
      <InputField
        label="Phone Number"
        value={phone}
        onChangeText={text => {
          const numeric = text.replace(/[^0-9]/g, '');
          setPhone(numeric);
        }}
        keyboardType="numeric"
      />
      <SubmitButton onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
});

export default App;
