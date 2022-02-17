const mongoose = require('mongoose')
module.exports.Transaction = mongoose.model(
    "transaction",
    mongoose.Schema(
        {
            UUID: String,
            balance: Number,
            transport_fare: Number,
            new_balance: Number,
        },
        {timestamps: true}
    )
);