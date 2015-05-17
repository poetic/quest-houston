var QuestVoteSchema = new SimpleSchema({
  userId: {
    type: String,
  },
  positive: {
    type: Boolean,
  }
});

var QuestSchema = new SimpleSchema({
  description: {
    type: String,
    optional: true
  },
  locationIds: {
    type: [String],
  },
  createdAt: {
    type: Date,
  },
  votes: {
    type: [QuestVoteSchema],
    optional: true
  },
  categoryName: {
    type: String,
    optional: true
  },
  name: {
    type: String
  },
  image: {
    type: String
  }
});

Quests = new Mongo.Collection('quests');
Quests.attachSchema(QuestSchema);
