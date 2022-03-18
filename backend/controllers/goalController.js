
// @ Get Goals
// @route Get/api/goals
// @Access private
const getGoals = ( req, res ) => {
    res.status( 200 ).json( { message: "Get Goals router GET " } )
}


// @ Set Goals
// @route POST /api/goals
// @Access private
const setGoal = ( req, res ) => {
    res.status( 200 ).json( { message: "Get Goal in Goal Controller  " } )
}
// @ Update Goals
// @route Put/api/goals/:id
// @Access private
const updateGoal = ( req, res ) => {
  res.status( 200 ).json( { message: `Update goal ${req.params.id}` })
}
// @ Delete Goals
// @route DELETE/api/goals/:id
// @Access private
const deleteGoal = ( req, res ) => {
  res.status( 200 ).json( { message: `Delete goal ${req.params.id}` })
}




module.exports = {
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal,
}