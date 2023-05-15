<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	onMount(() => console.log('Mounted Home Page'));
	onDestroy(() => console.log('UnMounted Home Page'));
</script>

<div>
	<h1>Home Page</h1>
</div>
