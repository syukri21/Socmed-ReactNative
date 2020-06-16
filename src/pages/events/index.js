import React from 'react';
import Layout from '../../../Layout';
import Events from './events';
import material from '../../../native-base-theme/variables/material';

const EventsScreen = (props) => {
  return (
    <Layout {...props}>
      <Events {...props}></Events>
    </Layout>
  );
};

EventsScreen.options = {
  topBar: {
    title: {
      text: 'Event',
      color: 'white',
    },
    background: {
      color: material.brandPrimary,
    },
  },
};

export default EventsScreen;
