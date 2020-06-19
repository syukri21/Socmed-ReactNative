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
    marginHorizontal: material.cardItemPadding,
    marginBottom: material.cardItemPadding,
    borderBottomWidth: material.borderWidth,
    borderBottomColor: material.cardBorderColor,
  },
  textAvatar: {
    marginRight: 4 * material.cardItemPadding,
    width: 80,
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
    fontSize: 14,
    color: '#666',
  },
  buttonTextNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonsContainer: {
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
              size={80}
              type={'circle'} // optional
            >
              ALI MASNGUT
            </TextAvatar>
          </Col>
          <Col style={styles.buttonsContainer}>
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
          </Col>
        </Grid>
      </Row>
      <Row style={{ marginTop: material.cardItemPadding }}>
        <View>
          <Text style={styles.number}>No Anggota: 3507170001</Text>
          <Text style={styles.email}>alimangus@cvalmas.com</Text>
        </View>
      </Row>
    </Grid>
  );
};

export default ProfileDetail;
