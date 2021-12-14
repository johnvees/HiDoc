import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';

const Login = () => {
  return (
    <View style={styles.container}>
      <ILLogo />
      <Text style={styles.textTitle}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} />
      <Gap height={40} />
      <Button title="Sign In" />
      <Gap height={30} />
      <Link title="Create New Account" size={16} align="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: 'white',
    flex: 1,
  },
  textTitle: {
    marginVertical: 40,
    maxWidth: 150,
    fontSize: 20,
    color: '#112340',
    fontFamily: 'Nunito-SemiBold',
  },
});
