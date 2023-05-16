<script lang="ts">
	import '../app.css';
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/posts">Posts</a></li>
		<li><a href="/images/200x200">Images</a></li>
		<li><a href="/en/about">About</a></li>
		<li><a href="/media/path/to/image/200/200">Spread params Media</a></li>
		<!-- path/to/image relating to [...file] -->
	</ul>
</nav>
<slot />
