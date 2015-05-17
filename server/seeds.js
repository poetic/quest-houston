Meteor.startup(function(){
  var preserveDb = Quests.find().count() > 0;
  if (preserveDb) {
    return;
  }

  var location;
  var quest1Locations = [];
  var quest2Locations = [];
  var quest3Locations = [];

  location = Locations.insert({
    name: "8 Wonder Brew",
    url: "http://8thwonderbrew.com/",
    address: "2202 Dallas St, Houston, TX 77003",
    geolocation: {
      lat: 29.748776,
      long: -95.355942,
    }
  });
  quest1Locations.push(location);

  location = Locations.insert({
    name: "No Label",
    url: "http://nolabelbrew.com/",
    address: "5351 1st St Katy, TX 77493",
    geolocation: {
      lat: 29.785976,
      long: -95.814136,
    }
  });
  quest1Locations.push(location);

  location = Locations.insert({
    name: "Saint Arnold",
    url: "www.saintarnold.com/",
    address: "2000 Lyons Ave Houston, TX 77020",
    geolocation: {
      lat: 29.7714249,
      long: -95.3486299,
    }
  });
  quest1Locations.push(location);

  location = Locations.insert({
    name: "Buffalo Bayou",
    url: "buffbrew.com",
    address: "5301 Nolda St, Houston, TX 77007",
    geolocation: {
      lat: 29.775965,
      long: -95.416088,
    }
  });
  quest1Locations.push(location);

  location = Locations.insert({
    name: "Karbach",
    url: "karbachbrewing.com",
    address: "2032 Karbach St, Houston, TX 77092",
    geolocation: {
      lat: 29.805991,
      long: -95.460715,
    }
  });
  quest1Locations.push(location);

  location = Locations.insert({
    name: "Southern Star",
    url: "southernstarbrewing.com",
    address: "1207 N FM 3083 Rd E, Conroe, TX 77303",
    geolocation: {
      lat: 30.346211,
      long: -95.432487,
    }
  });
  quest1Locations.push(location);

  location = Locations.insert({
    name: "Brooklyn Athletic Club",
    url: "thebrooklynathleticclub.com",
    address: "601 Richmond Ave, Houston, TX 77006",
    geolocation: {
      lat: 29.734293,
      long: -95.387222,
    }
  });
  quest2Locations.push(location);

  location = Locations.insert({
    name: "Hubcap Grill",
    url: "hubcapgrill.com",
    address: "1111 Prairie, Houston, TX 77002",
    geolocation: {
      lat: 29.760118,
      long: -95.360568,
    }
  });
  quest2Locations.push(location);

  location = Locations.insert({
    name: "Petrol Station",
    url: "",
    address: "985 Wakefield Dr, Houston, TX 77018",
    geolocation: {
      lat: 29.821291,
      long: -95.424452,
    }
  });
  quest2Locations.push(location);

  location = Locations.insert({
    name: "Stanton’s City Bites",
    url: "www.stantonscitybites.com",
    address: "1420 Edwards St, Houston, TX 77007",
    geolocation: {
      lat: 29.770945,
      long: -95.372128,
    }
  });
  quest2Locations.push(location);

  location = Locations.insert({
    name: "El Real",
    url: "elrealtexmex.com",
    address: "1201 Westheimer Rd, Houston, TX 77006",
    geolocation: {
      lat: 29.74435,
      long: -95.393022,
    }
  });
  quest2Locations.push(location);

  location = Locations.insert({
    name: "BRC GastroPub",
    url: "www.brcgastropub.com",
    address: "519 Shepherd Dr, Houston, TX 77007",
    geolocation: {
      lat: 29.767224,
      long: -95.409727,
    }
  });
  quest2Locations.push(location);

  location = Locations.insert({
    name: "Beavers",
    url: "beavershouston.com",
    address: "2310 Decatur St, Houston, TX 77007",
    geolocation: {
      lat: 29.7672,
      long: -95.382224,
    }
  });
  quest2Locations.push(location);

  location = Locations.insert({
    name: "Lankford Grocery",
    url: "www.lankfordgrocery.com",
    address: "88 Dennis St, Houston, TX 77006",
    geolocation: {
      lat: 29.750013,
      long: -95.383893,
    }
  });
  quest2Locations.push(location);

  location = Locations.insert({
    name: "Shepherd Park",
    url: "www.shepherdparktx.com",
    address: "3402 N Shepherd Dr, Houston, TX 77018",
    geolocation: {
      lat: 29.81762,
      long: -95.409858,
    }
  });
  quest2Locations.push(location);

  location = Locations.insert({
    name: "Houston Astrodome",
    url: "",
    address: "8400 Kirby Drive, Houston, Texas, 77054",
    geolocation: {
      lat: 29.6847238,
      long: -95.409003,
    }
  });
  quest3Locations.push(location);

  location = Locations.insert({
    name: "NASA Johnson Space Center",
    url: "spacecenter.org",
    address: "2101 Nasa Pkwy, Houston, TX 77058",
    geolocation: {
      lat: 29.5519,
      long: -95.092404,
    }
  });
  quest3Locations.push(location);

  location = Locations.insert({
    name: "Houston Technology Center",
    url: "www.houstontech.org",
    address: "410 Pierce St, Houston, TX 77002",
    geolocation: {
      lat: 29.752002,
      long: -95.37551,
    }
  });
  quest3Locations.push(location);

  location = Locations.insert({
    name: "San Jacinto Monument",
    url: "http://www.sanjacinto-museum.org/Monument/",
    address: "The San Jacinto Monument, 1 Monument Cir La Porte, TX",
    geolocation: {
      lat: 29.7518045,
      long: -95.08467,
    }
  });
  quest3Locations.push(location);

  location = Locations.insert({
    name: "Bayou Bend Collection",
    url: "https://www.mfah.org/visit/bayou-bend-collection-and-gardens/",
    address: "5201 Memorial Dr, Houston, TX 77007",
    geolocation: {
      lat: 29.7617745,
      long: -95.4139944,
    }
  });
  quest3Locations.push(location);

  location = Locations.insert({
    name: "Water Wall",
    url: "http://www.uptown-houston.com/news/page/water-wall-park",
    address: "2800 Post Oak Blvd, Houston, TX 77056",
    geolocation: {
      lat: 29.7372353,
      long: -95.4631868,
    }
  });
  quest3Locations.push(location);

  location = Locations.insert({
    name: "Beer Can House",
    url: "www.beercanhouse.org",
    address: "222 Malone St, Houston, TX 77007",
    geolocation: {
      lat: 29.763752,
      long: -95.419066,
    }
  });
  quest3Locations.push(location);

  location = Locations.insert({
    name: "Giant Beatles Statue",
    url: "http://365thingsinhouston.com/2013/09/03/houston-beatles-statues-houston-president-heads-adickes-sculpturworx-studio-location/",
    address: "2500 Summer Street Houston, TX 77007",
    geolocation: {
      lat: 29.7734365,
      long: -95.3847242,
    }
  });
  quest3Locations.push(location);

  var quest1 = Quests.insert({
    createdAt: new Date(),
    name: "Downing some Brew",
    categoryName: 'Food & Drinks',
    locationIds: quest1Locations,
    image: 'quest-biking-trails.jpg'
  });
  var quest2 = Quests.insert({
    createdAt: new Date(),
    name: "Bitin' on Burgers",
    categoryName: 'Food & Drinks',
    locationIds: quest2Locations,
    image: 'quest-burgers.jpg'
  });
  var quest3 = Quests.insert({
    createdAt: new Date(),
    name: "8 Houston Wonders",
    categoryName: 'Landmarks',
    locationIds: quest3Locations,
    image: 'quest-8-wonders.jpg'
  });
});
