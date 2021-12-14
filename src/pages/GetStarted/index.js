import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILLogo, ILGetStarted} from '../../assets';
import {Button, Gap, Register} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.container}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  title: {
    marginTop: 90,
    fontSize: 28,
    color: '#FFF',
    fontFamily: 'Nunito-SemiBold',
  },
});
