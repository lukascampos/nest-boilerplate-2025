import { defineConfig } from 'vitest/config';
import swc from 'unplugin-swc';

export default defineConfig(async () => {
  const { default: tsConfigPaths } = await import('vite-tsconfig-paths');

  return {
    test: {
      globals: true,
      root: './',
    },
    plugins: [
      tsConfigPaths(),
      swc.vite({
        module: { type: 'es6' },
      }),
    ],
  };
});
