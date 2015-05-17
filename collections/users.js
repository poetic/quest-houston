var UserQuestSchema = new SimpleSchema({
  id: {
    type: String,
  },
  completed: {
    type: Boolean,
    optional: true
  },
  visited: {
    type: Boolean,
    optional: true
  }
});

var UserProfileSchema = new SimpleSchema({
});

var UserSchema = new SimpleSchema({
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/,
        optional: true
    },
    emails: {
        type: [Object],
        // this must be optional if you also use other login services like facebook,
        // but if you use only accounts-password, then it can be required
        optional: true
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: UserProfileSchema,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // Option 2: [String] type
    // If you are sure you will never need to use role groups, then
    // you can specify [String] as the type
    roles: {
        type: [String],
        optional: true
    },
    quests: {
       type: [UserQuestSchema],
       optional: true
    },
    score: {
       type: Number,
       decimal: false,
       optional: true
    },
    image: {
       type: String,
       optional: true
    }
});

Meteor.users.attachSchema(UserSchema);
