const pool = require("../db");
const router = require("express").Router();

// return an array of all clients
router.get('/', async (req, res) => {
    try {
        let response = await pool.query('SELECT * FROM users')
        res.send(response.rows)
    } catch (e) {
        res.status(500).send(e)
    }
})



router.post('/create', async (req, res) => {
    const { password, email } = req.body
    try {
        const newUserRes = await pool.query(`
        INSERT INTO users (password, email, time_created)
        VALUES ($1,$2,$3) RETURNING id,email`,
            [password, email, new Date()])
        const newUser = newUserRes.rows[0]
        res.send(newUser)
    } catch (e) {
        
        res.status(500).send(e)
    }
    
})


module.exports = router;