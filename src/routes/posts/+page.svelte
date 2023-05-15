<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	onMount(() => console.log('Mounted Posts Page'));
	onDestroy(() => console.log('UnMounted Posts Page'));
</script>

<div>
	<h1>Posts Page</h1>
</div>

<p>
	You can <a href="/posts/create">+ create</a> or edit your posts here.
</p>
