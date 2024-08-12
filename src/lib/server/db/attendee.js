export class Attendee {
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
      CREATE TABLE IF NOT EXISTS attendees (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        member_id INTEGER,
        event_id INTEGER,
        status TEXT,
        created_at TEXT,
        updated_at TEXT,
        FOREIGN KEY (user_id) REFERENCES user(id),
        FOREIGN KEY (event_id) REFERENCES event(id)
      )`

    this.db.exec(creationString);
  }

  create(data) {
    const stmt = this.setPreparedStatement('create', `
      INSERT INTO attendees (
        event_id,
        member_id,
        status,
        created_at,
        updated_at
      ) VALUES (
        @event_id,
        @member_id,
        @status,
        @created_at,
        @updated_at
      )
    `);

    return stmt.run(data);
  }

  update(data) {
    const stmt = this.setPreparedStatement('update',`
      UPDATE attendees SET
        event_id = @event_id,
        user_id = @user_id,
        status = @status,
        updated_at = @updated_at
      WHERE id = @id
    `);

    return stmt.run(data);
  }

  get(id) {
    const stmt = this.setPreparedStatement('getId', `SELECT * FROM attendees WHERE id = ?`);
    const attendee = stmt.get(id);
    return attendee;
  }

  isSignedUp(event_id, user_id) {
    const stmt = this.setPreparedStatement('isSignedUp', `SELECT * FROM attendees WHERE event_id = @event_id AND user_id = @user_id`);
    const attendee = stmt.get({ event_id, user_id });
    return attendee ? true : false;
  }

  getAttendees(event_id) {
    const stmt = this.setPreparedStatement('getAttendees',`SELECT * FROM attendees WHERE event_id = @event_id`);
    const attendees = stmt.all({ event_id });
    return attendees;
  }
}