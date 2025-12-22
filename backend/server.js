const express = require("express");
const db = require("./src/db/db");
const runMigrations = require("./src/db/migrations/init");

const app = express();
app.use(express.json());

runMigrations();

app.post("/problems", (req, res) => {
    const {title, difficulty, topics, patterns, confidence_level, link} = req.body;
    try {
        const stmt = db.prepare(`
            INSERT INTO problems (title, difficulty, topics, patterns, confidence_level, link)
            VALUES (?, ?, ?, ?, ?, ?)
        `);
        const info = stmt.run(title, difficulty, topics, patterns, confidence_level, link);
        res.status(201).json({id: info.lastInsertRowid, message: "✅ Problem created"});
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

app.get("/problems", (req, res) => {
    try {
        const stmt = db.prepare("SELECT * FROM problems");
        const problems = stmt.all();
        res.json(problems);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

app.get("/problems/:id", (req, res) => {
    try {
        const stmt = db.prepare("SELECT * FROM problems WHERE id = ?");
        const problem = stmt.get(req.params.id);
        if (!problem) return res.status(404).json({ error: "Problem not found" });
        res.json(problem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3001, ()=> {
    console.log("✅ Loophole API running at http://localhost:3001");
});