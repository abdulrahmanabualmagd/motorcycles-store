/*
    Services Responsible for database access and return results to controllers 
*/

// Import the Database
const { dbApplication } = require("./../../config/database");

// Customer Crud Operation
exports.createCustomer = async (data) => {
    try {
        
        const db = await dbApplication;
        await db.Customer.repo.create(data);
    } catch (err) {
        throw err;
    }
};

exports.getCustomer = async (id) => {
    // Use mongoose methods to get customer by its Id
};

exports.getAllCustomers = async () => {
    // Use mongoose methods to get customer by its Id
};

exports.updateCustomer = async (id, data) => {
    // Use mongoose methods to update customer
};

exports.deleteCustomer = async (id) => {
    // Use mongoose methods to delete customer by its Id
};
