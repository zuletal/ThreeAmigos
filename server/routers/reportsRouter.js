const pool = require("../db");
const router = require("express").Router();

router.post("/add", async (req, res) => {
    const { stationID, userID } = req.body;
    const time = Math.round(Date.now()/1000)
    try {
        const addReportRes = await pool.query(
            `
        INSERT INTO reports (station_id, user_id, time) VALUES ($1, $2, $3) RETURNING id
        `,
            [stationID, userID, time]
        );
        const reportID = addReportRes.rows[0].id;
        res.json(reportID);
    } catch (e) {
        res.sendStatus(500)
        console.log(e)
    }
});
router.get('/station/:stationID', async (req, res) => {
    const { stationID } = req.params

    try {
        const stationRes = await pool.query(`
        SELECT * FROM reports WHERE station_id = ${stationID}
        `)
        res.json(stationRes.rows.reverse().slice(0,4))
    } catch {
        res.sendStatus(500)
    }
})
router.get("/latest", async (req, res) => {
    console.log("test");
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
        console.log(e);
        res.status(500).send(e);
    }
});

module.exports = router;
