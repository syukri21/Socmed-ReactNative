import { React } from 'react';
import { View } from 'native-base';

const Test = () => {
  return (
    <View>
      <Text>asds</Text>
    </View>
  );
};
const events1 = [
  {
    time: 'Sabtu, 27 Juni 2020, 08:00',
    title: 'Workshop 2010',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel orci felis. In nec semper ante, et euismod odio. Praesent scelerisque interdum lectus ut vestibulum. Quisque sit amet auctor ipsum. In aliquet mauris euismod lectus semper bibendum. Pellentesque aliquam velit vitae fringilla maximus. Ut dapibus odio tellus, non consectetur arcu pharetra quis. Sed pretium ut massa id rutrum. Nunc blandit faucibus est, eu tempus mi finibus quis.',
  },
  {
    time: 'Senin, 28 Juni 2020, 08:00',
    title: 'Silaturahmi DKI Jakarta',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel orci felis. In nec semper ante, et euismod odio. Praesent scelerisque interdum lectus ut vestibulum. Quisque sit amet auctor ipsum. In aliquet mauris euismod lectus semper bibendum. Pellentesque aliquam velit vitae fringilla maximus.',
  },
  {
    time: 'Rabu, 30 Juni 2020, 08:00',
    title: 'Marathon',
    description:
      'Team sport played between two teams of eleven players with a spherical ball. ',
  },
];

const events2 = [
  {
    time: 'Sabtu, 03 Juli 2020, 08:00',
    title: 'Workshop 2020 New',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel orci felis. In nec semper ante, et euismod odio.',
  },
];

export default {
  events1,
  events2,
};
