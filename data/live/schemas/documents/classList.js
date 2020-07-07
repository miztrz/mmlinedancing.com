import { MdDateRange } from 'react-icons/lib/md';

export default {
  name: 'classList',
  title: 'Class List',
  type: 'document',
  icon: MdDateRange,
  fields: [
    {
      name: 'title',
      title: 'Class Name',
      type: 'string',
    },
    {
      name: 'level',
      title: 'Level',
      type: 'string',
      options: {
        list: ['Beginner', 'Intermediate', 'Advanced'],
        layout: 'radio'
      },
    },
    {
      name: 'hours',
      type: 'dayAndTime',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      hours: 'hours',
    },
    prepare(selection) {
      return {
        title: `${selection.title}`,
        subtitle: `${selection.hours.day} (${selection.hours.startsAt} to ${selection.hours.endsAt})`,
      };
    },
  },
};
