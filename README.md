# RUZICKAJAKUB.cz

Osobní portfolio Jakuba Růžičky zaměřené na webdesign, UI/UX a frontend vývoj.

## Lokální spuštění

Požadavky: Bun 1.4.3.

```sh
bun install --frozen-lockfile
bun run dev
```

## Build a náhled

```sh
bun run build
bun run preview
```

## GitHub Pages

Každý push do větve `main` spustí GitHub Actions workflow, který sestaví web a nasadí obsah složky `dist`. V nastavení repozitáře musí být **Pages → Build and deployment → GitHub Actions**.

U projektového webu (`https://<owner>.github.io/<repository>/`) Vite automaticky použije název repozitáře jako základní cestu. Uživatelský web `<owner>.github.io` používá kořenovou cestu.
