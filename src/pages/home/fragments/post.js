import React from 'react';
import {
  View,
  Container,
  Card,
  CardItem,
  Text,
  Body,
  Button,
  Icon,
} from 'native-base';
import TextAvatar from 'react-native-text-avatar';
import { TouchableHighlight, StyleSheet } from 'react-native';
import material from '../../../../native-base-theme/variables/material';

const styles = StyleSheet.create({
  name: {
    marginLeft: 1.5 * material.cardItemPadding,
    fontSize: 12,
  },
});

const Post = () => {
  return (
    <Card style={{ borderRadius: 10, paddingVertical: 5 }}>
      <CardItem>
        <TextAvatar
          backgroundColor={'#253A8D'}
          textColor={'#fff'}
          size={35}
          type={'circle'} // optional
        >
          ALI MASNGUT
        </TextAvatar>
        <Text style={styles.name}>Drs. ALI MASNGUT, SH, M.Ag</Text>
      </CardItem>
      <CardItem style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        <Body>
          <Text style={{ fontSize: 14, color: '#364149' }}>
            Pribadi yang selalu semangat, sabar, ikhlas, tawakal, selalu
            bersyukur
          </Text>
        </Body>
        <Text style={{ color: '#8DADB9', fontSize: 12, marginTop: 4 }}>
          Read More
        </Text>
      </CardItem>
      <CardItem style={{ flexDirection: 'column' }}>
        <View
          style={{
            justifyContent: 'space-between',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{ fontWeight: '700', fontSize: 12 }}>1 Suka</Text>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableHighlight activeOpacity style={{ marginRight: 10 }}>
              <Icon
                type="Entypo"
                style={{ fontSize: 20, color: '#2978C9' }}
                name="heart-outlined"></Icon>
            </TouchableHighlight>
            <TouchableHighlight>
              <Icon
                type="Entypo"
                style={{ fontSize: 20, color: '#2978C9' }}
                name="message"></Icon>
            </TouchableHighlight>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 10, color: '#8DADB9' }}>Lihat Komentar</Text>
          <Text style={{ fontSize: 10, color: '#8DADB9' }}>
            31 menit yang lalu
          </Text>
        </View>
      </CardItem>
    </Card>
  );
};

export default Post;
