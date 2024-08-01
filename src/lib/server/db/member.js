import { Database } from 'better-sqlite3';

export class Member {
  db = null;
  constructor(db) {
    this.db = db;
    this.init();
  }

  init() {
    const creationString = `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT,
        last_name TEXT,
        email TEXT,
        phone NUMBER,
        password TEXT,
        village TEXT,
        status TEXT, // active, inactive, pending
        access TEXT, // regular, vip
        created_at TEXT,
        updated_at TEXT
      )`

    this.db.exec(creationString);
  }

  create(data) {
    const stmt = this.db.prepare(`
      INSERT INTO users (
        first_name,
        last_name,
        email,
        phone,
        village_name,
        password,
        status,
        access,
        created_at,
        updated_at
      ) VALUES (
        @first_name,
        @last_name,
        @email,
        @phone,
        @village_name,
        @password,
        @status,
        @access,
        @created_at,
        @updated_at
      )
    `);

    return stmt.run(data);
  }

  getFromLogin(phone, password) {
    const stmt = this.db.prepare(`
      SELECT * FROM users WHERE phone = @phone AND password = @password
    `);

    return stmt.get({ phone, password });
  }
}