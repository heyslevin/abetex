import { EmailTemplate } from "@/components/utils/email-template";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  // body of our request - to be sent from the Client-side in our form above
  const { formValues } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: "Notification <forms@lazy.mx>",
      to: process.env.RESEND_RECEIVER_EMAIL as string,
      subject: "New message from contact",
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
