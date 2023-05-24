import type { Handle, HandleFetch } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  //   return resolve(event);
  //   if (event.url.pathname.startsWith("/banana")) {
  //     return new Response("banana");
  //   }
  //  const session = event.cookies.get('session')
  //  const user = await getUser(session)
  //   event.locals.user = "Test";

  //   const locale = "hr";
  //   event.locals.locale = locale;
  //   return resolve(event, {
  //     transformPageChunk: ({ html }) => html.replace("%lang%", locale),
  //   });

  const route = event.url;
  let start = performance.now();
  const response = await resolve(event);
  let end = performance.now();
  let responseTime = end - start;
  if (responseTime > 2000) {
    console.log(`turtle ${route} ${responseTime.toFixed(2)} ms`);
  }
  return response;
};

export const handleFetch: HandleFetch = ({ request }) => {
  if (request.url.startsWith("http")) {
    const url = request.url.replace("http", "https");
    request = new Request(url, request);
    console.log(request.url);
  }
  return fetch(request);
};
