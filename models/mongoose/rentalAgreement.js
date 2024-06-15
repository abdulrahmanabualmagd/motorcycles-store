module.exports = (mongoose) => {
    const rentalAgreementSchema = new mongoose.Schema(
        {
            rentalAmount: {
                type: Number,
                required: true,
            },
            customerId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Customer",
            },
            rentalCompanyId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "RentalCompany",
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
