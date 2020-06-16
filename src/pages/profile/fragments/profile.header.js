import React from 'react';
import { View, Content, Text } from 'native-base';
import TextAvatar from 'react-native-text-avatar';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { StyleSheet } from 'react-native';
import material from '../../../../native-base-theme/variables/material';
import Ripple from 'react-native-material-ripple';

const styles = StyleSheet.create({
  wrapper: {
    padding: material.cardItemPadding,
    marginHorizontal: 0.6 * material.cardItemPadding,
    marginBottom: material.cardItemPadding,
    borderBottomWidth: material.borderWidth,
    borderBottomColor: material.cardBorderColor,
  },
  textAvatar: {
    marginRight: 1.5 * material.cardItemPadding,
    width: 65,
  },
  name: {
    marginBottom: 10,
  },
  number: {
    color: material.brandPrimaryLight,
    fontSize: 13,
  },
  email: {
    fontSize: 12,
    color: '#666666',
  },
  button: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 12,
    color: '#666',
  },
  buttonTextNumber: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    paddingTop: 10,
    paddingLeft: 65 + material.cardItemPadding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
});

const ProfileDetail = () => {
  return (
    <Grid style={styles.wrapper}>
      <Row>
        <Grid>
          <Col style={styles.textAvatar}>
            <TextAvatar
              backgroundColor={'#253A8D'}
              textColor={'#fff'}
              size={65}
              type={'circle'} // optional
            >
              ALI MASNGUT
            </TextAvatar>
          </Col>
          <Col>
            <Text style={styles.name}>Drs. ALI MASNGUT, SH, M .Ag</Text>
            <Text style={styles.number}>No Anggota: 3507170001</Text>
            <Text style={styles.email}>alimangus@cvalmas.com</Text>
          </Col>
        </Grid>
      </Row>
      <Row>
        <View style={styles.buttonsContainer}>
          <Ripple style={styles.button}>
            <Text style={styles.buttonTextNumber}>2</Text>
            <Text style={styles.buttonText}>Posting</Text>
          </Ripple>
          <Ripple style={styles.button}>
            <Text style={styles.buttonTextNumber}>0</Text>
            <Text style={styles.buttonText}>Acara</Text>
          </Ripple>
          <Ripple style={styles.button}>
            <Text style={styles.buttonTextNumber}>0</Text>
            <Text style={styles.buttonText}>Buku</Text>
          </Ripple>
        </View>
      </Row>
    </Grid>
  );
};

export default ProfileDetail;
