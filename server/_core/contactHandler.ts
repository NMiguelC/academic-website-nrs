import { TRPCError } from "@trpc/server";
import { contactInputSchema, sendContactMessage } from "../contact";

// Função Vercel autónoma para o formulário de contacto, servida em /api/contact
// (1 único nível sob /api). Deliberadamente NÃO passa pelo tRPC nem pelo
// catch-all api/[...all].js: a Vercel tem um problema conhecido, documentado
// e reproduzido nesta implantação, em que caminhos com 2+ níveis sob /api
// (ex. /api/trpc/contact.submit) não chegam de forma fiável a funções
// standalone (fora do Next.js). Caminhos de 1 nível funcionam de forma
// consistente, por isso o formulário passa a chamar diretamente este
// endpoint em vez de trpc.contact.submit.
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const input = contactInputSchema.parse(req.body);
    const result = await sendContactMessage(input);
    res.status(200).json(result);
  } catch (err) {
    if (err instanceof TRPCError) {
      const statusByCode: Record<string, number> = {
        BAD_REQUEST: 400,
        INTERNAL_SERVER_ERROR: 500,
        BAD_GATEWAY: 502,
      };
      res.status(statusByCode[err.code] ?? 500).json({ error: err.message });
      return;
    }
    console.error("[api/contact] Unexpected error", err);
    res.status(400).json({ error: "Invalid request" });
  }
}
