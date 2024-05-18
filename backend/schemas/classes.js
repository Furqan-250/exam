var mongoose = require("mongoose");

var classesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    // section: {
    //   type: String,
    //   required: true,
    //   // unique: true,
    // },
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
    // name : {
    //   type : String,
    //   required : true,
    // },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "adminModel",
    },
  },
  {
    timestamps: {},
  }
);

module.exports = classesSchema;
