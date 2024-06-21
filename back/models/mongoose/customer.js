module.exports = (mongoose) => {
    const customerSchema = new mongoose.Schema(
        {
            userId: {
                type: String,
                required: true,
                unique: true,
                match: /.+/,
            },
            receipts: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Receipt",
            }],
            rentalAgreements: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "RentalAgreement",
            }],
        },
        {
            timestamps: true,
            collection: "customers",
        }
    );

    const Customer = mongoose.model("Customer", customerSchema);
    return Customer;
};
