module.exports = (mongoose) => {
    const rentalCompanySchema = new mongoose.Schema(
        {
            name: {
                type: String,
                required: true,
                match: /.+/,
            },
        },
        {
            timestamps: true,
            collection: "rentalCompanys",
        }
    );

    const RentalCompany = mongoose.model("RentalCompany", rentalCompanySchema);
    return RentalCompany;
};
