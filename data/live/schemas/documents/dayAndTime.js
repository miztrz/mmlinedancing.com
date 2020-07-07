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
  title: 'Day and Time',
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
      default: 'h:mm am/pm'
    },    {
      name: 'endsAt',
      title: 'End Time',
      type: 'string',
      default: 'h:mm am/pm'
    },
  ],

};
