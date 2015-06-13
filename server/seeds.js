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
  addBlueMuseumQuest(q);
  addWondersQuest(q);
  addTestQuest(q);
  addYellowQuest(q);

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

function addBlueMuseumQuest(q){
  q.clear();
  q.addLocation(insertLocationGetUuid("Buffalo Soldiers National Museum", "http://houmuse.com/visit/buffalo-soldiers-national-museum/",
                                      "3816 Caroline St., Houston, TX 77004", 29.735929, -95.378047,
                                      "African American history & American history as well",
                                      "Museum"));
  q.addLocation(insertLocationGetUuid("DiverseWorks", "http://houmuse.com/visit/diverseworks/",
                                      "4102 Fannin, Suite 200 Houston, TX 77004", 29.735929,-95.378047,
                                      "visual performing and literary art.",
                                      "Museum" ));
  q.addLocation(insertLocationGetUuid("Houston Museum of African American Culture", "http://houmuse.com/visit/houston-museum-of-african-american-culture/",
                                      "4807 Caroline Street Houston, TX 77004", 29.729548,-95.382409,
                                      "Explore through the lens of the African American experience.",
                                      "Museum" ));
  q.addLocation(insertLocationGetUuid("Czech Center Museum Houston", "http://houmuse.com/visit/czech-center-museum-houston/",
                                      "4920 San Jacinto St. Houston, TX 77004", 29.728944,-95.384915,
                                      "View rich cultural abundance of a major Slavic ethnic group",
                                      "Museum"));
  q.addLocation(insertLocationGetUuid("Lawndale Art Center", "http://houmuse.com/visit/lawndale-art-center/",
                                      "4912 Main Street Houston, TX 77002", 29.729871,-95.386595,
                                      "Houston that is dedicated to the presentation of contemporary art",
                                      "Museum" ));
  q.addLocation(insertLocationGetUuid("Houston Center for Contemporary Craft", "http://houmuse.com/visit/houston-center-for-contemporary-craft/",
                                      "4848 Main Street Houston, TX 77002", 29.730596,-95.386075,
                                      "Advance education about the process product and history of craft",
                                      "Museum" ));
  q.addLocation(insertLocationGetUuid("Asia Society Texas Center", "http://houmuse.com/visit/asia-society-texas-center/",
                                      "1370 SOUTHMORE BLVD. HOUSTON, TEXAS 77004", 29.726302, -95.384557,
                                      "Enriching programs and events within the pillars of arts and culture.",
                                      "Museum"));
  q.addLocation(insertLocationGetUuid("Holocaust Museum Houston", "http://houmuse.com/visit/holocaust-museum-houston/",
                                      "5401 Caroline St. Houston, TX 77004", 29.725048, -95.385665,
                                      "Dedicated to educating people about the Holocaust",
                                      "Museum"));
  q.insertToMongo("Gaining Culture", "Museums", '../houston-museums.jpg');
}
function addWondersQuest(q){
  q.clear();
  q.addLocation(insertLocationGetUuid("Houston Astrodome", "nrgpark.com/nrg-astrodome",
                                  "8400 Kirby Drive, Houston, Tx 77054", 29.6847238, -95.409003,
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

function addYellowQuest(q){
  q.clear();
  q.addLocation(insertLocationGetUuid("Rice Gallery", "www.ricegallery.org/",
                                  "6100 Main Street Houston, TX 77005", 29.718289, -95.397678,
                                  "The only university museum devoted to site-specific installation art",
                                  "Museum"));
  q.addLocation(insertLocationGetUuid("Houston Zoo", "www.houstonzoo.org/",
                                  "6200 Hermann Park Dr. Houston, TX 77030", 29.7133186, -95.3918304,
                                  "The Houston Zoo provides a fun and inspirational experience fostering appreciation for the natural world.",
                                  "Museum"));
  q.addLocation(insertLocationGetUuid("Houston Museum of Natural Science", "www.hmns.org/",
                                  "5555 Hermann Park Dr. Houston, TX 77030", 29.7220535, -95.3898499,
                                  "Over a dozen permanent exhibit areas that examine astronomy, space, science, paleontology, wildlife, and more.",
                                  "Museum"));
  q.addLocation(insertLocationGetUuid("The Health Museum", "www.thehealthmuseum.org/index.aspx",
                                  "1515 Hermann Dr. Houston, TX 77004", 29.721698, -95.38599,
                                  "An interactive science center using multi-media and special effects technology.",
                                  "Museum"));
  q.addLocation(insertLocationGetUuid("Children’s Museum of Houston", "www.cmhouston.org/",
                                  "1500 Binz St. Houston, TX 77004", 29.722658, -95.385141,
                                  "Voted America’s No. 1 Children’s Museum by Parents Magazine",
                                  "Museum"));
  q.insertToMongo("Yellow Museum District", 'Museum', '../zoo.jpg');
}


// insert your own gps object here for local testing
function addTestQuest(q){

  var poetic = {
    lat: 29.761565099999995,
    long: -95.4791111
  };

  var ironYard = {
    lat: 29.735239500000002,
    long: -95.3905418
  };

  var myHouse = {
    lat: 30.0102269,
    long: -95.46955
  };

  q.clear();
  for(var x = 0; x < 8; x++){
    q.addLocation(insertLocationGetUuid("testLocation", "1",
                                  "1", ironYard.lat, ironYard.long,
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
