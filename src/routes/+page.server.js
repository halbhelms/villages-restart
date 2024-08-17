import { redirect } from '@sveltejs/kit';

export async function load() {
  return {};
};


export const actions = {
  default: async ({ cookies, request, locals }) => {
    // get data from login form
    const data = await request.formData();
    const formData = Object.fromEntries(data);

    // check if user exists
    const currentUser = locals.models.Member.getFromLogin(formData.phone, formData.password);
    if (currentUser) {
      locals.currentUser = currentUser;
      throw redirect(302, '/events');
    }

    return { status: 200, success: false };
  }
};