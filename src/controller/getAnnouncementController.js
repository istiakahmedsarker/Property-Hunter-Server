const Announcements = require('../schema/announcementModel');

async function getAnnouncements(req, res) {
    try {
        // Fetch announcements from the database
        const announcements = await Announcements.find();

        // Check if there are no announcements
        if (announcements.length === 0) {
            return res.status(404).json({ message: 'No announcements found' });
        }

        // Send the announcements as a JSON response
        res.json(announcements);
    } catch (error) {
        // Handle errors, log them, and send a 500 Internal Server Error response
        console.error('Error fetching announcements:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { getAnnouncements };
