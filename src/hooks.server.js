import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { models } from '$lib/server/db';

export const handle = async ({ event, resolve }) => {
  event.locals.models = models;
  const currentPath = event.url.pathname;
  const userCookie = event.cookies.get('currentUser') || '';
  if (userCookie) {
    event.locals.user = JSON.parse(userCookie);
  }

  if (!userCookie && currentPath.length > 1) {
    return redirect(301, '/');
  }

  if (userCookie && currentPath.length <= 1) {
    return redirect(301, '/events/list');
  }

  return await resolve(event);
};