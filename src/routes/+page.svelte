<script lang="ts">
  import { graphql } from "$houdini";

  const raceUpdates = graphql(`
    subscription RaceUpdates($id: ID!) {
      raceUpdates(id: $id) {
        id
        status
        startTime
        results
      }
    }
  `);
  $: raceUpdates.listen({ id: "63e893071179ab8d27c7f61f" });

  const runnerUpdates = graphql(`
    subscription RunnerUpdates($id: ID!) {
      runnerUpdates(id: $id) {
        id
        scratchedTime
      }
    }
  `);
  $: runnerUpdates.listen({ id: "63e893071179ab8d27c7f61f" });
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
