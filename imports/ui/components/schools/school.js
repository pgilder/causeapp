import './school.html';
import { Template } from 'meteor/templating';
/*
Template.school.helpers({
	selected: function () {
		return Session.equals("selectedSchool", this.__originalId) ? "selected" : '';
	}
});

Template.school.events({
	'click': function () {
		Session.set("selectedSchool", this.__originalId);
	}
});

Template.school.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Schools.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    Schools.remove(this._id);
  },
});*/
