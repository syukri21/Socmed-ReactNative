import React from 'react';
import { CardItem, Card, Body, Input, Item } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import TextAvatar from 'react-native-text-avatar';
import { StyleSheet } from 'react-native';
import material from '../../../../native-base-theme/variables/material';

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    padding: 2,
    elevation: 8,
    borderWidth: 0,
    borderColor: 'transparent',
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 16,
  },
});

const PostInput = () => {
  return (
    <Card style={styles.card}>
      <CardItem>
        <Body>
          <Grid>
            <Col style={{ width: 50 }}>
              <TextAvatar
                backgroundColor={'#253A8D'}
                textColor={'#fff'}
                size={50}
                type={'circle'} // optional
              >
                John Doe
              </TextAvatar>
            </Col>
            <Col style={{ marginLeft: material.cardItemPadding }}>
              <Grid>
                <Row>
                  <Item rounded style={styles.inputContainer}>
                    <Input
                      placeholder="Diskusi hari ini?"
                      style={styles.input}></Input>
                  </Item>
                </Row>
              </Grid>
            </Col>
          </Grid>
        </Body>
      </CardItem>
    </Card>
  );
};

export default PostInput;
