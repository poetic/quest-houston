var LocationGeolocationSchema = new SimpleSchema({
  lat: {
    type: String,
  },
  long: {
    type: String,
  }
});

var LocationSchema = new SimpleSchema({
  geolocation: {
    type: LocationGeolocationSchema,
  },
  description: {
    type: String,
  }
});

Locations = new Mongo.Collection('locations');
Locations.attachSchema(LocationSchema);
