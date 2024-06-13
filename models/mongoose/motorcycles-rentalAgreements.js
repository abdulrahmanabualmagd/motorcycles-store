module.exports = (mongoose) => {
    const motorcycles_rentalAgreementsSchema = new mongoose.Schema(
        {
            motorcycleId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "motorcycles",
            },
            rentalAgreementId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "rentalAgreements",
            },
        },
        {
            timestamps: true,
            collection: "customers",
            collection: "motorcycles_rentalAgreements",
            _id: false,
        }
    );

    //composite unique index
    motorcycles_rentalAgreementsSchema.index(
        { motorcycleId: 1, rentalAgreementId: 1 },
        { unique: true }
    );

    const MotorcyclesRentalAgreement = mongoose.model(
        "MotorcyclesRentalAgreement",
        motorcycles_rentalAgreementsSchema
    );
    return MotorcyclesRentalAgreement;
};
