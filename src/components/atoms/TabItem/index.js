import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconDoctorActive,
  IconDoctorInactive,
  IconHospitalActive,
  IconHospitalInactive,
  IconMessagesActive,
  IconMessagesInactive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <IconDoctorActive /> : <IconDoctorInactive />;
    }
    if (title === 'Messages') {
      return active ? <IconMessagesActive /> : <IconMessagesInactive />;
    }
    if (title === 'Hospital') {
      return active ? <IconHospitalActive /> : <IconHospitalInactive />;
    }
    return <IconDoctorInactive />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.textMenu(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textMenu: active => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
