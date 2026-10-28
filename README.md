# RUZICKAJAKUB.cz

<<<<<<< HEAD
Osobní portfolio Jakuba Růžičky zaměřené na webdesign, UI/UX a frontend vývoj.

## Lokální spuštění
=======
Osobní portfolio zaměřené na webdesign, UI/UX a frontend vývoj. Web kombinuje střídmý vizuální styl, kapitoly s parallax efektem a výběr vlastních projektů.

## Lokální vývoj
>>>>>>> 11e440a3df865522797021ad57087a84b6645a82

Požadavky: Bun 1.4.3.

```sh
bun install --frozen-lockfile
bun run dev
```

<<<<<<< HEAD
## Build a náhled

```sh
bun run build
bun run preview
=======
Vite poběží na portu **3000**.

## Kontrola před nasazením

```sh
bun run lint
bun run test
bun run build
>>>>>>> 11e440a3df865522797021ad57087a84b6645a82
```

## GitHub Pages

<<<<<<< HEAD
Každý push do větve `main` spustí GitHub Actions workflow, který sestaví web a nasadí obsah složky `dist`. V nastavení repozitáře musí být **Pages → Build and deployment → GitHub Actions**.

U projektového webu (`https://<owner>.github.io/<repository>/`) Vite automaticky použije název repozitáře jako základní cestu. Uživatelský web `<owner>.github.io` používá kořenovou cestu.
=======
Workflow v `.github/workflows/pages.yml` nasazuje při každém pushi do větve `main`. V nastavení repozitáře musí být **Settings → Pages → Build and deployment → GitHub Actions**.

Workflow používá stejný Bun lockfile jako lokální vývoj, aby instalace závislostí byla reprodukovatelná.
>>>>>>> 11e440a3df865522797021ad57087a84b6645a82
