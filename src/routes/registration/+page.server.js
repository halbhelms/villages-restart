export async function load() {
  return {};
};


export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const formData = Object.fromEntries(data);
  }
};