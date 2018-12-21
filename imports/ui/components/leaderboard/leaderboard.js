import './leaderboard.html';
import '../schools/school.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { EasySearch } from 'meteor/easy:search';
import { Schools } from '../../../api/schools/schools.js';
import { SchoolsIndex } from '../../../api/schools/schools_index.js';
import { $ } from 'meteor/jquery';
import '/imports/css/ui/leaderboard/leaderboard.css';

Template.leaderboard.helpers({
	inputAttributes: function () {
		return { 'class': 'easy-search-input', 'placeholder': 'For example "Yale University"' };
	},
	schools: function () {
		return Schools.find({}, { sort: { score: -1, name: 1, createdAt: -1, schooldescription: 1, schoolcity: 1, schooldistance: 1, schoolrating:-1 } });
	},
	selectedName: function () {
		var school = SchoolsIndex.config.mongoCollection.findOne({ __originalId: Session.get("selectedSchool") });
		return school && school.name;
	},
	index: function () {
		return SchoolsIndex;
	},
	resultsCount: function () {
		return SchoolsIndex.getComponentDict().get('count');
	},
	showMore: function () {
		return false;
	},
	renderTmpl: () => Template.renderTemplate
});

Template.leaderboard.events({
	'click .inc': function () {
		Meteor.call('updateScore', Session.get("selectedSchool"));
	},
	'change .category-filter': function (e) {
		SchoolsIndex.getComponentMethods()
			.addProps('categoryFilter', $(e.target).val())
		;
	}
});


Template.leaderboard.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Schools.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    Schools.remove(this._id);
  },
});
