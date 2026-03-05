import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const commitSha = process.env.VERCEL_GIT_COMMIT_SHA || process.env.GIT_COMMIT || 'local';
const shortSha = commitSha.slice(0, 7);

export default defineConfig({
  plugins: [react()],
  define: {
    __APP_BUILD__: JSON.stringify(shortSha),
  },
});
