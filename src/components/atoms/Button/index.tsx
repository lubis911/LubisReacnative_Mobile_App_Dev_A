import React from 'react';
import {Text, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';

type ButtonProps = {
  text: string;
  color?: string;
  buttonColor?: string;
  onPress?: () => void; // ✅ tambahkan ini
};

const Button: React.FC<ButtonProps> = ({
  text,
  color = '#02CF8E',
  buttonColor = '#020202',
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={getButtonStyle(color)}
      onPress={onPress}
      activeOpacity={0.5}>
      <Text style={getTextStyle(buttonColor)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const getButtonStyle = (color: string): ViewStyle => ({
  backgroundColor: color,
  paddingVertical: 12,
  borderRadius: 8,
  alignItems: 'center',
});

const getTextStyle = (textColor: string): TextStyle => ({
  color: textColor,
  textAlign: 'center',
  fontFamily: 'Poppins-Medium',
  fontSize: 14,
});
