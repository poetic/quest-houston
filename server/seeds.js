Meteor.startup(function(){
  var q = Meteor.questHelper;
  if(Badges.find().count() < 1)
    seedBadges();

  var preserveDb = Quests.find().count() > 0;
  if (preserveDb) {
    return;
  }

  addBreweryQuest(q);
  addBurgerQuest(q);
  addWondersQuest(q);
  addTestQuest(q);

});

function addBreweryQuest(q){
  q.clear();
  // chain the quest insert function to the quest builder helper
  q.addLocation(insertLocationGetUuid("8 Wonder Brew", "http://8thwonderbrew.com",
                                   "2202 Dallas St, Houston, TX 77003", 29.748776, -95.355942,
                                  "We are applying our craft in a dome-like warehouse located in the shadow of the Houston skyline in East Downtown. Using only the freshest ingredients of the highest quality, each batch of beer we brew undergoes strict flavor analysis and quality control. 8th Wonder: it's the 1 you want.",
                                  "Food & Drinks"));

  q.addLocation(insertLocationGetUuid("No Label", "http://nolabelbrew.com/",
                                  "5351 1st St Katy, TX 77493", 29.785976, -95.814136,
                                  "No Label Brewing Co. truly began one sunny Saturday afternoon in the spring of 2009. The Royo family was sitting on the back porch enjoying some of Brian’s homebrew. After many pints, the conversation turned to the possibility of opening our own brewery. Although none of us had any experience running a brewery, we decided to give it a try.",
                                  "Food & Drinks"));

  q.addLocation(insertLocationGetUuid("Saint Arnold", "www.saintarnold.com/",
                                  "2000 Lyons Ave Houston, TX 77020", 29.7714249, -95.3486299,
                                  "The Saint Arnold Brewing Company is a brewery in Houston, Texas, USA, named after a patron saint of brewing, Saint Arnulf of Metz. It was founded in 1994 by Brock Wagner and Kevin Bartol, graduates of Rice University. The brewery offers tours every weekday & Saturday afternoons which have attracted a large following. Saint Arnold has won numerous national and international awards.",
                                  "Food & Drinks"));

  q.addLocation(insertLocationGetUuid("Buffalo Bayou", "buffbrew.com",
                                  "5301 Nolda St, Houston, TX 77007", 29.775965, -95.416088,
                                  "Buffalo Bayou Brewing Company is a new twist on an old craft. With creativity as our main goal, we subscribe to our own definitions regarding brewing parameters and guidelines, without sacrificing flavor or consistency.",
                                  "Food & Drinks"));

  q.addLocation(insertLocationGetUuid("Karbach", "karbachbrewing.com",
                                  "2032 Karbach St, Houston, TX 77092", 29.805991, -95.460715,
                                  "Our background is in the beer biz.  Everything from distribution and importing to German training and brewery operations.  A few years ago we had an opportunity that would allow us to open up our own brewery.  We jumped on it.",
                                  "Food & Drinks"));

  q.addLocation(insertLocationGetUuid("Southern Star", "southernstarbrewing.com",
                                  "1207 N FM 3083 Rd E, Conroe, TX 77303", 30.346211, -95.432487,
                                  "We started production March 2008. Contrary to popular belief, the first beer we ever brewed was our Pine Belt Pale Ale. Shortly after, we added Bombshell Blonde and Buried Hatchet Stout to the list of year round releases.",
                                  "Food & Drinks"));
  // insert quest into database
  q.insertToMongo("Downing some Brew", "Food & Drinks", "../brews.jpg");
}

function addBurgerQuest(q){
  q.clear();
  q.addLocation(insertLocationGetUuid("Brooklyn Athletic Club", "thebrooklynathleticclub.com",
                                  "601 Richmond Ave, Houston, TX 77006", 29.734293, -95.387222,
                                  "Try the Clubhouse Burger!",
                                  "Food & Drinks"));

  q.addLocation(insertLocationGetUuid("Hubcap Grill", "hubcapgrill.com",
                                  "1111 Prairie, Houston, TX 77002", 29.760118, -95.360568,
                                  "Voted the best burger in Houston by Houstonians!",
                                  "Food & Drinks"));

  q.addLocation(insertLocationGetUuid("Petrol Station", "",
                                  "985 Wakefield Dr, Houston, TX 77018", 29.821291, -95.424452,
                                  "This burger is substantial.",
                                  "Food & Drinks"));

  q.addLocation(insertLocationGetUuid("Stanton’s City Bites",  "www.stantonscitybites.com",
                                  "1420 Edwards St, Houston, TX 77007", 29.770945, -95.372128,
                                  "Every single bite is an explosion of textures, temperature, and flavor.",
                                  "Food & Drinks"));

  q.addLocation(insertLocationGetUuid("El Real",  "elrealtexmex.com",
                                  "1201 Westheimer Rd, Houston, TX 77006", 29.74435, -95.393022,
                                  "The flavors in the burger are really great.",
                                  "Food & Drinks"));

  q.addLocation(insertLocationGetUuid("BRC GastroPub",  "www.brcgastropub.com",
                                  "519 Shepherd Dr, Houston, TX 77007", 29.767224, -95.409727,
                                  "Cooked to juicy perfection.",
                                  "Food & Drinks"));

  q.addLocation(insertLocationGetUuid("Beavers",  "beavershouston.com",
                                  "2310 Decatur St, Houston, TX 77007", 29.7672, -95.382224,
                                  "This burger is HUGE!",
                                  "Food & Drinks"));

  q.addLocation(insertLocationGetUuid("Lankford Grocery",  "www.lankfordgrocery.com",
                                  "88 Dennis St, Houston, TX 77006", 29.750013, -95.383893,
                                  "If you're interested in 'licking the volcano out of Flavortown'",
                                  "Food & Drinks"));

  q.addLocation(insertLocationGetUuid("Shepherd Park",  "www.shepherdparktx.com",
                                  "3402 N Shepherd Dr, Houston, TX 77018", 29.81762, -95.409858,
                                  "Stylish burger spot.",
                                  "Food & Drinks"));

  q.insertToMongo("Bitin' on Burgers", "Food & Drinks", '../quest-burgers.jpg');
}

function addWondersQuest(q){
  q.clear();
  q.addLocation(insertLocationGetUuid("Houston Astrodome", "",
                                  "8400 Kirby Drive, Houston, Texas, 77054", 29.6847238, -95.409003,
                                  "Check it out during the Houston Rodeo",
                                  "Landmark"));
  q.addLocation(insertLocationGetUuid("NASA Johnson Space Center", "spacecenter.org",
                                  "2101 Nasa Pkwy, Houston, TX 77058", 29.5519, -95.092404,
                                  "Take a tour of Mission Control",
                                  "Landmark"));
  q.addLocation(insertLocationGetUuid("Houston Technology Center", "www.houstontech.org",
                                  "410 Pierce St, Houston, TX 77002", 29.752002, -95.37551,
                                  "Hackathon 2015!",
                                  "Landmark"));
  q.addLocation(insertLocationGetUuid("San Jacinto Monument", "http://www.sanjacinto-museum.org/Monument/",
                                  "The San Jacinto Monument, 1 Monument Cir La Porte, TX", 29.7518045, -95.08467,
                                  "Check out the observation floor.",
                                  "Landmark"));
  q.addLocation(insertLocationGetUuid("Bayou Bend Collection", "https://www.mfah.org/visit/bayou-bend-collection-and-gardens/",
                                  "5201 Memorial Dr, Houston, TX 77007", 29.7617745, -95.4139944,
                                  "Bayou Bend is the MFAH house museum for American decorative arts and paintings.",
                                  "Landmark"));
  q.addLocation(insertLocationGetUuid("Water Wall", "http://www.uptown-houston.com/news/page/water-wall-park",
                                  "2800 Post Oak Blvd, Houston, TX 77056", 29.7372353, -95.4631868,
                                  "The Hines Waterwall Park, surrounded by 186 live oak trees.",
                                  "Landmark"));
  q.addLocation(insertLocationGetUuid("Beer Can House", "www.beercanhouse.org",
                                  "222 Malone St, Houston, TX 77007", 29.763752, -95.419066,
                                  "This house is uncanny.",
                                  "Landmark"));
  q.addLocation(insertLocationGetUuid("Giant Beatles Statue", "http://365thingsinhouston.com/2013/09/03/houston-beatles-statues-houston-president-heads-adickes-sculpturworx-studio-location/",
                                  "2500 Summer Street Houston, TX 77007", 29.7734365, -95.3847242,
                                  "All you need is love.",
                                  "Landmark"));

  q.insertToMongo("8 Houston Wonders", 'Landmarks', '../quest-8-wonders.jpg');
}

// insert your own gps object here for local testing
function addTestQuest(q){

  var poetic = {
    lat: 29.761565099999995,
    long: -95.4791111
  }

  var myHouse = {
    lat: 30.0102269,
    long: -95.46955
  }

  q.clear();
  for(var x = 0; x < 8; x++){
    q.addLocation(insertLocationGetUuid("testLocation", "1",
                                  "1", myHouse.lat, myHouse.long,
                                  "location for testing badges",
                                  "Testing"));
  }

  q.insertToMongo("Test Locations", 'Testing', '../quest-8-wonders.jpg');
}

function seedBadges(){
  Badges.insert({
    name: "Hackers Society",
    image: "../hacker-badge.png"
  });
  Badges.insert({
    name: "First Location",
    image: "../badges/firstlocation.png"
  });
  Badges.insert({
    name: "Five Locations",
    image: "../badges/5locations.png"
  });


}
// create a location and return its uuid
function insertLocationGetUuid(name, url, address, lat, long, description){
  var uuid = Locations.insert({
    name: name,
    url: url,
    address: address,
    geolocation: {
      lat: lat,
      long: long
    },
    description: description
  });
  return uuid;
}

// function addNonAttatchedLoctions(){
//   location = Locations.insert({
//     name: "8 Wonder Brew",
//     url: "http://8thwonderbrew.com/",
//     address: "2202 Dallas St, Houston, TX 77003",
//     geolocation: {
//       lat: 29.748776,
//       long: -95.355942,
//     },
//     description: "We are applying our craft in a dome-like warehouse located in the shadow of the Houston skyline in East Downtown. Using only the freshest ingredients of the highest quality, each batch of beer we brew undergoes strict flavor analysis and quality control. 8th Wonder: it's the 1 you want."
//   });

//   location = Locations.insert({
//     name: "MAM'S House of Ice",
//     url: "http://www.mamshouseofice.com/",
//     address: "1040 W Cavalcade St, Houston, TX 77009",
//     geolocation: {
//       lat: 29.8041317,
//       long: -95.3860254,
//     },
//     description: "This location needs a description."
//   });

//   location = Locations.insert({
//     name: "Boheme Cafe & Wine Bar",
//     url: "http://barboheme.com",
//     address: "307 Fairview St, Houston, TX 77006",
//     geolocation: {
//       lat: 29.748067,
//       long: -95.386061,
//     },
//     description: "This location needs a description."
//   });

//   location = Locations.insert({
//     name: "Battlefield Houston",
//     url: "http://www.battlefieldhouston.com/",
//     address: "11755 W. Little York, Ste 202 Houston, TX 77041",
//     geolocation: {
//       lat: 29.8662,
//       long: -95.584677,
//     },
//     description: "This location needs a description."
//   });

//   location = Locations.insert({
//     name: "Improv",
//     url: "http://www.improvhouston.com/",
//     address: "7620 Katy Fwy #455, Houston, TX 77024",
//     geolocation: {
//       lat: 29.785414,
//       long: -95.584677,
//     },
//     description: "This location needs a description."
//   });

//   location = Locations.insert({
//     name: "Yard",
//     url: "http://www.yardhouse.com/",
//     address: "800 Sorella Ct, Citycentre Plaza, Houston, TX 77024",
//     geolocation: {
//       lat: 29.779956,
//       long: -95.584677,
//     },
//     description: "This location needs a description."
//   });

//   location = Locations.insert({
//     name: "House of Blues",
//     url: "http://www.houseofblues.com/",
//     address: "Houston Pavilions, 1204 Caroline St, Houston, TX 77002",
//     geolocation: {
//       lat: 29.753929,
//       long: -95.364056,
//     },
//     description: "This location needs a description."
//   });

//   location = Locations.insert({
//     name: "House of Blues",
//     url: "http://www.houseofblues.com/",
//     address: "Houston Pavilions, 1204 Caroline St, Houston, TX 77002",
//     geolocation: {
//       lat: 29.753929,
//       long: -95.364056,
//     },
//     description: "This location needs a description."
//   });

//   location = Locations.insert({
//     name: "Siphon Coffee",
//     url: "http://siphoncoffee.com",
//     address: "701 W Alabama St Houston, TX 77006",
//     geolocation: {
//       lat: 29.738537,
//       long: -95.388335,
//     },
//     description: "This location needs a description."
//   });

//   location = Locations.insert({
//     name: "iFly Indoor Skydiving",
//     url: "https://houston.iflyworld.com/",
//     address: "9540 Katy Fwy , Houston, TX 77055",
//     geolocation: {
//       lat: 29.817178,
//       long: -95.4012915,
//     },
//     description: "This location needs a description."
//   });

//   location = Locations.insert({
//     name: "Brasil",
//     url: "http://cafe-brasil.net/",
//     address: "2604 Dunlavy St., Houston TX 77006",
//     geolocation: {
//       lat: 29.74256,
//       long: -95.402257,
//     },
//     description: "This location needs a description."
//   });

//   location = Locations.insert({
//     name: "Bayou Bend Collection and Gardens",
//     url: "http://www.mfah.org/visit/bayou-bend-collection-and-gardens/",
//     address: "6003 Memorial Drive, Houston TX 77007",
//     geolocation: {
//       lat: 29.760527,
//       long: -95.42178,
//     },
//     description: "This location needs a description."
//   });

//   location = Locations.insert({
//     name: "Crave Cupcakes",
//     url: "http://cravecupcakes.com",
//     address: "UpTown Park, 1151 Uptown Park Blvd #06, Houston, TX 77056",
//     geolocation: {
//       lat: 29.757603,
//       long: -95.456627,
//     },
//     description: "This location needs a description."
//   });

//   location = Locations.insert({
//     name: "Tiger Den",
//     url: "",
//     address: "9889 Bellaire Blvd Houston, TX 77036",
//     geolocation: {
//       lat: 29.703616,
//       long: -95.55318,
//     },
//     description: "This location needs a description."
//   });

//   location = Locations.insert({
//     name: "Culinan Park",
//     url: "http://cullinanparkconservancy.org/",
//     address: "S Texas 6, Sugar Land, TX 77498",
//     geolocation: {
//       lat: 29.6113427,
//       long: -95.6598411
//     },
//     description: "This location needs a description."
//   });

//   location = Locations.insert({
//     name: "Ruggles Green",
//     url: "http://rugglesgreen.com",
//     address: "748 E 11th St, Houston, TX 77008",
//     geolocation: {
//       lat: 29.790565,
//       long: -95.388023
//     },
//     description: "This location needs a description."
//   });

//   location = Locations.insert({
//     name: "Yes KTV",
//     url: "http://www.yesktv.net/",
//     address: "9889 Bellaire Blvd., #126, Houston 77036",
//     geolocation: {
//       lat: 29.703597,
//       long: -95.554317
//     },
//     description: "This location needs a description."
//   });

//   location = Locations.insert({
//     name: "Thai Lanna Restaurant",
//     url: "http://www.thailanna.net/",
//     address: "1714 West Loop North, Houston TX 77008",
//     geolocation: {
//       lat: 29.813633,
//       long: -95.378678
//     },
//     description: "This location needs a description."
//   });

//   location = Locations.insert({
//     name: "Thai Lanna Restaurant",
//     url: "http://maishouston.com/",
//     address: "3403 Milam Street, Houston TX 77002",
//     geolocation: {
//       lat: 29.741172,
//       long: -95.379736
//     },
//     description: "This location needs a description."
//   });

//   location = Locations.insert({
//     name: "Thai Lanna Restaurant",
//     url: "http://maishouston.com/",
//     address: "3403 Milam Street, Houston TX 77002",
//     geolocation: {
//       lat: 29.741172,
//       long: -95.379736
//     },
//     description: "This location needs a description."
//   });

//   location = Locations.insert({
//     name: "Top Golf",
//     url: "http://topgolf.com/us/houston-west/",
//     address: "1030 Memorial Brook Blvd Houston, TX 77084",
//     geolocation: {
//       lat: 29.7866907,
//       long: -95.6501272
//     },
//     description: "This location needs a description."
//   });

// name: Brasserie19
// url: http://brasserie19.com/
// address: 1962 West Gray, Houston TX 77019
// geolocation: 29.753468,-95.407279

// name: "Del Frisco's"
// url: "http://delfriscos.com/"
// address: "5061 Westheimer Rd, Suite 8060"
// geolocation: lat: 29.740131, long: -95.464174

// name: George Bush Park (Bike/Hike/Jogging Trails)
// url: http://www.pct3.hctx.net/parks/georgebush.aspx
// address: 16756 Westheimer Parkway, Houston, TX 77082
// geolocation: @29.722663,-95.696046

// name: "Menil Collection"
// url: "https://www.menil.org"
// address: "1533 Sul Ross Street Houston, Texas 77006"
// geolocation: lat: 29.737185, long: -95.3948682

// name: "Burger Palace",
// url: "http://www.burgerpalacehouston.com/",
// address: "2800 Sage Road #1100 Houston, TX 77056",
// geolocation: 29.7373319,-95.4675229,

// name: Sunfired Foods
// url:
// address: 4915 Martin Luther King Jr Blvd, Houston, TX 77021
// geolocation: @29.707466,-95.334935
// }
