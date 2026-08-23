const response = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
    to: [process.env.CONTACT_RECIPIENT_EMAIL],
    reply_to: "teste@exemplo.com",
    subject: "Website contact form test",
    text: "This is a controlled test of the website contact form.",
  }),
});

console.log(JSON.stringify({ status: response.status, body: await response.text() }));
