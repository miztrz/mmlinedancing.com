import Cleave from 'cleave.js/react';

const cleave = new Cleave('.time-input', {
  time: true,
  timeFormat: '12',
  delimiter: '-',
  delimiterLazyShow: true,
});

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export default {
  name: 'dayAndTime',
  type: 'object',
  fields: [
    {
      name: 'day',
      title: 'Weekday',
      type: 'string',
      options: {
        list: days,
      },
    },
    {
      name: 'startsAt',
      title: 'Start Time',
      type: 'string',
    },
    {
      name: 'endsAt',
      title: 'End Time',
      type: 'string',
    },
  ],
};
