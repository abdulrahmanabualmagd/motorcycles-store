/*
    Controllers only responsible for the final responses, the services are responsible for the databbase access
*/

// Import the Motorcycle Service
const motorcycleService = require("./../../services/application/motorcycleService");

// Motorcycle Crud Operation
exports.createMotorcycle = async (req, res) => {
    try {
        const motorcycle = await motorcycleService.createMotorcycle(req.body);
        res.status(201).json(motorcycle);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getMotorcycle = async (req, res) => {
    try {
        const motorcycle = await motorcycleService.getMotorcycle(req.params.id);
        if (!motorcycle) {
            return res.status(404).json({ message: "Motorcycle not found" });
        }
        res.status(200).json(motorcycle);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllMotorcycles = async (req, res) => {
    try {
        const motorcycles = await motorcycleService.getAllMotorcycles();
        res.status(200).json(motorcycles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateMotorcycle = async (req, res) => {
    try {
        const motorcycle = await motorcycleService.updateMotorcycle(req.params.id, req.body);
        if (!motorcycle) {
            return res.status(404).json({ message: "Motorcycle not found" });
        }
        res.status(200).json(motorcycle);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteMotorcycle = async (req, res) => {
    try {
        const motorcycle = await motorcycleService.deleteMotorcycle(req.params.id);
        if (!motorcycle) {
            return res.status(404).json({ message: "Motorcycle not found" });
        }
        console.log("motorcycle deleted: " + motorcycle)
        res.status(204).json(motorcycle);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
