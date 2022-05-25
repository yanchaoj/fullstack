require("dotenv").config();
const express = require("express");
const pool = require("./db/conn");
const app = express();
const port=3000;

app.use(express.static("public"));

// app.get("/api/students", (_, res) => {
//   db.query("SELECT * FROM student").then((data) => {
//     res.json(data.rows);
//   });
// });

app.get("/api/users", async (req, res) => {
	try {
		
		const result = await pool.query('SELECT * FROM userinfo')
		
     	res.json(result.rows);
	
	} catch (err) {
		console.error(err);
		res.send("Error " + err);
	}

});

app.get("/api/users/:name", async (req, res) => {
	try {
		
		const result = await pool.query('SELECT * FROM userinfo WHERE name= $1',[req.params.name]);

		res.json(result.rows);
	
	} catch (err) {
		console.error(err);
		res.send("Error " + err);
	}

});

app.post("/api/users", async (req,res)=> {

	try {
		await pool.connect()
		const result = await pool.query('INSERT INTO userinfo (name,task) VALUES ($1,$2)', [req.body.name, req.body.task]) 
		res.json(result.rows);
	}
	    catch (err) {
		console.error(err);
		res.send("Error " + err);
	}
});

app.listen(process.env.PORT, () => {
  console.log(`listening on Port ${process.env.PORT}`);
  console.log(process.env.PORT,process.env.DATABASE_URL);
});
