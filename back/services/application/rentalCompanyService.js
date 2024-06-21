/*
    Services Responsible for database access and return results to controllers 
*/

// Import the Database
const { dbApplication } = require("./../../config/database");

// Add RentalCompany
exports.createRentalCompany = async (data) => {
    try {
        const db = await dbApplication;
        return await db.RentalCompany.repo.create(data);
    } catch (err) {
        throw err;
    }
};

// Get By Id
exports.getRentalCompany = async (id) => {
    try {
        const db = await dbApplication;
        return await db.RentalCompany.repo.getById(id);
    } catch (err) {
        throw err;
    }
};

// Get All
exports.getAllRentalCompanys = async () => {
    try {
        const db = await dbApplication;
        return await db.RentalCompany.repo.getAll();
    } catch (err) {
        throw err;
    }
};

// Update RentalCompany
exports.updateRentalCompany = async (id, data) => {
    try {
        const db = await dbApplication;
        return await db.RentalCompany.repo.update(id, data);
    } catch (err) {
        throw err;
    }
};

// Delete RentalCompany
exports.deleteRentalCompany = async (id) => {
    try {
        const db = await dbApplication;
        return await db.RentalCompany.repo.delete({where: {id : id}});
    } catch (err) {
        throw err;
    }
};
