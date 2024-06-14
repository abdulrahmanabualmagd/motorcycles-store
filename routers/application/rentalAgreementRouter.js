// Import router from the express package
const router = require("express").Router();

// Import the controller
const rentalAgreementController = require("./../../controllers/application/rentalAgreementController");

// Create
router.post("/", rentalAgreementController.createRentalAgreement);
// GetAll
router.get("/", rentalAgreementController.getAllRentalAgreements);
// GetById
router.get("/:id", rentalAgreementController.getRentalAgreement);
// Update
router.put("/:id", rentalAgreementController.updateRentalAgreement);
// Delete
router.delete("/:id", rentalAgreementController.deleteRentalAgreement);

module.exports = router;
