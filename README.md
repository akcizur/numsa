# RUZICKAJAKUB.cz

Osobní portfolio zaměřené na webdesign, UI/UX a frontend vývoj. Web kombinuje střídmý vizuální styl, kapitoly s parallax efektem a výběr vlastních projektů.

## Lokální vývoj

Požadavky: Bun 1.4.3.

```sh
bun install --frozen-lockfile
bun run dev
```

Vite poběží na portu **3000**.

## Kontrola před nasazením

```sh
bun run lint
bun run test
bun run build
```

## GitHub Pages

Workflow v `.github/workflows/pages.yml` nasazuje při každém pushi do větve `main`. V nastavení repozitáře musí být **Settings → Pages → Build and deployment → GitHub Actions**.

Workflow používá stejný Bun lockfile jako lokální vývoj, aby instalace závislostí byla reprodukovatelná.
