export async function load() {
  return {};
};

function getPreviousMidnight(isoDateString) {
  // Parse the input ISO datetime string to a Date object
  const originalDate = new Date(isoDateString);

  // Subtract one day (24 hours) from the original date
  originalDate.setDate(originalDate.getDate() - 1);

  // Set the time to midnight (00:00:00.000)
  originalDate.setHours(0, 0, 0, 0);

  // Return the new date in ISO format
  return originalDate.toISOString();
}

export const actions = {
  default: async ({ cookies, request, locals }) => {
    const data = await request.formData();
    const formData = Object.fromEntries(data);
    formData.starts = formData.start_date + 'T' + formData.start_time + ':00.000Z';
    formData.ends = formData.end_date + 'T' + formData.end_time + ':00.000Z';
    if (!formData.cutsoff) {
      formData.cutsoff = getPreviousMidnight(formData.starts);
    }
    formData.publish_ready = 0;
    // get host_id and host_name from locals.user
    formData.host_id = locals.user.id;
    formData.host_name = locals.user.name;
    formData.created_at = new Date().toISOString();
    formData.updated_at = new Date().toISOString();

    locals.models.Event.create(formData);
    return { status: 200, success: true };
  }
};