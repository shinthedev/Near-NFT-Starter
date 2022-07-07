<script>
	import Footer from '$lib/components/footer.svelte';
	import Nav from '$lib/components/nav.svelte';
	import '../app.css';
</script>

<div class="max-w-8xl mx-auto">
	<Nav />
	<slot />
	<Footer />
</div>
