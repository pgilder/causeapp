import { Meteor } from 'meteor/meteor';
import { Schools } from '/imports/api/schools/schools.js';

var first_names = [
      "Ada",
      "Grace",
      "Marie",
      "Carl",
      "Nikola",
      "Claude",
      "Peter",
      "Stefan",
      "Stephen",
      "Lisa",
      "Christian",
      "Barack"
    ],
    last_names = [
      "Lovelace",
      "Hopper",
      "Curie",
      "Tesla",
      "Shannon",
      "Müller",
      "Meier",
      "Miller",
      "Gaga",
      "Franklin"
    ],
    categories = ["Genius", "Geek", "Hipster", "Idler"];
/*
  Meteor.startup(function () {
    if (Schools.find().count() < 100) {
      // ten thousand docs
      for (var i = 0; i < 10 * 1000; i++) {
        console.log(i + ' doc indexed');
        Schools.insert({
          name: Random.choice(first_names) + ' ' + Random.choice(last_names),
          score: Math.floor(Random.fraction() * 1000 / Random.fraction() / 100),
          category: Random.choice(categories)
        });
      }

      console.log('done!');
    }
  });
*/
