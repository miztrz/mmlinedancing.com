import { MdSettings } from 'react-icons/lib/md';

export default {
  name: 'setLevels',
  title: 'CMS - Levels',
  description:
    'This allows you to edit the different levels the classes and dances can be advertised at.',
  type: 'document',
  icon: MdSettings,
  fields: [
    {
      name: 'level',
      title: 'Levels',
      type: 'string',
    },
  ],
};
