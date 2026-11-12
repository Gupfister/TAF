# OPERAÇÃO TIN

Plataforma web mobile-first para organizar preparação física e registrar atividades rumo ao TACF.

## Requisitos
- Node.js 20 ou superior
- npm

## Executar localmente
```bash
npm install
npm run dev
```
Abra o endereço local exibido pelo Vite.

## Build de produção
```bash
npm run build
npm run preview
```

## Publicar no GitHub Pages
1. Crie um repositório chamado `operacao-tin`.
2. Se o nome do repositório for diferente, ajuste `base` em `vite.config.ts` para `/<nome-do-repositorio>/`.
3. Em **Settings > Pages**, escolha **GitHub Actions**.
4. Crie `.github/workflows/deploy.yml` com o conteúdo abaixo.
5. Envie os arquivos para a branch `main`. O workflow fará o build e a publicação.

```yaml
name: Deploy Operação TIN
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Funcionalidades incluídas
- Dashboard com resumo calculado a partir dos registros reais.
- Corrida GPS via Geolocation API, pausa, retomada, percurso no mapa e histórico.
- Registro manual de corrida.
- Simulador de 12 minutos com relógio baseado em timestamps, pausa/retomada e avisos sonoros.
- Agenda mensal, cadastro de treinos e status pendente/concluído/parcial/descanso.
- Indicadores de desempenho e gráficos.
- Perfil e metas configuráveis.
- Persistência local em IndexedDB.
- Exportação e importação de backup JSON.
- PWA instalável (manifest e service worker gerados pelo plugin).

## Observações importantes
- GPS exige HTTPS (ou localhost), permissão do usuário e pode variar conforme o aparelho. Alguns navegadores suspendem a coleta GPS quando o app fica em segundo plano.
- A distância do simulador de 12 minutos é informada pelo usuário; não existe leitura automática de pista/esteira nesta versão.
- O projeto não contém índices oficiais de aprovação. Confira o edital vigente e configure seus parâmetros de referência.
- Os dados ficam no navegador/dispositivo. Não há conta, nuvem ou sincronização entre aparelhos. Exporte backups periodicamente.
- Os alertas sonoros podem exigir interação prévia com a página por regras do navegador.
- O Google Fonts é carregado externamente; a interface continua utilizável se a fonte não carregar.
