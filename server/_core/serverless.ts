import { createApp } from "./app";

// Fonte da função serverless da Vercel. NÃO é usado diretamente — o script
// de build (package.json) compila este ficheiro com esbuild, empacotando
// todas as dependências locais num único ficheiro autossuficiente em
// api/[...all].js, evitando o problema de resolução de módulos do Node
// em produção que ocorre quando a Vercel tenta compilar TypeScript com
// importações para fora da pasta api/.
const app = createApp();

export default app;
