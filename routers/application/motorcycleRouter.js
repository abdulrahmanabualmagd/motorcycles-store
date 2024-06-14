// Import router from the express package
const router = require("express").Router();

// Import the controller
const motorcycleController = require("./../../controllers/application/motorcycleController");

// Create
router.post("/", motorcycleController.createMotorcycle);
// GetAll
router.get("/", motorcycleController.getAllMotorcycles);
// GetById
router.get("/:id", motorcycleController.getMotorcycle);
// Update
router.put("/:id", motorcycleController.updateMotorcycle);
// Delete
router.delete("/:id", motorcycleController.deleteMotorcycle);

module.exports = router;
