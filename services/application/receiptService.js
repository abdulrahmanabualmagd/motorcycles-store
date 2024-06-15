/*
    Services Responsible for database access and return results to controllers 
*/

// Import the Database
const { dbApplication } = require("./../../config/database");

// Add Receipt
exports.createReceipt = async (data) => {
    try {
        const db = await dbApplication;
        return await db.Receipt.repo.create(data);
    } catch (err) {
        throw err;
    }
};

// Get By Id
exports.getReceipt = async (id) => {
    try {
        const db = await dbApplication;
        return await db.Receipt.repo.getById(id);
    } catch (err) {
        throw err;
    }
};

// Get All
exports.getAllReceipts = async () => {
    try {
        const db = await dbApplication;
        return await db.Receipt.repo.getAll();
    } catch (err) {
        throw err;
    }
};

// Update Receipt
exports.updateReceipt = async (id, data) => {
    try {
        const db = await dbApplication;
        return await db.Receipt.repo.update(id, data);
    } catch (err) {
        throw err;
    }
};

// Delete Receipt
exports.deleteReceipt = async (id) => {
    try {
        const db = await dbApplication;
        return await db.Receipt.repo.delete({where: {id : id}});
    } catch (err) {
        throw err;
    }
};
