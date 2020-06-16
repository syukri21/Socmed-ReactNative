import React from 'react';
import { View, Icon, Text, Content } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import Ripple from 'react-native-material-ripple';
import { StyleSheet } from 'react-native';
import material from '../../../native-base-theme/variables/material';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    margin: 15,
    minHeight: 110,
    alignItems: 'center',
    flex: 1,
    borderColor: material.cardBorderColor,
    borderWidth: material.borderWidth,
    borderRadius: 5,
  },
  itemText: {
    fontSize: material.buttonTextSizeSmall,
    textAlign: 'center',
  },
  itemIconWrapper: {
    marginBottom: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: material.borderWidth,
    borderRadius: material.borderRadiusLarge,
    backgroundColor: material.brandPrimary,
  },
  itemIcon: {
    fontSize: 20,
    color: material.buttonPrimaryColor,
  },
  ripple: {
    alignItems: 'center',
    padding: 10,
    width: '100%',
    flex: 1,
  },
});

const Menu = () => {
  return (
    <Content padder style={styles.container}>
      <Grid>
        <Row>
          <Grid>
            <Col style={styles.item}>
              <Ripple style={styles.ripple}>
                <View style={styles.itemIconWrapper}>
                  <Icon
                    name="book"
                    style={styles.itemIcon}
                    type="FontAwesome5"></Icon>
                </View>
                <Text style={styles.itemText}>Buku Digital</Text>
              </Ripple>
            </Col>
            <Col style={styles.item}>
              <Ripple style={styles.ripple}>
                <View style={styles.itemIconWrapper}>
                  <Icon
                    name="clipboard"
                    style={styles.itemIcon}
                    type="FontAwesome5"></Icon>
                </View>
                <Text style={styles.itemText}>RPP Digital</Text>
              </Ripple>
            </Col>
            <Col style={styles.item}>
              <Ripple style={styles.ripple}>
                <View style={styles.itemIconWrapper}>
                  <Icon
                    name="file"
                    style={styles.itemIcon}
                    type="FontAwesome5"></Icon>
                </View>
                <Text style={styles.itemText}>Modul Digital</Text>
              </Ripple>
            </Col>
          </Grid>
        </Row>
        <Row>
          <Grid>
            <Col style={styles.item}>
              <Ripple style={styles.ripple}>
                <View style={styles.itemIconWrapper}>
                  <Icon
                    name="book-open"
                    style={styles.itemIcon}
                    type="FontAwesome5"></Icon>
                </View>
                <Text style={styles.itemText}>Murotal Digital</Text>
              </Ripple>
            </Col>
            <Col style={styles.item}>
              <Ripple style={styles.ripple}>
                <View style={styles.itemIconWrapper}>
                  <Icon
                    name="pray"
                    style={styles.itemIcon}
                    type="FontAwesome5"></Icon>
                </View>
                <Text style={styles.itemText}>Do'a Harian</Text>
              </Ripple>
            </Col>
            <Col style={styles.item}>
              <Ripple style={styles.ripple}>
                <View style={styles.itemIconWrapper}>
                  <Icon
                    name="bars"
                    style={styles.itemIcon}
                    type="FontAwesome5"></Icon>
                </View>
                <Text style={styles.itemText}>Lainnya</Text>
              </Ripple>
            </Col>
          </Grid>
        </Row>
      </Grid>
    </Content>
  );
};

export default Menu;
