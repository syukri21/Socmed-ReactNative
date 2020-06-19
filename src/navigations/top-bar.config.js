import material from '../../native-base-theme/variables/material';

const topBarDefault = (props) => ({
  rightButtons: [
    {
      // icon: props.BarsIcon,
    },
  ],
  title: {
    color: material.brandPrimary,
  },
});

export default {
  topBarDefault,
};
