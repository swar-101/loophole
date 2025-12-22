const db = require("../db");

function runMigrations() {
    db.prepare(`
    CREATE TABLE IF NOT EXISTS problems (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        title TEXT NOT NULL, 
        status TEXT CHECK(status IN ('unsolved', 'solved', 'in-progress')) DEFAULT 'unsolved',
        difficulty TEXT, 
        topics TEXT, 
        patterns TEXT, 
        confidence_level INTEGER, 
        link TEXT
    )`).run();

    db.prepare(`
    CREATE TABLE IF NOT EXISTS attempts(
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        problem_id INTEGER NOT NULL, 
        last_solved_date TEXT, 
        time_taken INTEGER, 
        result TEXT CHECK(result IN ('pass', 'fail', 'partial')), 
        FOREIGN KEY (problem_id) REFERENCES problems(id) ON DELETE CASCADE
    )`).run();

    db.prepare(`
    CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        attempt_id INTEGER, 
        problem_id INTEGER, 
        mistakes TEXT, 
        notes TEXT, 
        practiced BOOLEAN DEFAULT 0, 
        FOREIGN KEY (attempt_id) REFERENCES attempts(id) ON DELETE CASCADE, 
        FOREIGN KEY (problem_id) REFERENCES problems(id) ON DELETE CASCADE
    )`).run();

    console.log("✅ Tables created successfully!");
}

module.exports = runMigrations;