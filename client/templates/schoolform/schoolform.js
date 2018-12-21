import { Schools } from '/imports/api/schools/schools.js';
import './schoolform.html';
import '/imports/css/ui/schoolform/schoolform.css';
/*
Template.body.events({
  'submit .new-school'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a task into the collection
    Schools.insert({
      name,
      score,
      schoolrating,
      schooldescription,
      schoolcity,
      schooldistance,
      category,
      //createdAt: new Date() // current time
    });

    // Clear form
    target.text.value = '';
  },
}); */
/*
Schools.insert({
  name: "Berkley2",
  score: 4.9,
  schoolrating: 5.0,
  schooldescription: "Berkley College prestige education",
  schoolcity: "New York",
  schooldistance: 10.3,
  category: "College",
  createdAt: new Date()
});*/


  Template.schoolform.events({
    'submit form': function(event){
    event.preventDefault();
    var schoolnameVar = event.target.name.value;
    var schoolratingVar = event.target.schoolrating.value;
    var schooldescriptionVar = event.target.schooldescription.value;
    var schoolcityVar = event.target.schoolcity.value;
    var schooldistanceVar = event.target.schooldistance.value;
    var schoolcategoryVar = event.target.schoolcategory.value;
    Schools.insert({
        name: schoolnameVar,
        score: schoolratingVar,
        schoolrating: schoolratingVar,
        schooldescription: "schooldescriptionVar",
        schoolcity: "schoolcityVar",
        schooldistance: schooldistanceVar,
        category: "schoolcategoryVar",
        createdAt: new Date()
    });
    }
  });

/*
  Template.addSchoolForm.events({
      'submit form': function(){
          console.log("Form submitted");
      }
  });
*/
