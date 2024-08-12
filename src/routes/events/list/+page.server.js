export async function load() {
  return {};
};

export const actions = {
  default: async ({ cookies, request, locals }) => {
    locals.models.Event.findAllPublishedEvents();
    return { status: 200, success: true };
  }
};