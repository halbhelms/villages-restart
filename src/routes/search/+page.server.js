export async function load() {
  const events = [
    {
      id: 1, 
      name: 'Event 1', 
      start: '2024-08-01T19:00:00', 
      end: '2024-08-01T21:00:00', 
      cutoff: '2024-07-31T23:59:59', 
      location: 'Location 1', 
      description: 'Description 1', 
      notes: 'Notes 1', 
      categories: ['Dining', 'Excursion'],
      attendees_limit: 20, 
      access: 'public', 
      price: 25,
      host_id: 1,
      host_name: 'Gen Helms',
    },
  ]
  return {events};
};