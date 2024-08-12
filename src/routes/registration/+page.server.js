export async function load() {
  return {};
};


// Member statuses
// 1. Pending
// 2. Active
// 4. Inactive
// 8. Suspended

// Member roles
// 1. Member
// 2. Creator
// 4. Super Admin

export const actions = {
  default: async ({ cookies, request, locals }) => {
    const data = await request.formData();
    const formData = Object.fromEntries(data);
    formData.status = 2
    formData.roles = 1
    formData.created_at = new Date().toISOString();
    formData.updated_at = new Date().toISOString();
    locals.models.Member.create(formData);
    return { status: 200, success: true };
  }
};