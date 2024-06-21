// Import router from the express package
const router = require("express").Router();

// Import the controller
const receiptController = require("./../../controllers/application/receiptController");

// Create
router.post("/", receiptController.createReceipt);
// GetAll
router.get("/", receiptController.getAllReceipts);
// GetById
router.get("/:id", receiptController.getReceipt);
// Update
router.put("/:id", receiptController.updateReceipt);
// Delete
router.delete("/:id", receiptController.deleteReceipt);

module.exports = router;
