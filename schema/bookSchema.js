const { Schema, model } = require("mongoose");

const addBookSchema = new Schema(
  {
    bookName: {
      type: String,
      require: true,
    },
    totalPage: {
      type: Number,
      require: true,
    },
    autherName: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    offerPrice: {
      type: Number,
      require: true,
    },
    discreption: {
      type: String,
      require: true,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = model("addBookSchema", addBookSchema);
