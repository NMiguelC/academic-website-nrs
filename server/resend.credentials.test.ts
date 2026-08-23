import { describe, expect, it } from "vitest";

describe("Resend credentials", () => {
  it("recognizes the configured API key on the lightweight domains endpoint", async () => {
    const apiKey = process.env.RESEND_API_KEY;
    expect(apiKey, "RESEND_API_KEY must be configured").toBeTruthy();

    const response = await fetch("https://api.resend.com/domains", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const body = await response.json() as { name?: string; message?: string };

    // A restricted send-only key is valid but cannot read domains.
    expect([200, 401]).toContain(response.status);
    if (response.status === 401) {
      expect(body.name).toBe("restricted_api_key");
    }
  }, 15_000);
});
