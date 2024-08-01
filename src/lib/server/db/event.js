import { Database } from 'better-sqlite3';

export class Event {
  db = null
  
  constructor(db) {
    this.db = db;
    this.init();
  }

  init() {
    const creationString = `
      CREATE TABLE IF NOT EXISTS events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        event_details TEXT,
        starts TEXT,
        ends TEXT,
        cutsoff TEXT,
        location TEXT,
        categories TEXT,
        price NUMBER,
        max_attendees INTEGER,
        access TEXT,
        publish_ready INTEGER,
        host_id INTEGER,
        host_name TEXT,
        created_at TEXT,
        updated_at TEXT
      )`

    this.db.exec(creationString);
  }


  create(data) {
    const stmt = this.db.prepare(`
      INSERT INTO events (
        name,
        description,
        event_details,
        starts,
        ends,
        cutsoff,
        location,
        categories,
        price,
        max_attendees,
        access,
        publish_ready,
        host_id,
        host_name,
        created_at,
        updated_at
      ) VALUES (
        @name,
        @description,
        @event_details,
        @starts,
        @ends,
        @cutsoff,
        @location,
        @categories,
        @price,
        @max_attendees,
        @access,
        @publish_ready,
        @host_id,
        @host_name,
        @created_at,
        @updated_at
      )
    `);

    return stmt.run(data);
  }

  update(data) {
    const stmt = this.db.prepare(`
      UPDATE events SET
        name = @name,
        description = @description,
        event_details = @event_details
        starts = @starts,
        ends = @ends,
        cutsoff = @cutsoff,
        location = @location,
        categories = @categories,
        price = @price,
        max_attendees = @max_attendees,
        access = @access,
        publish_ready = @publish_ready,
        host_id = @host_id,
        host_name = @host_name,
        updated_at = @updated_at
      WHERE id = @id
    `);

    return stmt.run(data);
  }

  get(id) {
    const stmt = this.db.prepare(`SELECT * FROM events WHERE id = ?`);
    const event = stmt.get(id);
    return event;
  }

  getAllPublishedEvents() {
    const stmt = this.db.prepare(`SELECT * FROM events WHERE publish_ready = 1`);
    const events = stmt.all();
    console.log('events', events)
    return events;
  }

  findByCategory(category) {
    const stmt = this.db.prepare("SELECT * FROM events WHERE categories LIKE @category");
    const events = stmt.all({ category: `%${category}%` });
    console.log('events', events)
    return events;
  }

  findByEventName(name) {
    const stmt = this.db.prepare(`SELECT * FROM events WHERE name LIKE ?`);
    const events = stmt.all(`%${name}%`);
    return events;
  }

  findByDate(date) {
    const stmt = this.db.prepare(`SELECT * FROM events WHERE starts LIKE ?`);
    const events = stmt.all(`%${date}%`);
    return events;
  }

  findByHostId(host_id) {
    const stmt = this.db.prepare(`SELECT * FROM events WHERE host_id = ?`);
    const events = stmt.all(`%${host_id}%`);
    return events;
  }
}