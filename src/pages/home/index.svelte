<script lang="ts">
  export let some: string;
</script>

<svelte:head>
  <title>Inertia.js - Svelte Template with Tailwind CSS and Golang backend</title>
</svelte:head>
<main>
  <h1>Vite + Svelte</h1>

  <div class="relative isolate px-6 pt-14 lg:px-8">Hello {some}</div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer"
      >SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
  .read-the-docs {
    color: #888;
  }
</style>
