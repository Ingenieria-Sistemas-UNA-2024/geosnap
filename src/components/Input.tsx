import React from 'react';
import { StyleSheet, TextInput, View, Text, TextInputProps } from "react-native";
import { theme } from "../utils/theme";

interface InputProps extends TextInputProps {
  label: string
}

const Input: React.FC<InputProps> = ({label, onChangeText, ...props}) => {
  return (
    <View style={styles.SectionStyle}>
      <Text style={styles.inputDescription}>{label}</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={onChangeText}
        placeholderTextColor={theme.colors.textSecundary}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SectionStyle: {
    height: 80,
    marginHorizontal: 35,
    marginTop: 20,
    margin: 10,
  },
  inputStyle: {
    flex: 1,
    color: theme.colors.white,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "#dadae8",
  },
  inputDescription: {
    color: theme.colors.textPrimary,
    marginBottom: 5,
  },
});

export default Input;
