var BadgeSchema = new SimpleSchema({
  name: {
    type: String,
  },
  image: {
    type: String,
  }
});

Badges = new Mongo.Collection('badges');
Badges.attachSchema(BadgeSchema);

