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
      type: 'reference',
      to: [{type: 'setLevels'}]  
    },
    {
      name: 'hours',
      title: "Day & Time",
      type: 'dayAndTime',
    },
    {
      name: 'thisLocation',
      title: 'Location',
      type: 'location'
    },
    {
      name: 'slug',
      type: 'slug',
      hidden: true,
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
