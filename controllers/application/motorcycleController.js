/*
    This layer only responsible for responses, the services are responsible for the databbase access
*/

// Import the Receipt Service

// Receipt Crud Operation 
exports.createReceipt = async (req, res) => {
    try {
        const receipt = await receiptService.createReceipt(req.body);
        res.status(201).json(receipt);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getReceipt = async (req, res) => {
    try {
        const receipt = await receiptService.getReceipt(req.params.id);
        if (!receipt) {
            return res.status(404).json({ message: 'Receipt not found' });
        }
        res.status(200).json(receipt);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllReceipts = async (req, res) => {
    try {
        const receipts = await receiptService.getAllReceipts();
        res.status(200).json(receipts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateReceipt = async (req, res) => {
    try {
        const receipt = await receiptService.updateReceipt(req.params.id, req.body);
        if (!receipt) {
            return res.status(404).json({ message: 'Receipt not found' });
        }
        res.status(200).json(receipt);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteReceipt = async (req, res) => {
    try {
        const receipt = await receiptService.deleteReceipt(req.params.id);
        if (!receipt) {
            return res.status(404).json({ message: 'Receipt not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
