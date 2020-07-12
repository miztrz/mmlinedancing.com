export default {
  name: 'location',
  type: 'object',
  fields: [
    {
      name: 'map',
      type: 'geopoint',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
    },
  ],
};
