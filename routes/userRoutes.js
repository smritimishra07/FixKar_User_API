const express = require('express');
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);    // GET a user by ID
router.post('/createUser/', createUser);
router.patch('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);

module.exports = router;
