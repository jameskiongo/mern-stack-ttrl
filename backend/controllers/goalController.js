const asyncHandler = require('express-async-handler');
//@desc get all goals
// @route get /api/goals
//@access private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'get goals' })
})
//@desc set a goals
// @route post /api/goals
//@access private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add data')
    }
    res.status(200).json({ "message": "create goals" })
})
//@desc update goals
// @route put /api/goals/:id
//@access private
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ "message": `update goal ${req.params.id}` })
})
//@desc delete goal
// @route delete /api/goals/:id
//@access private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ "message": `delete goal ${req.params.id}` })
})
module.exports = {
    getGoals,
    setGoal,
    updateGoals,
    deleteGoals
}