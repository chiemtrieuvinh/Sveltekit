<script lang="ts">
  import { page } from "$app/stores";
  import type { PageData } from "./$types";
  export let data: PageData;

  function formatDate(date: Date) {
    return new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(date);
  }
</script>

<hgroup>
  <h1>{data.post.title}</h1>
  <h2>{formatDate(data.post.createdAt)}</h2>
</hgroup>

<div class="content">
  {@html data.post.content}
</div>
<br />
<div class="content">
  {data.post.content}
</div>

<pre>
    {JSON.stringify($page, null, 2)}
</pre>
