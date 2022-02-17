const mongoose = require('mongoose')
module.exports.Card = mongoose.model(
      "card",
      mongoose.Schema(
        {
          owner: String,
          UUID: {
            type: String,
            unique: true
          },
          balance: Number,
        },
        { timestamps: true },
      )
    );