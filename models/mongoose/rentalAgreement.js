module.exports = (mongoose) => {
    const rentalAgreementSchema = new mongoose.Schema(
        {
            rentalAmount: {
                type: Number,
                required: true,
            },
            customerId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "customers",
            },
            motorcycleId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "motorcycles",
            },
            rentalCompanyId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "rentalCompanys",
            },
        },
        {
            timestamps: true,
            collection: "rentalAgreements",
        }
    );

    const RentalAgreement = mongoose.model(
        "RentalAgreement",
        rentalAgreementSchema
    );
    return RentalAgreement;
};
