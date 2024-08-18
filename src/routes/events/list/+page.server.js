export async function load({ request, locals }) {
  const allEvents = locals.models.Event.findAllEvents();
  return { allEvents };
};

export const actions = {
  default: async ({ cookies, request, locals }) => {
    locals.models.Event.findAllPublishedEvents();
    return { status: 200, success: true };
  }
};