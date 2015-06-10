// The quest helper is an interface that will build you a quest object
// based on locations passed and then insert them into the database when
// requested
//
// addLocation expects a uuid of a location already inserted into the database
//
// insertToMongo expects the quest name, categoryName, and image (path) respectively


Meteor.startup(function(){

  Meteor.questHelper = (function(){

    // Interface to return helper functions
    var Interface = {};
    // Locations array to hold the ids of the locations for this quest
    var locations = [];
    // Append a location to the locations array
    Interface.addLocation = function(locationId){
      locations.push(locationId);
    };

    // accept an array of uuids to initialize locations as
    Interface.addAllAsArray = function(arr){
      locations = arr;
    };

    // Insert the quest into the database using the locations array
    Interface.insertToMongo = function(name, categoryName, image){
      Quests.insert({
        createdAt: new Date(),
        name: name,
        categoryName: categoryName,
        locationIds: locations,
        image: image
      });
    };

    // clear out the locations array
    Interface.clear = function(){
      locations = [];
    };

    // return all public functions
    return Interface;

  })();

});
