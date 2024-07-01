import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/quizzPersonalizado/', // Adicione a base URL do seu repositório
  plugins: [react()],
});
