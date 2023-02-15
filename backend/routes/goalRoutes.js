const express = require("express")
const router = express.Router();
const { getGoals, setGoal, deleteGoals, updateGoals } = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoals).put(protect, updateGoals)


module.exports = router