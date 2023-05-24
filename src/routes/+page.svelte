<script lang="ts">
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";
  import type { PageData } from "./$types";
  import { invalidate, invalidateAll } from "$app/navigation";
  onMount(() => console.log("Mounted Home Page"));
  onDestroy(() => console.log("UnMounted Home Page"));
  export let data: PageData;
  $: ({ posts } = data);
  function returnLoadFunction() {
    // a)
    invalidate("posts");
    // // b)
    // invalidate('/api/posts')
    // // c)
    // invalidate(url => url.href.includes('posts'))

    // // d)
    // invalidateAll()
  }
  console.log($page.data, "check");
</script>

<div>
  <h1>Home Page</h1>
  <h1>Posts</h1>
  <p>Showing {posts.length} posts.</p>
</div>
{#if $page.data.user}
  Welcome {$page.data.user}
{/if}
<button on:click={returnLoadFunction}>Reload</button>
<ul>
  {#each posts as post}
    <li>
      <a href="/posts/{post.slug}">{post.title}</a>
    </li>
  {/each}
</ul>
