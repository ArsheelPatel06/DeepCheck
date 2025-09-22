import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // More robust GitHub Pages detection
  const isGitHubPages = process.env.GITHUB_PAGES === 'true' || 
                       process.env.CI === 'true' || 
                       process.env.GITHUB_ACTIONS === 'true' ||
                       mode === 'github-pages';
  
  const baseUrl = isGitHubPages ? '/DeepCheck/' : '/';
  
  console.log('Build configuration:', {
    isGitHubPages,
    baseUrl,
    env: {
      GITHUB_PAGES: process.env.GITHUB_PAGES,
      CI: process.env.CI,
      GITHUB_ACTIONS: process.env.GITHUB_ACTIONS,
    },
    mode,
    command
  });
  
  return {
    base: baseUrl,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      __IS_GITHUB_PAGES__: JSON.stringify(isGitHubPages),
    },
  };
});
