import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const contactInputSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(320),
  subject: z.string().trim().min(3).max(160),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(200).optional(),
});

export type ContactInput = z.infer<typeof contactInputSchema>;

function buildPlainTextMessage(input: ContactInput) {
  return [
    "Nova mensagem enviada através do website académico.",
    "",
    `Nome: ${input.name}`,
    `Email: ${input.email}`,
    `Assunto: ${input.subject}`,
    "",
    input.message,
  ].join("\\n");
}

export async function sendContactMessage(rawInput: ContactInput) {
  const input = contactInputSchema.parse(rawInput);

  // Honeypot: normal visitors never fill this hidden field.
  if (input.website?.trim()) {
    return { success: true } as const;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipientEnv = process.env.CONTACT_RECIPIENT_EMAIL;
  const recipients = recipientEnv
    ?.split(",")
    .map((email) => email.trim())
    .filter(Boolean);
  const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey || !recipients || recipients.length === 0) {
    console.error("[Contact] Email service is not configured");
    throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Email service unavailable" });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: recipients,
      reply_to: input.email,
      subject: `[Website] ${input.subject}`,
      text: buildPlainTextMessage(input),
    }),
  });

  if (!response.ok) {
    console.error("[Contact] Resend rejected message", { status: response.status });
    throw new TRPCError({ code: "BAD_GATEWAY", message: "Email service rejected the message" });
  }

  return { success: true } as const;
}
