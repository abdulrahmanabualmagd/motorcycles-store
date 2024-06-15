/*
    Services Responsible for database access and return results to controllers 
*/

// Import the Database
const { dbApplication } = require("./../../config/database");

// Add Motorcycle
exports.createMotorcycle = async (data) => {
    try {
        const db = await dbApplication;
        return await db.Motorcycle.repo.create(data);
    } catch (err) {
        throw err;
    }
};

// Get By Id
exports.getMotorcycle = async (id) => {
    try {
        const db = await dbApplication;
        return await db.Motorcycle.repo.getById(id);
    } catch (err) {
        throw err;
    }
};

// Get All
exports.getAllMotorcycles = async () => {
    try {
        const db = await dbApplication;
        return await db.Motorcycle.repo.getAll();
    } catch (err) {
        throw err;
    }
};

// Update Motorcycle
exports.updateMotorcycle = async (id, data) => {
    try {
        const db = await dbApplication;
        return await db.Motorcycle.repo.update(id, data);
    } catch (err) {
        throw err;
    }
};

// Delete Motorcycle
exports.deleteMotorcycle = async (id) => {
    try {
        const db = await dbApplication;
        return await db.Motorcycle.repo.delete({ where: { id: id } });
    } catch (err) {
        throw err;
    }
};
