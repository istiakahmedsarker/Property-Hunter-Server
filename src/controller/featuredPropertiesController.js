// controllers/propertyController.js
const Property = require('../schema/propertyModel');

async function getTopLikedProperties(req, res) {
    try {
        // Find and sort the data by likesCount in descending order
        const filteredProperties = await Property.find().sort({ likesCount: -1 }).limit(7);

        // Send the filtered data to the frontend
        res.json(filteredProperties);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { getTopLikedProperties };
