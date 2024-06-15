module.exports = (mongoose) => {
    const rentalAgreementSchema = new mongoose.Schema(
        {
            rentalAmount: {
                type: Number,
                required: true,
            },
            customer: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Customer",
                default: null,
            },
            rentalCompany: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "RentalCompany",
                default: null,
            },
            motorcycles: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Motorcycle",
                },
            ],
        },
        {
            timestamps: true,
            collection: "rentalAgreements",
        }
    );

    const RentalAgreement = mongoose.model("RentalAgreement", rentalAgreementSchema);
    return RentalAgreement;
};
