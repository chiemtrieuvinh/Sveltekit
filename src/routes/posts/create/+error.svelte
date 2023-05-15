<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>Yikes !</h1>
<h1>{$page.error?.message}</h1>
<p>Something went horribly wrong but the blast raduis has been contained to this route.</p>
<pre>
    {JSON.stringify($page, null, 2)}
</pre>
