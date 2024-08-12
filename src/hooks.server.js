import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { models } from '$lib/server/db';

export const handle = async ({ event, resolve }) => {
  event.locals.models = models;
  const currentPath = event.url.pathname;
  // event.locals.currentPath = currentPath;
  const userCookie = event.cookies.get(env.COOKIE_NAME) || '';
  if (userCookie) {
    event.locals.user = JSON.parse(userCookie);
  }

  // DURING DEVELOPMENT
    event.locals.user = {
      id: 1,
      name: 'Gen Helms',
    }
  // if (!userCookie && !currentPath.startsWith('/login')) {
  //   return redirect(301, '/login');
  // }

  return await resolve(event);
};