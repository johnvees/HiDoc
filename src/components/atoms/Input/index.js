import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../../../utils';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.border,
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: 'Nunito-Regular',
  },
});
