import { redirect } from '@sveltejs/kit';

export async function load({ request, locals }) {
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
      // set cookie
      const userCookie = JSON.stringify(currentUser);
      cookies.set(
        'currentUser', 
        userCookie, 
        {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 7, // 1 week
          path: '/'
        }
      );
      throw redirect(302, '/events/list');
    }

    return { status: 200, success: false };
  }
};