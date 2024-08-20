export class Member {
  db = null;
  preparedStatements = new Map();
  
  constructor(db) {
    this.db = db;
    this.init();
  }

  setPreparedStatement(key, statement) {
    this.preparedStatements.has(key) || this.preparedStatements.set(key, this.db.prepare(statement));
    return this.preparedStatements.get(key);
  }

  init() {
    const creationString = `
      CREATE TABLE IF NOT EXISTS members (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT,
        last_name TEXT,
        email TEXT,
        phone NUMBER,
        village TEXT,
        password TEXT,
        status TEXT, 
        roles NUMBER,
        created_at TEXT,
        updated_at TEXT
      )`

    this.db.exec(creationString);
  }

  create(data) {
    const stmt = this.setPreparedStatement(
      'create', 
      `INSERT INTO members (
        first_name,
        last_name,
        email,
        phone,
        village,
        password,
        status,
        roles,
        created_at,
        updated_at
      ) VALUES (
        @first_name,
        @last_name,
        @email,
        @phone,
        @village,
        @password,
        @status,
        @roles,
        @created_at,
        @updated_at
      )
    `);

    return stmt.run(data);
  }

  getFromLogin(phone, password) {
    const stmt = this.setPreparedStatement('getFromLogin', `
      SELECT * FROM members WHERE phone = @phone AND password = @password
    `);

    return stmt.get({ phone, password });
  }
}