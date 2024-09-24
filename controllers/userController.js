const User = require('../models/userModel');

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new user
// const createUser = async (req, res) => {
//   const { name, phone, email, location, profilePhoto } = req.body;

//   const newUser = new User({ name, phone, email, location, profilePhoto });

//   try {
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (err) {
//     res.status(400).json();
//   }
// };

const createUser = async (req, res) => {
    const { name, phone, email, location, gender } = req.body;
  
    if (!name || !phone || !email || !location || !gender) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      const newUser = new User({ name, phone, email, location, gender });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(400).json({ message: 'Error saving user', error: err.message });
    }
  };
  

// Update a user
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
