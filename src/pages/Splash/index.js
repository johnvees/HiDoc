import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 2000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ILLogo />
      <Text style={styles.textTitle}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textTitle: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
  },
});
