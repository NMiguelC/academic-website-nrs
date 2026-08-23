# QA — Integração da fotografia profissional

A fotografia profissional foi integrada em dois pontos sem substituir a capa do livro.

Na homepage, a capa continua a dominar o hero. O retrato aparece apenas numa pequena assinatura visual junto à secção de Media e Divulgação, com dimensão reduzida e texto editorial de apoio.

Na página Sobre, o retrato aparece junto ao percurso académico, depois do texto biográfico, com uma legenda bilingue. A composição mantém a leitura editorial e não cria um novo bloco estrutural independente.

A validação visual foi feita em viewport desktop 1280×720 e mobile 375×812. Em ambos os casos, a fotografia mantém proporção, não interfere com o conteúdo e adapta-se sem transbordamento. A imagem usa `ProtectedImage`, `draggable=false`, `pointer-events-none`, `user-select: none`, prevenção de menu contextual, prevenção de arrasto e bloqueio de interação direta. O estado automático do menu móvel foi restaurado para fechado depois da verificação.

Limitação técnica: estas medidas dificultam cópia, arrasto, seleção e ampliação direta, mas não podem impedir capturas de ecrã ou fotografias feitas por outro dispositivo.
