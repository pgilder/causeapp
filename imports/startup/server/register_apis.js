import { SchoolsIndex } from '../../api/schools/schools_index.js';

Meteor.publish('test-search', function (searchTerm) {
  const { userId } = this;

  return SchoolsIndex.search(searchTerm, { userId }).mongoCursor;
});
