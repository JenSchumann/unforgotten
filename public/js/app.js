// console.log('too much pride about having an unsinkable ship is not a good thing!');

const app = angular.module('TitanicApp', []);

////////////////////////////////////////////////////////////

//Titanic controller

////////////////////////////////////////////////////////////


app.controller('SunkController', ['$scope', function($scope){
  const controller = this;
  // this.ship = "Why didn't they pull more souls from the water?";
  this.filter = {};
  this.toggleView = function(){
    //this hides value for Class not name.. troubleshooting
    // const hideView = document.getElementById("propDisplay").style.visibility = "hidden";
    //
  }

  this.toggleNameChip = function(){
    document.getElementById("displayName").style.visibility = "hidden";
  }

  this.toggleClassChip = function(){
    document.getElementById("displayClass").style.visibility = "hidden";
  }

  this.toggleAgeChip = function(){
    document.getElementById("displayAge").style.visibility = "hidden";
  }

  this.toggleGenderChip = function(){
    document.getElementById("displayGender").style.visibility = "hidden";
  }

  this.toggleSurvivorChip = function(){
    document.getElementById("displaySurvival").style.visibility = "hidden";
  }



  this.victimsList = [
    {Class: '1st', Age: 29, Gender: 'female', Survivor: 'yes', Name: [{first: 'Elisabeth', last: 'Allen', maiden: 'Allen', title: 'Miss'}]},

    {Class: '1st', Age: 2, Gender: 'female', Survivor: 'no', Name: [{first: 'Helen', last: 'Allison', maiden: 'Allison', title: 'Miss'}]},

    {Class: '1st', Age: 30, Gender: 'male', Survivor: 'no', Name: [{first: 'Hudson Joshua Creighton', last: 'Allison', maiden: 'NA', title: 'Mr'}]},

    {Class: '1st', Age: 25, Gender: 'female', Survivor: 'no', Name: [{first: 'Bessie Waldo', last: 'Allison', maiden: 'Daniels', title: 'Mrs'}]},

    {Class: '1st', Age: 0.92, Gender: 'male', Survivor: 'no', Name: [{first: 'Hudson Trevor', last: 'Allison', maiden: 'NA', title: 'Master'}]},

    {Class: '1st', Age: 47, Gender: 'male', Survivor: 'yes', Name: [{first: 'Harry', last: 'Anderson', maiden: 'NA', title: 'Mr'}]},

    {Class: '1st', Age: 63, Gender: 'female', Survivor: 'yes', Name: [{first: 'Kornelia Theodosia', last: 'Andrews', maiden: 'Andrews', title: 'Miss'}]},

    {Class: '1st', Age: 39, Gender: 'male', Survivor: 'no', Name: [{first: 'Thomas', last: 'Andrews', maiden: 'NA', title: 'Jr'}]}
  ]

app.filter('strictRecurrentFilter', function($filter) {
  var strictComparator; // Very strict comparator to get very strict results
  strictComparator = function(actual, expected) {
    var objKey;
    if (actual && expected && actual instanceof Array && expected instanceof Array) {
      for (var arrIdx in actual) {
        if (strictComparator(actual[arrIdx], expected[0])) return true;
      }
    } else if (actual && expected && typeof actual === "object" && typeof expected === "object") {
      for (objKey in actual) {
        if (objKey.charAt(0) !== "$" && hasOwnProperty.call(actual, objKey) && strictComparator(actual[objKey], expected[objKey])) {
          return true;
        }
      }
      return false;
    }
    return angular.equals(actual, expected);
  };
  // Use standard filter with our strict comparator
  return function(array, expression) {
    return $filter('filter')(array, expression, strictComparator);
  };
});


  this.filterByProperties = function(victimsList) {
    const activeFilterProps = Object.keys(controller.filter).filter(function (prop) {
      return !noFilter(controller.filter[prop]); });

      return activeFilterProps.
      every(function (prop) {
        return controller.filter[prop]
        [victimsList[prop]];
      });
  }

  this.getValuesFor = function(prop) {
    return (this.victimsList || []).map(function (victimsList) {
      return victimsList[prop]}).filter(function (value, idx, arr) {
        return arr.indexOf(value) === idx});
    }

    function noFilter(filterObj) {
      return Object.keys(filterObj).every(function (key) {
        return !filterObj[key];
      });
    }

}]); //end of SunkController
