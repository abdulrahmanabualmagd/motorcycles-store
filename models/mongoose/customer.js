module.exports = (mongoose) => {
    const customerSchema = new mongoose.Schema(
        {
            userId: {
                type: String,
                required: true,
                match: /.+/,
            },
            customerId: {
                type: String,
                required: true,
                match: /.+/,
            },
        },
        {
            timestamps: true,
            collection: "customers",
            _id: false,
        }
    );

    //composite unique index
    customerSchema.index({ userId: 1, customerId: 1 }, { unique: true });

    const Customer = mongoose.model("Customer", customerSchema);
    return Customer;
};
