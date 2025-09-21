import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isGitHubPages = process.env.GITHUB_PAGES === 'true' || process.env.CI === 'true';
  const baseUrl = isGitHubPages ? '/DeepCheck/' : '/';
  
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
