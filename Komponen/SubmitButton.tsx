import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface SubmitButtonProps {
  onPress: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Register</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#c63cf7',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SubmitButton;
