import { Database } from 'better-sqlite3';

export class Attendee {
  db = null;
  constructor(db) {
    this.db = db;
    this.init();
  }

  init() {
    const creationString = `
      CREATE TABLE IF NOT EXISTS attendees (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        event_id INTEGER,
        status TEXT, // confirmed, waiting
        created_at TEXT,
        updated_at TEXT,
        FOREIGN KEY (user_id) REFERENCES user(id),
        FOREIGN KEY (event_id) REFERENCES event(id)
      )`

    this.db.exec(creationString);
  }

  create(data) {
    const stmt = this.db.prepare(`
      INSERT INTO attendees (
        event_id,
        user_id,
        status,
        created_at,
        updated_at
      ) VALUES (
        @event_id,
        @user_id,
        @status,
        @created_at,
        @updated_at
      )
    `);

    return stmt.run(data);
  }

  update(data) {
    const stmt = this.db.prepare(`
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
    const stmt = this.db.prepare(`SELECT * FROM attendees WHERE id = ?`);
    const attendee = stmt.get(id);
    return attendee;
  }

  isSignedUp(event_id, user_id) {
    const stmt = this.db.prepare(`SELECT * FROM attendees WHERE event_id = @event_id AND user_id = @user_id`);
    const attendee = stmt.get({ event_id, user_id });
    return attendee ? true : false;
  }

  getAttendees(event_id) {
    const stmt = this.db.prepare(`SELECT * FROM attendees WHERE event_id = @event_id`);
    const attendees = stmt.all({ event_id });
    return attendees;
  }
}