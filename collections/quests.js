var QuestVoteSchema = new SimpleSchema({
  userId: {
    type: String,
  },
  positive: {
    type: Boolean,
  }
});

var QuestSchema = new SimpleSchema({
  url: {
    type: String,
  },
  description: {
    type: String,
  },
  locationIds: {
    type: [String],
  },
  votes: {
    type: [QuestVoteSchema],
    optional: true
  }
});

Quests = new Mongo.Collection('quests');
Quests.attachSchema(QuestSchema);
