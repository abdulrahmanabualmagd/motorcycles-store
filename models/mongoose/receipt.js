module.exports = (mongoose) => {
    const receiptSchema = new mongoose.Schema(
        {
            totalAmount: {
                type: Number,
                required: true,
            },
            customer: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Customer",
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
            collection: "receipts",
        }
    );

    const Receipt = mongoose.model("Receipt", receiptSchema);
    return Receipt;
};
