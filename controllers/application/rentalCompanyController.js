/*
    Controllers only responsible for the final responses, the services are responsible for the databbase access
*/

// Import the RentalCompany Service

// RentalCompany Crud Operation
exports.createRentalCompany = async (req, res) => {
    try {
        const rentalCompany = await rentalCompanyService.createRentalCompany(req.body);
        res.status(201).json(rentalCompany);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRentalCompany = async (req, res) => {
    try {
        const rentalCompany = await rentalCompanyService.getRentalCompany(req.params.id);
        if (!rentalCompany) {
            return res.status(404).json({ message: "RentalCompany not found" });
        }
        res.status(200).json(rentalCompany);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllRentalCompanys = async (req, res) => {
    try {
        const rentalCompanys = await rentalCompanyService.getAllRentalCompanys();
        res.status(200).json(rentalCompanys);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateRentalCompany = async (req, res) => {
    try {
        const rentalCompany = await rentalCompanyService.updateRentalCompany(req.params.id, req.body);
        if (!rentalCompany) {
            return res.status(404).json({ message: "RentalCompany not found" });
        }
        res.status(200).json(rentalCompany);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteRentalCompany = async (req, res) => {
    try {
        const rentalCompany = await rentalCompanyService.deleteRentalCompany(req.params.id);
        if (!rentalCompany) {
            return res.status(404).json({ message: "RentalCompany not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
