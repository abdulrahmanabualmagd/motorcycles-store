// Import router from the express package
const router = require("express").Router();

// Import the controller
const customerController = require("./../../controllers/application/customerController");

// Create
router.post("/", customerController.createCustomer);
// GetAll
router.get("/", customerController.getAllCustomers);
// GetById
router.get("/:id", customerController.getCustomer);
// Update
router.put("/:id", customerController.updateCustomer);
// Delete
router.delete("/:id", customerController.deleteCustomer);

module.exports = router;
