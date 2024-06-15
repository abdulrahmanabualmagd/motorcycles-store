/*
    Services Responsible for database access and return results to controllers 
*/

// Import the Database
const { dbApplication } = require("./../../config/database");

// Add Customer
exports.createCustomer = async (data) => {
    try {
        const db = await dbApplication;
        return await db.Customer.repo.create(data);
    } catch (err) {
        throw err;
    }
};

// Get By Id
exports.getCustomer = async (id) => {
    try {
        const db = await dbApplication;
        return await db.Customer.repo.getById(id);
    } catch (err) {
        throw err;
    }
};

// Get All
exports.getAllCustomers = async () => {
    try {
        const db = await dbApplication;
        return await db.Customer.repo.getAll();
    } catch (err) {
        throw err;
    }
};

// Update Customer
exports.updateCustomer = async (id, data) => {
    try {
        const db = await dbApplication;
        return await db.Customer.repo.update(id, data);
    } catch (err) {
        throw err;
    }
};

// Delete Customer
exports.deleteCustomer = async (id) => {
    try {
        const db = await dbApplication;
        return await db.Customer.repo.delete({where: {id : id}});
    } catch (err) {
        throw err;
    }
};
