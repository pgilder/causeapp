import { Meteor } from 'meteor/meteor';
import { Schools } from '../imports/api/schools/schools.js';
import { check } from 'meteor/check';

Meteor.methods({
  updateScore: function (schoolId) {
    check(schoolId, String);
    Schools.update(schoolId, { $inc: { score: 5 }});
  }
});
