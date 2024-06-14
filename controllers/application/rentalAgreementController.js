/*
    Controllers only responsible for the final responses, the services are responsible for the databbase access
*/

// Import the RentalAgreement Service
const rentalAgreementService = require("./../../services/application/rentalAgrementService");


// RentalAgreement Crud Operation
exports.createRentalAgreement = async (req, res) => {
    try {
        const rentalAgreement = await rentalAgreementService.createRentalAgreement(req.body);
        res.status(201).json(rentalAgreement);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRentalAgreement = async (req, res) => {
    try {
        const rentalAgreement = await rentalAgreementService.getRentalAgreement(req.params.id);
        if (!rentalAgreement) {
            return res.status(404).json({ message: "RentalAgreement not found" });
        }
        res.status(200).json(rentalAgreement);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllRentalAgreements = async (req, res) => {
    try {
        const rentalAgreements = await rentalAgreementService.getAllRentalAgreements();
        res.status(200).json(rentalAgreements);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateRentalAgreement = async (req, res) => {
    try {
        const rentalAgreement = await rentalAgreementService.updateRentalAgreement(req.params.id, req.body);
        if (!rentalAgreement) {
            return res.status(404).json({ message: "RentalAgreement not found" });
        }
        res.status(200).json(rentalAgreement);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteRentalAgreement = async (req, res) => {
    try {
        const rentalAgreement = await rentalAgreementService.deleteRentalAgreement(req.params.id);
        if (!rentalAgreement) {
            return res.status(404).json({ message: "RentalAgreement not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
