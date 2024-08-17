export async function load() {
  return {};
};


export const actions = {
  default: async ({ cookies, request, locals }) => {
    const data = await request.formData();
    const formData = Object.fromEntries(data);

    const currentUser = locals.models.Member.getFromLogin(formData.phone, formData.password);
    if (currentUser) {
      locals.currentUser = currentUser;
    }
    console.log(locals.currentUser, 'currentUser')

    return { status: 200, success: true };
  }
};