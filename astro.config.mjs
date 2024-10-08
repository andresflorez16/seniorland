import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Seniorland",
      social: {
        github: "https://github.com/andresflorez16/seniorland",
      },
      logo: {
        src: "/src/assets/houston.webp",
        alt: "Seniorland",
      },
      sidebar: [
        {
          label: "Empieza aquí",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introducción", slug: "guides/introduction" },
            { label: "Conocimientos previos", slug: "guides/previous-knowledge" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
