import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// my config below

import blockContent from './components/blockContent'
import dayAndTime from './documents/dayAndTime'
import classList from './documents/classList'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blockContent,
    dayAndTime,
    classList,
  ])
})
