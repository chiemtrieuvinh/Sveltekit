<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import type { PageData } from "./$types";
  onMount(() => console.log("Mounted Home Page"));
  onDestroy(() => console.log("UnMounted Home Page"));
  export let data: PageData;
  $: ({ posts } = data);
</script>

<div>
  <h1>Home Page</h1>
  <h1>Posts</h1>
  <p>Showing {posts.length} posts.</p>
</div>
<ul>
  {#each posts as post}
    <li>
      <a href="/posts/{post.slug}">{post.title}</a>
    </li>
  {/each}
</ul>
