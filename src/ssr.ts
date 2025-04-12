import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { render } from "svelte/server";

import { createInertiaApp } from "@inertiajs/svelte";
import createServer from "@inertiajs/svelte/server";

createServer((page) =>
  createInertiaApp({
    page,
    resolve: (name) =>
      resolvePageComponent(`./pages/${name}.svelte`, import.meta.glob("./pages/**/*.svelte")),
    setup: ({ App, props }) => render(App, { props }),
  })
);
