/*
    Services Responsible for database access and return results to controllers 
*/

// Import the Database
const { dbApplication } = require("./../../config/database");

// Add RentalAgreement
exports.createRentalAgreement = async (data) => {
    try {
        // Check for data input
        const { rentalAmount, customerId, rentalCompanyId, motorcyclesId } =
            data;
        if (!rentalAmount || !customerId || !rentalCompanyId || !motorcyclesId)
            throw Error("Missing Requirements");

        // Get Database Instance
        const db = await dbApplication;

        // Create rentalAgreement
        const rentalAgreement = await db.RentalAgreement.repo.create({
            rentalAmount,
            customerId,
            rentalCompanyId,
        });

        // Create All motorcycles associate it to the rentalAgreement
        motorcycles_rentalAgreementsData = [];
        for (let item of motorcyclesId) {
            motorcycles_rentalAgreementsData.push(
                new db.MotorcyclesRentalAgreement({
                    motorcycleId: item,
                    rentalAgreementId: rentalAgreement._id,
                })
            );
        }

        // Create motorcycles-rentalAgreements
        const motorcycles_rentalAgreements =
            await db.MotorcyclesRentalAgreement.repo.createAll(motorcycles_rentalAgreementsData);

        return { rentalAgreement, rentalAgreement };
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
            include: ["customerId", "rentalCompanyId"],
        });
        // Check that rentalAgreement exists
        if (!rentalAgreement) throw Error("RentalAgreement not found");
        // Get All motorCycles with specidified rentalAgreementId
        const motorcycles = await db.MotorcyclesRentalAgreement.repo.getOne({
            where: { rentalAgreementId: rentalAgreement._id },
            include: ["motorcyclesId"],
        });
        // Get all motorcycles, make sure that the receipt have more than one motorccle
    } catch (err) {
        throw err;
    }
};

// Get All
exports.getAllRentalAgreements = async () => {
    try {
        const db = await dbApplication;
        return await db.RentalAgreement.repo.getAll();
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
