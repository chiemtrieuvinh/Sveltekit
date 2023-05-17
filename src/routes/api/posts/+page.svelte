<script lang="ts">
  async function getPosts() {
    const response = await fetch("/api/posts");
    const posts: any[] = await response.json();
    return posts;
  }
</script>

<h1>Post</h1>

{#await getPosts()}
  <p>Loading...</p>
{:then posts}
  <!-- <pre>
    {JSON.stringify(posts, null, 2)}
</pre> -->
  <p>Showing {posts.length}</p>
  {#each posts as { slug, title }}
    <ul>
      <li>
        <a href="/posts/{slug}">{title}</a>
      </li>
    </ul>
  {/each}
{:catch error}
  <p>{error.message}</p>
{/await}
