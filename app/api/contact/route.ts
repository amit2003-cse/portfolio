import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, regarding, message } = body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["amit4321sg@gmail.com"],
      subject: `Portfolio Contact: ${regarding}`,
      html: `
        <h2>New Message</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Regarding: ${regarding}</p>
        <p>Message: ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}