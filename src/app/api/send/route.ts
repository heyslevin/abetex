import { EmailTemplate } from "@/components/utils/email-template";
import {
  CONTACT_EMAIL_QUERY,
  GLOBAL_SETTINGS_QUERY,
} from "@/src/lib/sanity/queries";
import { sanityFetch } from "@/src/sanity/lib/client";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  // body of our request - to be sent from the Client-side in our form above
  const { formValues } = body;

  const receiverEmail = await sanityFetch({
    query: CONTACT_EMAIL_QUERY,
  });

  console.log({ email: receiverEmail });

  try {
    const { data, error } = await resend.emails.send({
      from: "Notification <forms@lazy.mx>",
      to: receiverEmail as string,
      subject: "New message from an Abetex Capital contact form",
      react: EmailTemplate(formValues),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
