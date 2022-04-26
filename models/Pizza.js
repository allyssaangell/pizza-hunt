const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const PizzaSchema = new Schema(
  {
    pizzaName: {
<<<<<<< HEAD
      type: String,
    },
    createdBy: {
      type: String,
=======
      type: String
    },
    createdBy: {
      type: String
>>>>>>> develop
    },
    createdAt: {
      type: Date,
      default: Date.now,
<<<<<<< HEAD
      get: (createdAtVal) => dateFormat(createdAtVal)
    },
    size: {
      type: String,
      default: "Large",
=======
      get: createdAtVal => dateFormat(createdAtVal)
    },
    size: {
      type: String,
      default: 'Large'
>>>>>>> develop
    },
    toppings: [],
    comments: [
      {
        type: Schema.Types.ObjectId,
<<<<<<< HEAD
        ref: "Comment",
      },
    ],
=======
        ref: 'Comment'
      }
    ]
>>>>>>> develop
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
<<<<<<< HEAD
    id: false,
=======
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
>>>>>>> develop
  }
);

// get total count of comments and replies on retrieval
<<<<<<< HEAD
PizzaSchema.virtual("commentCount").get(function () {
=======
PizzaSchema.virtual('commentCount').get(function() {
>>>>>>> develop
  return this.comments.length;
});

const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;