const { randomStringGenerator } = require("../../utils/randomString");

module.exports = (mongoose) => {
    const motorcycleSchema = new mongoose.Schema(
        {
            price: {
                type: Number,
                required: true,
            },
            status: {
                type: String,
                enum: ["sold", "stock"],
                default: "stock",
            },
            serialNumber: {
                type: String,
                unique: true,
                default: randomStringGenerator,
            },
            receiptId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Receipt",
                default: null
            },
        },
        {
            timestamps: true,
            collection: "motorcycles",
        }
    );

    const Motorcycle = mongoose.model("Motorcycle", motorcycleSchema);
    return Motorcycle;
};
