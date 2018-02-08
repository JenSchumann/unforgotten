// console.log('too much pride about having an unsinkable ship is not a good thing!');

const app = angular.module('TitanicApp', []);

////////////////////////////////////////////////////////////

//Titanic controller

////////////////////////////////////////////////////////////


app.controller('SunkController', ['$http', '$scope', function($http, $scope){
  const controller = this;
  this.ship = "Why didn't they pull more souls from the water?";
  this.filter = {};



  //I usually store data in a model file
  $scope.victims = [
    // {
    //   text: "first and last name",
    //   info: [
    //     {
    //       text: "PClass"
    //     },
    //     {
    //       text: "Age"
    //     },
    //     {
    //       text: "Sex",
    //       info: [
    //         { text: "sexCode" },
    //         { text: "Mr/Mrs/Miss/Dr"},
    //       ]
    //     },
    //     {
    //       text: "Survived"
    //     },
    //   ]
    // },

    {
          text: "Elisabeth Walton Allen",
          info: [
            {
              text: "1st"
            },
            {
              text: "29",
            },
            {
              text: "female",
              info: [
                { text: "1" },
                { text: "Miss"},
              ]
            },
            {
              text: "1"
            },
          ]
        },

        {
          text: "Helen Loraine Allison",
          info: [
            {
              text: "1st"
            },
            {
              text: "2",
            },
            {
              text: "female",
              info: [
                { text: "1" },
                { text: "Miss"},
              ]
            },
            {
              text: "0"
            },
          ]
        },

        {
          text: "Hudson Joshua Creighton Allison",
          info: [
            {
              text: "1st"
            },
            {
              text: "30",
            },
            {
              text: "male",
              info: [
                { text: "0" },
                { text: "Mr"},
              ]
            },
            {
              text: "0"
            },
          ]
        },

        {
          text: "Bessie Waldo Daniels Allison",
          info: [
            {
              text: "1st"
            },
            {
              text: "25",
            },
            {
              text: "female",
              info: [
                { text: "1" },
                { text: "Mrs"},
              ]
            },
            {
              text: "0"
            },
          ]
        },

        {
          text: "Hudson Trevor Allison",
          info: [
            {
              text: "1st"
            },
            {
              text: "0.92",
            },
            {
              text: "male",
              info: [
                { text: "0" },
                { text: "Master"},
              ]
            },
            {
              text: "1"
            },
          ]
        },

        {
          text: "Harry Anderson",
          info: [
            {
              text: "1st"
            },
            {
              text: "47",
            },
            {
              text: "male",
              info: [
                { text: "0" },
                { text: "Mr"},
              ]
            },
            {
              text: "0"
            },
          ]
        },

        {
          text: "Kornelia Theodosia Andrews",
          info: [
            {
              text: "1st"
            },
            {
              text: "63",
            },
            {
              text: "female",
              info: [
                { text: "1" },
                { text: "Miss"},
              ]
            },
            {
              text: "1"
            },
          ]
        },

        {
          text: "Thomas Andrews Jr",
          info: [
            {
              text: "1st"
            },
            {
              text: "39",
            },
            {
              text: "male",
              info: [
                { text: "0" },
                { text: "Mr"},
              ]
            },
            {
              text: "0"
            },
          ]
        },

        {
          text: "Charlotte Lamson Appleton",
          info: [
            {
              text: "1st"
            },
            {
              text: "58",
            },
            {
              text: "female",
              info: [
                { text: "1" },
                { text: "Mrs"},
              ]
            },
            {
              text: "1"
            },
          ]
        },

        {
          text: "Ramon Artagaveytia",
          info: [
            {
              text: "1st"
            },
            {
              text: "71",
            },
            {
              text: "male",
              info: [
                { text: "0" },
                { text: "Mr"},
              ]
            },
            {
              text: "0"
            },
          ]
        },

        {
          text: "John Jacob Astor",
          info: [
            {
              text: "1st"
            },
            {
              text: "47",
            },
            {
              text: "male",
              info: [
                { text: "0" },
                { text: "Colonel"},
              ]
            },
            {
              text: "0"
            },
          ]
        },

        {
          text: "Madeleine Talmadge Force Astor",
          info: [
            {
              text: "1st"
            },
            {
              text: "19",
            },
            {
              text: "female",
              info: [
                { text: "1" },
                { text: "Mrs"},
              ]
            },
            {
              text: "1"
            },
          ]
        },

        {
          text: "Leontine Pauline Aubert",
          info: [
            {
              text: "1st"
            },
            {
              text: "NA",
            },
            {
              text: "female",
              info: [
                { text: "1" },
                { text: "Mrs"},
              ]
            },
            {
              text: "1"
            },
          ]
        },

        {
          text: "Algernon H Barkworth",
          info: [
            {
              text: "1st"
            },
            {
              text: "NA",
            },
            {
              text: "male",
              info: [
                { text: "0" },
                { text: "Mr"},
              ]
            },
            {
              text: "1"
            },
          ]
        },

        {
          text: "John D Baumann",
          info: [
            {
              text: "1st"
            },
            {
              text: "NA",
            },
            {
              text: "male",
              info: [
                { text: "0" },
                { text: "Mr"},
              ]
            },
            {
              text: "0"
            },
          ]
        },

        {
          text: "Helene DeLaudeniere Chaput Baxter",
          info: [
            {
              text: "1st"
            },
            {
              text: "50",
            },
            {
              text: "female",
              info: [
                { text: "1" },
                { text: "Mrs"},
              ]
            },
            {
              text: "1"
            },
          ]
        },

        {
          text: "Quigg Edmond Baxter",
          info: [
            {
              text: "1st"
            },
            {
              text: "24",
            },
            {
              text: "male",
              info: [
                { text: "0" },
                { text: "Mr"},
              ]
            },
            {
              text: "0"
            },
          ]
        },

        {
          text: "Thomson Beattie",
          info: [
            {
              text: "1st"
            },
            {
              text: "36",
            },
            {
              text: "male",
              info: [
                { text: "0" },
                { text: "Mr"},
              ]
            },
            {
              text: "0"
            },
          ]
        },

        {
          text: "Richard Leonard Beckwith",
          info: [
            {
              text: "1st"
            },
            {
              text: "37",
            },
            {
              text: "male",
              info: [
                { text: "0" },
                { text: "Mr"},
              ]
            },
            {
              text: "1"
            },
          ]
        },

        {
          text: "Sallie Monypeny Beckwith",
          info: [
            {
              text: "1st"
            },
            {
              text: "47",
            },
            {
              text: "female",
              info: [
                { text: "1" },
                { text: "Mrs"},
              ]
            },
            {
              text: "1"
            },
          ]
        },

        {
          text: "Karl Howell Behr",
          info: [
            {
              text: "1st"
            },
            {
              text: "26",
            },
            {
              text: "male",
              info: [
                { text: "0" },
                { text: "Mr"},
              ]
            },
            {
              text: "1"
            },
          ]
        },

        {
          text: "Jakob Birnbaum",
          info: [
            {
              text: "1st"
            },
            {
              text: "25",
            },
            {
              text: "male",
              info: [
                { text: "0" },
                { text: "Mr"},
              ]
            },
            {
              text: "0"
            },
          ]
        },

        {
          text: "Dickinson H Bishop",
          info: [
            {
              text: "1st"
            },
            {
              text: "25",
            },
            {
              text: "male",
              info: [
                { text: "0" },
                { text: "Mr"},
              ]
            },
            {
              text: "1"
            },
          ]
        },

        {
          text: "Helen Walton Bishop",
          info: [
            {
              text: "1st"
            },
            {
              text: "19",
            },
            {
              text: "female",
              info: [
                { text: "1" },
                { text: "Mrs"},
              ]
            },
            {
              text: "1"
            },
          ]
        }

  ]

  this.victimsList = [
    {Name: [{first: 'a', last: 'aa', maiden: 'aaa', title: 'mrs'}], Class: '1st', Age: 2, Gender: 'female', Survivor: 'no'},

    {Name: [{first: 'b', last: 'bb', maiden: 'bbb', title: 'mr'}], Class: '2nd', Age: 19, Gender: 'male', Survivor: 'yes'},

    {Name: [{first: 'c', last: 'cc', maiden: 'ccc', title: 'miss'}], Class: '3rd', Age: 46, Gender: 'female', Survivor: 'no'},

    {Name: [{first: 'd', last: 'dd', maiden: 'ddd', title: 'master'}], Class: '1st', Age: 67, Gender: 'male', Survivor: 'yes'},

    {Name: [{first: 'e', last: 'ee', maiden: 'eee', title: 'miss'}], Class: '2nd', Age: 34, Gender: 'female', Survivor: 'no'},

    {Name: [{first: 'f', last: 'ff', maiden: 'fff', title: 'colonel'}], Class: '3rd', Age: 22, Gender: 'male', Survivor: 'yes'}
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
        return arr.indexOf(value) === idx; });
    }

    function noFilter(filterObj) {
      return Object.keys(filterObj).every(function (key) {
        return !filterObj[key];
      });
    }




}]); //end of SunkController
