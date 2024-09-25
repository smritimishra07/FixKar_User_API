const express = require('express');
const {
  getNotifications,
  createNotification,
  markAsRead,
  deleteNotification,
} = require('../controllers/notificationController');

const router = express.Router();

// Get notifications for a specific user
router.get('/user/:userId', getNotifications);

// Create a new notification
router.post('/', createNotification);

// Mark a notification as read
router.patch('/:notificationId/read', markAsRead);

// Delete a notification
router.delete('/:notificationId', deleteNotification);

module.exports = router;
