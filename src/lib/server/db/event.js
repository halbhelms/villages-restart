export class Event {
  db = null
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
      CREATE TABLE IF NOT EXISTS events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
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
    const stmt = this.setPreparedStatement('create', `
      INSERT INTO events (
        name,
        description,
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
    const stmt = this.setPreparedStatement('update',`
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

  findById(id) {
    const stmt = this.setPreparedStatement('findById', `SELECT * FROM events WHERE id = ?`);
    const event = stmt.get(id);
    return event;
  }

  findAllEvents() {
    const stmt = this.setPreparedStatement('findAllEvents', `SELECT * FROM events`);
    const events = stmt.all();
    return events;
  }

  findAllPublishedEvents() {
    const stmt = this.setPreparedStatement('findAllPublishedEvents', `SELECT * FROM events WHERE publish_ready = 1`);
    const events = stmt.all();
    return events;
  }

  findByCategory(category) {
    const stmt = this.setPreparedStatement('findByCategory', "SELECT * FROM events WHERE categories LIKE @category");
    const events = stmt.all({ category: `%${category}%` });
    console.log('events', events)
    return events;
  }

  findByEventName(name) {
    const stmt = this.setPreparedStatement('findByEventName', `SELECT * FROM events WHERE name LIKE ?`);
    const events = stmt.all(`%${name}%`);
    return events;
  }

  findByDate(date) {
    const stmt = this.setPreparedStatement('findByDate', `SELECT * FROM events WHERE starts LIKE ?`);
    const events = stmt.all(`%${date}%`);
    return events;
  }

  findByHostId(host_id) {
    const stmt = this.setPreparedStatement('findByHostId', `SELECT * FROM events WHERE host_id = ?`);
    const events = stmt.all(`%${host_id}%`);
    return events;
  }
}