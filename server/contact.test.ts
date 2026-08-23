import { afterEach, describe, expect, it, vi } from "vitest";
import { sendContactMessage } from "./contact";

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

describe("contact message service", () => {
  it("ignores honeypot submissions without calling Resend", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    await expect(sendContactMessage({
      name: "Bot",
      email: "bot@example.com",
      subject: "Spam",
      message: "This is an automated message.",
      website: "https://spam.example",
    })).resolves.toEqual({ success: true });

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("sends a private recipient-bound message through Resend", async () => {
    vi.stubEnv("RESEND_API_KEY", "test-key");
    vi.stubEnv("CONTACT_RECIPIENT_EMAIL", "owner@example.com");
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ id: "email-id" }), { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    await expect(sendContactMessage({
      name: "Ana Example",
      email: "ana@example.com",
      subject: "Research collaboration",
      message: "I would like to discuss a possible collaboration.",
      website: "",
    })).resolves.toEqual({ success: true });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, options] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("https://api.resend.com/emails");
    expect(options.headers).toMatchObject({ Authorization: "Bearer test-key" });
    expect(JSON.parse(String(options.body))).toMatchObject({
      to: ["owner@example.com"],
      reply_to: "ana@example.com",
      subject: "[Website] Research collaboration",
    });
  });

  it("rejects incomplete messages before contacting Resend", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    await expect(sendContactMessage({
      name: "A",
      email: "not-an-email",
      subject: "Hi",
      message: "Short",
      website: "",
    })).rejects.toThrow();

    expect(fetchMock).not.toHaveBeenCalled();
  });
});
