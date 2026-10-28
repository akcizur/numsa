import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.tsx');
  const markup = renderToString(React.createElement(App));
  const indexPath = new URL('../dist/index.html', import.meta.url);
  const { readFile, writeFile } = await import('node:fs/promises');
  const html = await readFile(indexPath, 'utf8');
  const rootPattern = /<div id="root">[\\s\\S]*?<\\/div>/;
  if (!rootPattern.test(html)) throw new Error('Could not find the #root element in dist/index.html');
  await writeFile(indexPath, html.replace(rootPattern, '<div id="root">' + markup + '</div>'));
  console.log('Prerendered portfolio HTML into dist/index.html');
} finally {
  await vite.close();
}
