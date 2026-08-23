# Evidência de QA — formulário e navegação

## Navegação desktop

Foi capturada uma pré-visualização em viewport 1280×720 da página `/contact`. O cabeçalho mostra, nesta ordem, os oito itens: **Início, Sobre, Livro, Artigos, Media, Investigação, CV e Contactos**.

## Navegação móvel

Foi capturada uma pré-visualização em viewport 375×812 com o menu móvel temporariamente aberto para verificação. O menu mostrou explicitamente os oito itens: **Início, Sobre, Livro, Artigos, Media, Investigação, CV e Contactos**. Depois da captura, o estado inicial do componente `Header` foi restaurado para `isOpen = false`, para que o menu não abra automaticamente aos visitantes.

## Formulário de contacto

A página `/contact` não apresenta o endereço privado de destino. O envio é feito através de `contact.submit` no backend; o destinatário e as credenciais do Resend permanecem em variáveis de ambiente do servidor. A mensagem de teste controlada respondeu com HTTP 200 e `success: true`.
