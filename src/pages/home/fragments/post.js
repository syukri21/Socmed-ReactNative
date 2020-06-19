import React from 'react';
import { View, Card, CardItem, Text, Body, Icon, Right } from 'native-base';
import TextAvatar from 'react-native-text-avatar';
import { StyleSheet, Image } from 'react-native';
import material from '../../../../native-base-theme/variables/material';
import Ripple from 'react-native-material-ripple';

const styles = StyleSheet.create({
  nameWrapper: {
    marginLeft: 1.5 * material.cardItemPadding,
  },
  name: {
    fontSize: 12,
  },
  date: {
    fontSize: 10,
    color: material.textGray,
  },
  iconButton: {
    color: material.brandPrimary,
    fontSize: 16,
  },
  card: {
    borderRadius: 4,
    elevation: 4,
    borderWidth: 0,
    borderColor: 'transparent',
  },
  ripple: {
    marginLeft: 10,
    padding: 5,
    flexDirection: 'row',
    fontSize: 12,
  },

  rippleText: {
    color: material.textGray,
    marginLeft: 5,
    fontSize: 12,
  },
  readMore: { color: material.textGray, fontSize: 12, marginTop: 5 },
  bodyCarditem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: material.inputBorderColor,
  },
  footerCardItem: {
    justifyContent: 'flex-end',
    paddingLeft: material.cardItemPadding,
    paddingRight: material.cardItemPadding,
    paddingTop: 5,
    paddingBottom: 5,
  },
  headerCardItem: {
    paddingLeft: material.cardItemPadding,
    paddingRight: material.cardItemPadding,
    paddingTop: material.cardItemPadding,
    paddingBottom: 5,
  },
  center: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyText: { fontSize: 14, color: material.textColor, textAlign: 'justify' },
  image: { width: '100%', height: 300, resizeMode: 'cover' },
});

const Post = (props) => {
  return (
    <Card style={styles.card}>
      <CardItem style={styles.headerCardItem}>
        <TextAvatar
          backgroundColor={'#253A8D'}
          textColor={'#fff'}
          size={35}
          type={'circle'} // optional
        >
          ALI MASNGUT
        </TextAvatar>
        <View style={styles.nameWrapper}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.date}>{props.time}</Text>
        </View>
      </CardItem>
      <CardItem style={styles.bodyCarditem}>
        <Body>
          <Text style={styles.bodyText}>{props.text}</Text>
        </Body>
        <Text style={styles.readMore}>Read More</Text>
      </CardItem>
      {props.image && (
        <Image source={{ uri: props.image }} style={styles.image}></Image>
      )}
      <CardItem style={styles.footerCardItem}>
        <View style={styles.center}>
          <Ripple style={styles.ripple} rippleColor={material.brandPrimary}>
            <Icon
              type="FontAwesome5"
              style={styles.iconButton}
              name="heart"></Icon>
            <Text style={styles.rippleText}>255</Text>
          </Ripple>
          <Ripple style={styles.ripple} rippleColor={material.brandPrimary}>
            <Icon
              type="FontAwesome5"
              style={styles.iconButton}
              name="comments"></Icon>
            <Text style={styles.rippleText}>255</Text>
          </Ripple>
        </View>
      </CardItem>
    </Card>
  );
};

export default Post;
