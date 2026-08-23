import { describe, expect, it } from "vitest";

describe("Resend sender configuration", () => {
  it("uses a sender on the verified academic domain", async () => {
    const apiKey = process.env.RESEND_API_KEY;
    const sender = process.env.RESEND_FROM_EMAIL;
    expect(apiKey, "RESEND_API_KEY must be configured").toBeTruthy();
    expect(sender, "RESEND_FROM_EMAIL must be configured").toMatch(/^[^@\s]+@nunoribeirosilva\.com$/);

    const response = await fetch("https://api.resend.com/domains", {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    const body = await response.json() as { name?: string };

    // Restricted send-only keys are accepted by Resend but cannot list domains.
    expect([200, 401]).toContain(response.status);
    if (response.status === 401) expect(body.name).toBe("restricted_api_key");
  }, 15_000);
});
