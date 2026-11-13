# OPERAÇÃO TIN — versão JavaScript puro

Projeto convertido para HTML, CSS e JavaScript nativo. Não utiliza TypeScript, React, Vite, Tailwind ou processo de compilação.

## Executar localmente

Abra `index.html` no navegador. Para recursos de PWA e geolocalização, é recomendado servir a pasta por HTTPS ou localhost (por exemplo, com a extensão Live Server do VS Code).

## Publicar no GitHub Pages

1. Envie o conteúdo desta pasta para a raiz do repositório.
2. Confirme que `index.html` está na raiz.
3. Em Settings → Pages, selecione Deploy from a branch, branch `main`, pasta `/ (root)`.
4. Salve e aguarde a publicação.

Não é necessário `npm install` nem `npm run build`.

## Recursos

- Dashboard e indicadores semanais.
- Corrida com cronômetro, localização GPS e registro manual.
- Simulador TACF de 12 minutos e salvamento de resultados.
- Agenda mensal, inclusão e status de treinamentos.
- Histórico e gráficos de desempenho em Canvas.
- Perfil e preferências.
- Backup e restauração JSON.
- Persistência local via IndexedDB (com fallback para localStorage).
- Manifesto e service worker para instalação/cache PWA.

Os dados ficam no navegador/dispositivo e não são sincronizados com servidor.
