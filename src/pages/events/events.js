import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

import Timeline from 'react-native-timeline-flatlist';
import mockData from './events.mock';
import { Container, Content, View } from 'native-base';
import TimeLineItem from './fragments/timeline.item';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingRight: 35,
    paddingLeft: 20,
  },
  list: {},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

const Events = () => {
  return (
    <Content>
      <View style={styles.container}>
        <Text style={styles.title}>Juni 2020</Text>
        <Timeline
          style={styles.list}
          data={mockData.events2}
          circleColor="rgb(45,156,219)"
          lineColor="rgb(45,156,219)"
          timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
          showTime={false}
          renderDetail={(rowData, sectionID, rowID) => (
            <TimeLineItem
              rowData={rowData}
              sectionID={sectionID}
              key={rowID}></TimeLineItem>
          )}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Juli 2020</Text>

        <Timeline
          style={styles.list}
          data={mockData.events1}
          circleColor="rgb(45,156,219)"
          lineColor="rgb(45,156,219)"
          showTime={false}
          renderDetail={(rowData, sectionID, rowID) => (
            <TimeLineItem
              rowData={rowData}
              sectionID={sectionID}
              key={rowID}></TimeLineItem>
          )}
        />
      </View>
    </Content>
  );
};

export default Events;
