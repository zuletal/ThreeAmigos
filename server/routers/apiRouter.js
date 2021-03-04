const router = require("express").Router();
const usersRouter = require('./usersRouter')
const reportsRouter = require('./reportsRouter')
router.use('/reports', reportsRouter)
router.use('/users', usersRouter)
module.exports = router;