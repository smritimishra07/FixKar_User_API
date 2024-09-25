const Notification = require('../models/notificationModel');

// Get notifications for a user
const getNotifications = async (req, res) => {
  const { userId } = req.params;

  try {
    const notifications = await Notification.find({ userId });
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching notifications', error: err.message });
  }
};

// Create a new notification
const createNotification = async (req, res) => {
  const { userId, message } = req.body;

  try {
    const newNotification = new Notification({ userId, message });
    const savedNotification = await newNotification.save();
    res.status(201).json(savedNotification);
  } catch (err) {
    res.status(400).json({ message: 'Error creating notification', error: err.message });
  }
};

// Mark notification as read
const markAsRead = async (req, res) => {
  const { notificationId } = req.params;

  try {
    const updatedNotification = await Notification.findByIdAndUpdate(
      notificationId,
      { isRead: true },
      { new: true }
    );

    if (!updatedNotification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.status(200).json(updatedNotification);
  } catch (err) {
    res.status(400).json({ message: 'Error marking notification as read', error: err.message });
  }
};

// Delete a notification
const deleteNotification = async (req, res) => {
    const { notificationId } = req.params;

    try {
        const deletedNotification = await Notification.findByIdAndDelete(notificationId);
        if (!deletedNotification) {
            return res.status(404).json({ message: 'Notification not found' });
        }
        res.status(200).json({ message: 'Notification deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting notification', error: err.message });
    }
};

module.exports = {
  getNotifications,
  createNotification,
  markAsRead,
  deleteNotification,
};
