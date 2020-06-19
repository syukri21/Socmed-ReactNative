import React from 'react';
import { Icon, View } from 'native-base';
import { StyleSheet } from 'react-native';
import Ripple from 'react-native-material-ripple';
import material from '../../../native-base-theme/variables/material';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 20,
    color: material.brandPrimary,
  },
  ripple: {
    padding: 10,
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacer: {
    width: 10,
  },
});

const RightButton = (props) => {
  return (
    <View style={styles.container}>
      <Ripple style={styles.ripple} rippleColor={material.brandPrimary}>
        <Icon name="search" type="FontAwesome5" style={styles.icon}></Icon>
      </Ripple>
      <Ripple style={styles.ripple} rippleColor={material.brandPrimary}>
        <Icon name="heart" type="FontAwesome5" style={styles.icon}></Icon>
      </Ripple>
      <Ripple style={styles.ripple} rippleColor={material.brandPrimary}>
        <Icon name="paper-plane" type="FontAwesome5" style={styles.icon}></Icon>
      </Ripple>
      <View style={styles.spacer}></View>
    </View>
  );
};

RightButton.option = {};

export default RightButton;
