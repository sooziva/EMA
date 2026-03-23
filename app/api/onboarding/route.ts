import { NextResponse } from "next/server";

export const runtime = "nodejs";

type OnboardingPayload = {
  name: string;
  email: string;
  phone: string;
  experience: string;
  goal: string;
  timeframe: string;
};

function safeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

async function sendEmail(params: {
  apiKey: string;
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${params.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: params.from,
      to: params.to,
      subject: params.subject,
      text: params.text,
      html: params.html,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Resend error (${res.status}): ${body || res.statusText}`);
  }
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as Partial<OnboardingPayload>;

    const name = safeString(payload.name);
    const email = safeString(payload.email);
    const phone = safeString(payload.phone);
    const experience = safeString(payload.experience);
    const goal = safeString(payload.goal);
    const timeframe = safeString(payload.timeframe);

    if (!name || !email || !phone || !experience || !goal || !timeframe) {
      return NextResponse.json(
        { ok: false, error: "Missing required onboarding fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const academyTo = process.env.RESEND_ACADEMY_EMAIL;

    if (!apiKey || !from || !academyTo) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Server email is not configured. Set RESEND_API_KEY, RESEND_FROM_EMAIL, RESEND_ACADEMY_EMAIL.",
        },
        { status: 500 }
      );
    }

    const academySubject = `E.M.A Onboarding Request — ${name}`;
    const academyText = [
      `New onboarding request received`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Experience: ${experience}`,
      `Goal: ${goal}`,
      `Timeframe: ${timeframe}`,
    ].join("\n");

    const academyHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2 style="margin: 0 0 12px;">New E.M.A Onboarding Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Experience:</b> ${experience}</p>
        <p><b>Goal:</b> ${goal}</p>
        <p><b>Timeframe:</b> ${timeframe}</p>
      </div>
    `;

    const userSubject = `You’re in! ${name} — E.M.A onboarding received`;
    const userText = [
      `Hi ${name},`,
      ``,
      `Thanks for completing the E.M.A onboarding!`,
      `We’ve received your details and will reach out soon with recommendations.`,
      ``,
      `Summary: ${goal} • ${experience} • ${timeframe}`,
      ``,
      `— E.M.A Expert Makeup Academy`,
    ].join("\n");

    const userHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2 style="margin: 0 0 12px;">Thanks for your onboarding, ${name}!</h2>
        <p>We received your details and will reach out soon with the best next steps for your makeup journey.</p>
        <p><b>Summary:</b> ${goal} • ${experience} • ${timeframe}</p>
        <p style="margin-top: 18px;">— E.M.A Expert Makeup Academy</p>
      </div>
    `;

    await sendEmail({
      apiKey,
      from,
      to: academyTo,
      subject: academySubject,
      text: academyText,
      html: academyHtml,
    });

    await sendEmail({
      apiKey,
      from,
      to: email,
      subject: userSubject,
      text: userText,
      html: userHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unknown error sending onboarding email.";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

