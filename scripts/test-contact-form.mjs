const response = await fetch("http://localhost:3000/api/trpc/contact.submit?batch=1", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    0: {
      json: {
        name: "Teste do website",
        email: "teste@exemplo.com",
        subject: "Teste do formulário de contacto",
        message: "Esta é uma mensagem de teste enviada através do formulário privado do website.",
        website: "",
      },
    },
  }),
});

const body = await response.text();
console.log(JSON.stringify({ status: response.status, body }));
if (!response.ok) process.exit(1);
