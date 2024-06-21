module.exports = (mongoose) => {
    const rentalCompanySchema = new mongoose.Schema(
        {
            name: {
                type: String,
                required: true,
                match: /.+/,
            },
            rentalAgreements: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "RentalAgreement",
            }],
        },
        {
            timestamps: true,
            collection: "rentalCompanys",
        }
    );

    const RentalCompany = mongoose.model("RentalCompany", rentalCompanySchema);
    return RentalCompany;
};
