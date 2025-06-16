import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from 'react-native';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  keyboardType = 'default',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={`Masukan ${label.toLowerCase()} anda`}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
});

export default InputField;
