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
        },

    {
      text: "Mauritz Hakan Bjornstrm-Steffansson",
      info: [
        {
          text: "1st"
        },
        {
          text: "28",
        },
        {
          text: "male",

        },
        {
          text: "Yes"
        },
      ]
    },

    {
      text: "Stephen Weart Blackwell",
      info: [
        {
          text: "1st"
        },
        {
          text: "45",
        },
        {
          text: "male",

        },
        {
          text: "No"
        },
      ]
    },

    {
      text: "Henry Blank",
      info: [
        {
          text: "1st"
        },
        {
          text: "39",
        },
        {
          text: "male",

        },
        {
          text: "Yes"
        },
      ]
    },

    {
      text: "Caroline Bonnell",
      info: [
        {
          text: "1st"
        },
        {
          text: "30",
        },
        {
          text: "female",

        },
        {
          text: "Yes"
        },
      ]
    },



  ]

  this.victimsList = [
    // {name: [{first: 'a'}, {last: 'aa'}, {maiden: 'aaa'}, {title: 'mrs'}], {class: '1st'}, {age: 2}, {gender: 'female'}, {survivor: 'no'}},
    //
    // {name: [{first: 'b'}, {last: 'bb'}, {maiden: 'bbb'}, {title: 'mr'}], {class: '2nd'}, {age: 19}, {gender: 'male'}, {survivor: 'yes'}},
    //
    // {name: [{first: 'a'}, {last: 'aa'}, {maiden: 'aaa'}, {title: 'miss'}], {class: '3rd'}, {age: 46}, {gender: 'female'}, {survivor: 'no'}},
    //
    // {name: [{first: 'a'}, {last: 'aa'}, {maiden: 'aaa'}, {title: 'master'}], {class: '1st'}, {age: 67}, {gender: 'male'}, {survivor: 'yes'}},
    //
    // {name: [{first: 'a'}, {last: 'aa'}, {maiden: 'aaa'}, {title: 'miss'}], {class: '2nd'}, {age: 34}, {gender: 'female'}, {survivor: 'no'}},
    //
    // {name: [{first: 'a'}, {last: 'aa'}, {maiden: 'aaa'}, {title: 'colonel'}], {class: '3rd'}, {age: 22}, {gender: 'male'}, {survivor: 'yes'}}

    {name: 'b', title: 'mr', class: '2nd', age: 19, gender: 'female', survivor: 'no'},
    {name: 'c', title: 'miss', class: '3rd', age: 46, gender: 'male', survivor: 'yes'},
    {name: 'd', title: 'master', class: '1st', age: 67, gender: 'female', survivor: 'no'},
    {name: 'e', title: 'colonel', class: '2nd', age: 34, gender: 'male', survivor: 'yes'},
    {name: 'f', title: 'miss', class: '3rd', age: 22, gender: 'female', survivor: 'no'},
  ]



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
      return victimsList[prop]}).filter(function (value, idx, arr) { return arr.indexOf(value) === idx; });
    }

    function noFilter(filterObj) {
      return Object.keys(filterObj).every(function (key) {
        return !filterObj[key];
      });
    }
  // }


}]); //end of SunkController
