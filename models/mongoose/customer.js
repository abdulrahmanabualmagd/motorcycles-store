module.exports = (mongoose) => {
    const customerSchema = new mongoose.Schema(
        {
            userId: {
                type: String,
                required: true,
                unique: true,
                match: /.+/,
            },
        },
        {
            timestamps: true,
            collection: "customers",
        }
    );

    const Customer = mongoose.model("Customer", customerSchema);
    return Customer;
};
