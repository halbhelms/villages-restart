import Database from 'better-sqlite3'
import { User } from './user'
import { EventModel as Event } from './event'
import { Attendee } from './attendee'

const database = new Database('villages.db', { verbose: console.log })
database.pragma('journal_mode = WAL')
database.pragma('synchronous = NORMAL')
database.pragma('foreign_keys = ON')
database.pragma('analysis_limit = 400')
database.pragma('optimize')

export const models = {
  Event: new Event(database),
}