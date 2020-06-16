import React from 'react';
import { View, Text } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  time: {
    color: '#8A8A8A',
    fontSize: 12,
    marginBottom: 6,
  },

  title: {
    fontSize: 18,
    fontWeight: '100',
    marginBottom: 6,
  },

  description: {
    fontSize: 12,
    marginBottom: 12,
  },

  participant: {
    fontSize: 10,
    color: '#1967D2',
  },
});

const TimeLineItem = (props) => {
  const { rowData, rowId, sectionId } = props;
  return (
    <View>
      <Text style={styles.time}>{rowData.time}</Text>
      <Text style={styles.title}>{rowData.title}</Text>
      <Text style={styles.description}>{rowData.description}</Text>
      <Text style={styles.participant}>
        1 orang {rowData.participant} participant
      </Text>
    </View>
  );
};

export default TimeLineItem;
