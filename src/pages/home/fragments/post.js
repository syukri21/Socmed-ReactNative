import React from 'react';
import { View, Card, CardItem, Text, Body, Icon, Right } from 'native-base';
import TextAvatar from 'react-native-text-avatar';
import { StyleSheet } from 'react-native';
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
  readMore: { color: material.textGray, fontSize: 12, marginTop: 10 },
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
});

const Post = () => {
  return (
    <Card style={styles.card}>
      <CardItem>
        <TextAvatar
          backgroundColor={'#253A8D'}
          textColor={'#fff'}
          size={35}
          type={'circle'} // optional
        >
          ALI MASNGUT
        </TextAvatar>
        <View style={styles.nameWrapper}>
          <Text style={styles.name}>Drs. ALI MASNGUT, SH, M.Ag</Text>
          <Text style={styles.date}>31 menit yang lalu</Text>
        </View>
      </CardItem>
      <CardItem style={styles.bodyCarditem}>
        <Body>
          <Text
            style={{ fontSize: 14, color: '#364149', textAlign: 'justify' }}>
            Id cupidatat officia magna Lorem deserunt quis voluptate pariatur
            officia ex aliqua reprehenderit. Aliqua ut ipsum sint est amet est
            magna amet labore anim aliqua ea.
          </Text>
        </Body>
        <Text style={styles.readMore}>Read More</Text>
      </CardItem>
      <CardItem style={styles.footerCardItem}>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
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
