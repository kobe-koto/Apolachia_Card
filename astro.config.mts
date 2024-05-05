import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import icon from "astro-icon";
import { site } from "./src/config/Global.js";


export default defineConfig({
    site,
    prefetch: true,
    integrations: [
        sitemap({
            filter: page => (
                page !== `${site}/404.html` && 
                page !== `${site}/404/` && 
                page !== `${site}/404`
            )
        }),
        compress({
            HTML: {
                collapseWhitespace: true,
                conservativeCollapse: true
            }
        }),
        icon()
    ],
    vite: {
        // esbuild: {
        //     drop: ["console", "debugger"],
        // },
    },
});
