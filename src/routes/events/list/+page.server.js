export async function load({ request, locals }) {
  const allEvents = locals.models.Event.findAllEvents();
  const memberEvents = locals.models.Attendee.findEventsByMember(locals.user.id);
  const memberEventIds = memberEvents.map(event => event.event_id) || [];
  return { allEvents, memberEventIds };
};

export const actions = {
  default: async ({ cookies, request, locals }) => {
    try {
      const data = await request.formData();
      const formData = Object.fromEntries(data.entries());
      formData.status = 'pending'
      formData.member_id = locals.user.id;
      formData.created_at = new Date().toISOString();
      formData.updated_at = new Date().toISOString();
      console.log('formData', formData);
      locals.models.Attendee.create(formData);
      return {status: 200, success: true};
    } catch (error) {
      return {status: 500, success: false, error: error.message};
    }
  }
};