import React from 'react';
import { View, Text, Button, Icon } from 'native-base';
import { Row } from 'react-native-easy-grid';

const PostInputButton = () => {
  return (
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
  );
};

export default PostInputButton;
