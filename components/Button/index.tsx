import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

type ButtonProps = {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  color?: string;
  textColor?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  color = 'blue',
  textColor = 'white',
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor: color}]}>
      <Text style={[styles.text, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
