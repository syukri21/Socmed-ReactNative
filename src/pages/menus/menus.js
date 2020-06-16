import React from 'react';
import { View, Icon, Text, Content } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import Ripple from 'react-native-material-ripple';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    margin: 20,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 14,
    textAlign: 'center',
  },
  itemIcon: {
    marginBottom: 10,
    fontSize: 20,
    color: 'lightblue',
  },
});

const Menu = () => {
  return (
    <Content padder style={styles.container}>
      <Grid>
        <Row>
          <Grid>
            <Col>
              <Ripple style={styles.item}>
                <Icon
                  name="book"
                  style={styles.itemIcon}
                  type="FontAwesome5"></Icon>
                <Text style={styles.itemText}>Buku Digital</Text>
              </Ripple>
            </Col>
            <Col>
              <Ripple style={styles.item}>
                <Icon
                  name="clipboard"
                  style={styles.itemIcon}
                  type="FontAwesome5"></Icon>
                <Text style={styles.itemText}>RPP Digital</Text>
              </Ripple>
            </Col>
            <Col>
              <Ripple style={styles.item}>
                <Icon
                  name="file"
                  style={styles.itemIcon}
                  type="FontAwesome5"></Icon>
                <Text style={styles.itemText}>Module Digital</Text>
              </Ripple>
            </Col>
          </Grid>
        </Row>
        <Row>
          <Grid>
            <Col>
              <Ripple style={styles.item}>
                <Icon
                  name="book-open"
                  style={styles.itemIcon}
                  type="FontAwesome5"></Icon>
                <Text style={styles.itemText}>Murotal Digital</Text>
              </Ripple>
            </Col>
            <Col>
              <Ripple style={styles.item}>
                <Icon
                  name="pray"
                  style={styles.itemIcon}
                  type="FontAwesome5"></Icon>
                <Text style={styles.itemText}>Do'a Harian</Text>
              </Ripple>
            </Col>
            <Col>
              <Ripple style={styles.item}>
                <Icon
                  name="bars"
                  style={styles.itemIcon}
                  type="FontAwesome5"></Icon>
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
