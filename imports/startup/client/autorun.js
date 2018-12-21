import { SchoolsIndex } from '../../api/schools/schools_index.js';

Tracker.autorun(() => {
  console.log(SchoolsIndex.search('Barack', { limit: 20 }).fetch());
});
