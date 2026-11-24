// Cloudflare Pages Function: handles the contact form at POST /api/contact.
// TODO before launch: send the lead somewhere real (email service or the client's CRM).
// Store any API key as an environment variable in Cloudflare, never in this file.
export async function onRequestPost({ request }) {
  const form = await request.formData();
  const lead = {
    name: form.get("name"),
    phone: form.get("phone"),
    message: form.get("message"),
    at: new Date().toISOString(),
  };
  console.log("New lead", lead);
  return Response.redirect(new URL("/thanks/", request.url), 303);
}
