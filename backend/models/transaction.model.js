module.exports = (mongoose) => {
    var schema = mongoose.Schema(
        {
            id: String,
            dateExp : Date,
            status: String,
            
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