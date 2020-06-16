import React from 'react';
import {
  View,
  Text,
  CardItem,
  Card,
  Body,
  Content,
  Button,
  Input,
  Item,
  Icon,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import TextAvatar from 'react-native-text-avatar';

const PostInput = () => {
  return (
    <Content padder>
      <Card style={{ paddingVertical: 10 }}>
        <CardItem>
          <Body>
            <Grid>
              <Col
                style={{
                  width: 80,
                }}>
                <TextAvatar
                  backgroundColor={'#253A8D'}
                  textColor={'#fff'}
                  size={60}
                  type={'circle'} // optional
                >
                  John Doe
                </TextAvatar>
              </Col>
              <Col>
                <Grid>
                  <Row
                    style={{
                      marginBottom: 12,
                    }}>
                    <Item
                      rounded
                      style={{
                        width: '100%',
                        paddingHorizontal: 10,
                      }}>
                      <Input
                        placeholder="Whats in your mind?"
                        placeholderTextColor="#BBC0C4"></Input>
                    </Item>
                  </Row>
                  <Row>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <Button
                          small
                          transparent
                          rounded
                          bordered
                          style={{
                            marginRight: 10,
                          }}>
                          <Icon name="video" type="Entypo" small />
                        </Button>
                        <Button small transparent bordered rounded>
                          <Icon name="image" type="Entypo" />
                        </Button>
                      </View>
                      <View>
                        <Button
                          small
                          style={{
                            justifyContent: 'center',
                          }}>
                          <Text
                            uppercase={false}
                            style={{
                              textAlign: 'center',
                            }}>
                            Post
                          </Text>
                        </Button>
                      </View>
                    </View>
                  </Row>
                </Grid>
              </Col>
            </Grid>
          </Body>
        </CardItem>
      </Card>
    </Content>
  );
};

export default PostInput;
