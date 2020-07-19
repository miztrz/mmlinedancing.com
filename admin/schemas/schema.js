import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// my config below

import blockContent from './components/blockContent';
import dayAndTime from './components/dayAndTime';
import location from './components/location';
import classList from './documents/classList';
import setLevels from './documents/setLevels';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blockContent,
    dayAndTime,
    location,
    classList,
    setLevels,
  ]),
});
