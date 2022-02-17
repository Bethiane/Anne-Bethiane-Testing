module.exports = (mongoose) => {
    var schema = mongoose.Schema(
        {
            meterNumber: Number,
            amount:Number
            
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Token = mongoose.model("transaction", schema);
    return Token;
};