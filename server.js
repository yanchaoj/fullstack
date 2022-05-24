require("dotenv").config();
const express = require("express");
const pool = require("./db/conn");
const app = express();

app.use(express.static("public"));

// app.get("/api/students", (_, res) => {
//   db.query("SELECT * FROM student").then((data) => {
//     res.json(data.rows);
//   });
// });

app.get("/api/users", async (req, res) => {
	try {
		// const client = await pool.connect();
		const result = await pool.query('SELECT * FROM userinfo'); 
		//  WHERE id = $1',[req.params.id]);

		res.json(result.rows);
		// client.release();
	} catch (err) {
		console.error(err);
		res.send("Error " + err);
	}

});

app.listen(process.env.PORT, () => {
  console.log(`listening on Port ${process.env.PORT}`);
  console.log(process.env.PORT,process.env.DATABASE_URL);
});
