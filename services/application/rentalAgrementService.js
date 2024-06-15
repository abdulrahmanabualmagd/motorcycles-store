/*
    Services Responsible for database access and return results to controllers 
*/

// Import the Database
const { dbApplication } = require("./../../config/database");

// Add RentalAgreement
exports.createRentalAgreement = async (data) => {
    try {
        // Check for data input
        const { rentalAmount, customer, rentalCompany, motorcycles } = data;
        if (!rentalAmount || !customer || !rentalCompany || !motorcycles) throw Error("Missing Requirements");

        // Get Database Instance
        const db = await dbApplication;

        // get the customer
        const customerResult = await db.Customer.repo.getById(customer);
        if (!customerResult) throw Error("Motorcyles not found");

        // get the rentalCompany
        const rentalCompanyResult = await db.RentalCompany.repo.getById(rentalCompany);
        if (!rentalCompanyResult) throw Error("RentalCompany not found");

        // get the motorcycles
        const motorcyclesResult = await db.Motorcycle.repo.getByIds(motorcycles);
        if (motorcyclesResult.length === 0) throw Error("Motorcyles not found");

        // Create rentalAgreement
        const rentalAgreementCreateResult = await db.RentalAgreement.repo.create(data);

        // Add renatlAgreement Id to the customer renatAgreements list
        customerResult.rentalAgreements.push(rentalAgreementCreateResult._id);
        await customerResult.save();

        // Add rentalAgreement Id to the rentalCompany renatAgreements list
        rentalCompanyResult.rentalAgreements.push(rentalAgreementCreateResult._id);
        await rentalCompanyResult.save();

        // Add rentalAgreement Id to all found motorcycles renatAgreement
        for (let item of motorcyclesResult) {
            item.rentalAgreement = rentalAgreementCreateResult._id;
            await item.save();
        }

        return { rentalAgreement: rentalAgreementCreateResult };
    } catch (err) {
        throw err;
    }
};

// Get By Id
exports.getRentalAgreement = async (id) => {
    try {
        const db = await dbApplication;
        // get the rentalAgreement first
        const rentalAgreement = await db.RentalAgreement.repo.getById(id, {
            include: ["customer", "rentalCompany", "motorcycles"],
        });

        // Check that rentalAgreement exists
        if (!rentalAgreement) throw Error("RentalAgreement not found");
        // Get All motorCycles with specidified rentalAgreementId
        const motorcyclesId = await db.MotorcyclesRentalAgreement.repo.getAll({
            where: { rentalAgreementId: rentalAgreement._id },
            include: [["customer", "rentalCompany", "motorcycles"]],
        });

        const motorcycles = motorcyclesId.map((item) => item.motorcycleId);

        // Attach motorcycles to rental agreement document
        // _doc => contains the actual data for the document retrievced from the database
        rentalAgreement._doc.motorcycles = motorcycles;

        return rentalAgreement._doc;
    } catch (err) {
        throw err;
    }
};

// Get All
exports.getAllRentalAgreements = async () => {
    try {
        const db = await dbApplication;
        return await db.RentalAgreement.repo.getAll({ include: ["customer", "rentalCompany", "motorcycles"] });
    } catch (err) {
        throw err;
    }
};

// Update RentalAgreement
exports.updateRentalAgreement = async (id, data) => {
    try {
        const db = await dbApplication;
        return await db.RentalAgreement.repo.update(id, data);
    } catch (err) {
        throw err;
    }
};

// Delete RentalAgreement
exports.deleteRentalAgreement = async (id) => {
    try {
        const db = await dbApplication;
        return await db.RentalAgreement.repo.delete({ where: { id: id } });
    } catch (err) {
        throw err;
    }
};
