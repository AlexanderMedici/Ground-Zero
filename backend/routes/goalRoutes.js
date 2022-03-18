const express = require( "express" )
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoal  } = require("../controllers/goalController")


// Chained Router for GET and POST requests 
router.route( "/" ).get( getGoals ).post( setGoal )

// Chained Router for DELETE and UPDATE requests 
router.route("/:id").delete(deleteGoal).put(updateGoal)




module.exports = router