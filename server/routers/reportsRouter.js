const pool = require("../db");
const router = require("express").Router();


router.get('/latest', async (req, res) => {
    console.log('test')
    try {
        const latestRes = await pool.query(`
        SELECT s.name AS station_name, 
        s.id as station_id, l.time
        FROM stations s
        LEFT JOIN 
		    (SELECT r.time,r.station_id from reports r
            INNER JOIN
                (SELECT station_id, Max(time) FROM reports 
                GROUP BY station_id) i
            ON i.max = r.time AND i.station_id = r.station_id) l
        ON s.id = l.station_id`)
        const latest = latestRes.rows
        console.log(latest)
        res.json(latest)
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

module.exports = router;