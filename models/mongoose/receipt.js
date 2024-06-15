module.exports = (mongoose) => {
    const receiptSchema = new mongoose.Schema(
        {
            totalAmount: {
                type: Number,
                required: true,
            },
            customerId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Customer",
                required: true,
            },
        },
        {
            timestamps: true,
            collection: "receipts",
        }
    );

    const Receipt = mongoose.model("Receipt", receiptSchema);
    return Receipt;
};
