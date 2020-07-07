const hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const minutes = ['00', '15', '30', '45'];
const part = ['am', 'pm'];

export default {
  title: 'Time',
  name: 'myTime',
  type: 'array',
  of: [
    {
      title: 'H',
      type: 'string',
      name: 'hour',
      options: {
        list: hours,
      },
    },
    {
    title: 'M',
      type: 'string',
      name: 'minute',
      options: {
        list: minutes,
      },
    },
    {
        title: 'P',
      type: 'string',
      name: 'part',
      options: {
        list: part,
      },
    },
  ],
};
