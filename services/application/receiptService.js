/*
    Services Responsible for database access and return results to controllers 
*/

// Import the Database
const { dbApplication } = require("./../../config/database");

// Add Receipt
exports.createReceipt = async (data) => {
    try {
        const { customer, totalAmount, motorcycles } = data;
        if (!customer || !totalAmount) throw Error("Missing requirements");

        const db = await dbApplication;

        // get the customer
        const customerResult = await db.Customer.repo.getById(customer);
        if (!customerResult) throw Error("Customer not found");

        // get the motorcycles
        const motorcyclesResult = await db.Motorcycle.repo.getByIds(motorcycles);
        if (!motorcyclesResult) throw Error("Motorcyles not found");

        // Create the Receipt
        const receiptCreateResult = await db.Receipt.repo.create(data);

        // Push the Id of the created Receipt to customer receipts
        customerResult.receipts.push(receiptCreateResult._id);

        // Save customer with the new list of receipts
        await customerResult.save();

        // Add Receipt Id to all found motorcycles
        for (let item of motorcyclesResult) {
            item.receipt = receiptCreateResult._id;
            await item.save();
        }

        return { receiptCreateResult };
    } catch (err) {
        throw err;
    }
};

// Get By Id
exports.getReceipt = async (id) => {
    try {
        const db = await dbApplication;
        return await db.Receipt.repo.getById(id, { include: ["customer", "motorcycles"] });
    } catch (err) {
        throw err;
    }
};

// Get All
exports.getAllReceipts = async () => {
    try {
        const db = await dbApplication;
        return await db.Receipt.repo.getAll({ include: ["customer", "motorcycles"] });
    } catch (err) {
        throw err;
    }
};

// Update Receipt
exports.updateReceipt = async (id, data) => {
    try {
        const db = await dbApplication;

        // customer and motorcycles are not updated here

        return await db.Receipt.repo.update(id, data);
    } catch (err) {
        throw err;
    }
};

// Delete Receipt
exports.deleteReceipt = async (id) => {
    try {
        const db = await dbApplication;

        // delete the receipt from the customer receipt list
        // delete the receipt from the motorcycle receipt

        return await db.Receipt.repo.delete({ where: { id: id } });
    } catch (err) {
        throw err;
    }
};
