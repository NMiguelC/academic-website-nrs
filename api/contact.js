// server/_core/contactHandler.ts
import { TRPCError as TRPCError2 } from "@trpc/server";

// server/contact.ts
import { TRPCError } from "@trpc/server";
import { z } from "zod";
var contactInputSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(320),
  subject: z.string().trim().min(3).max(160),
  message: z.string().trim().min(10).max(5e3),
  website: z.string().max(200).optional()
});
function buildPlainTextMessage(input) {
  return [
    "Nova mensagem enviada atrav\xE9s do website acad\xE9mico.",
    "",
    `Nome: ${input.name}`,
    `Email: ${input.email}`,
    `Assunto: ${input.subject}`,
    "",
    input.message
  ].join("\\n");
}
async function sendContactMessage(rawInput) {
  const input = contactInputSchema.parse(rawInput);
  if (input.website?.trim()) {
    return { success: true };
  }
  const apiKey = process.env.RESEND_API_KEY;
  const recipientEnv = process.env.CONTACT_RECIPIENT_EMAIL;
  const recipients = recipientEnv?.split(",").map((email) => email.trim()).filter(Boolean);
  const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
  if (!apiKey || !recipients || recipients.length === 0) {
    console.error("[Contact] Email service is not configured");
    throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Email service unavailable" });
  }
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: recipients,
      reply_to: input.email,
      subject: `[Website] ${input.subject}`,
      text: buildPlainTextMessage(input)
    })
  });
  if (!response.ok) {
    console.error("[Contact] Resend rejected message", { status: response.status });
    throw new TRPCError({ code: "BAD_GATEWAY", message: "Email service rejected the message" });
  }
  return { success: true };
}

// server/_core/contactHandler.ts
async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  try {
    const input = contactInputSchema.parse(req.body);
    const result = await sendContactMessage(input);
    res.status(200).json(result);
  } catch (err) {
    if (err instanceof TRPCError2) {
      const statusByCode = {
        BAD_REQUEST: 400,
        INTERNAL_SERVER_ERROR: 500,
        BAD_GATEWAY: 502
      };
      res.status(statusByCode[err.code] ?? 500).json({ error: err.message });
      return;
    }
    console.error("[api/contact] Unexpected error", err);
    res.status(400).json({ error: "Invalid request" });
  }
}
export {
  handler as default
};
