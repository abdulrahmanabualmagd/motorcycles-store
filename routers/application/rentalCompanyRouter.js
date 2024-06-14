// Import router from the express package
const router = require("express").Router();

// Import the controller
const rentalCompanyController = require("./../../controllers/application/rentalCompanyController");

// Create
router.post("/", rentalCompanyController.createRentalCompany);
// GetAll
router.get("/", rentalCompanyController.getAllRentalCompanys);
// GetById
router.get("/:id", rentalCompanyController.getRentalCompany);
// Update
router.put("/:id", rentalCompanyController.updateRentalCompany);
// Delete
router.delete("/:id", rentalCompanyController.deleteRentalCompany);

module.exports = router;
