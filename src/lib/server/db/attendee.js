export class Attendee {
  db = null;
  preparedStatements = new Map();

  schema = {
    id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
    member_id: 'INTEGER',
    event_id: 'INTEGER',
    status: 'TEXT',
    created_at: 'TEXT',
    updated_at: 'TEXT'
  }

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
        ${Object.entries(this.schema).map(([key, value]) => `${key} ${value}`).join(', ')},
        FOREIGN KEY (member_id) REFERENCES members(id),
        FOREIGN KEY (event_id) REFERENCES events(id)
      )`
    this.db.exec(creationString);

    const indexString = `
      CREATE UNIQUE INDEX IF NOT EXISTS idx_attendees_event_id ON attendees(member_id, event_id)
    `
    this.db.exec(indexString);
  }

  create(data) {
    const stmt = this.setPreparedStatement(
      'create', 
      `INSERT INTO attendees (
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
    const stmt = this.setPreparedStatement(
      'update',
      `UPDATE attendees SET
        event_id = @event_id,
        member_id = @member_id,
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
    const stmt = this.setPreparedStatement('isSignedUp', `SELECT * FROM attendees WHERE event_id = @event_id AND member_id = @member_id`);
    const attendee = stmt.get({ event_id, user_id });
    return attendee ? true : false;
  }

  getAttendees(event_id) {
    const stmt = this.setPreparedStatement('getAttendees',`SELECT * FROM attendees WHERE event_id = @event_id`);
    const attendees = stmt.all({ event_id });
    return attendees;
  }

  findEventsByMember(member_id) {
    const stmt = this.setPreparedStatement('findEventsByMember', `SELECT * FROM attendees WHERE member_id = @member_id`);
    const events = stmt.all({member_id});
    return events;
  }
}