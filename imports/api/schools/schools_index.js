import { Schools } from './schools.js';
import { Index, MongoDBEngine } from 'meteor/easy:search';
import { _ } from 'meteor/underscore';

export const SchoolsIndex = new Index({
  engine: new MongoDBEngine({
    sort: function () {
      return { score: -1 };
    },
    selector: function (searchObject, options, aggregation) {
      let selector = this.defaultConfiguration().selector(searchObject, options, aggregation),
        categoryFilter = options.search.props.categoryFilter;

      if (_.isString(categoryFilter) && !_.isEmpty(categoryFilter)) {
        selector.category = categoryFilter;
      }

      return selector;
    }
  }),
  collection: Schools,
  fields: ['name'],
  defaultSearchOptions: {
    limit: 8
  },
  permission: () => {
    //console.log(Meteor.userId());
    return true;
  }
});
