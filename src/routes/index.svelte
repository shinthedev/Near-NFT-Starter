<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import DiscoverCard from '$lib/components/discoverCard.svelte';
	import '@fontsource/inter';
	import '@fontsource/poppins';
	import '@fontsource/space-mono';

	let currentYear = new Date().getFullYear();
	let twitterTag = '@CompanyName';
	let companyEmail = 'name@company.com';
</script>

<svelte:head>
	<title>Starter template</title>
</svelte:head>

<body class="bg-body text-body font-body antialiased">
	<div class="">
		<section class="overflow-x-hidden bg-gray-100 py-20">
			<div class="container mx-auto px-4">
				<div class="-mx-3 mb-20 flex flex-wrap">
					<div class="mb-6 w-full px-3 lg:mb-0 lg:w-1/2">
						<div
							class="relative mb-6 h-64 w-full bg-cover bg-center bg-no-repeat"
							style="background-image: url('https://wallpapercrafter.com/th800/74572-artstation-artist-artwork-digital-art-hd-4k.jpg');"
						>
							<span
								class="font-heading mt-4 ml-4 inline-block rounded-full border-2 border-blue-500 bg-white px-2 py-1 text-xs font-bold text-blue-500"
								>New</span
							>
							<a class="absolute inset-0 flex items-end" href="#">
								<div class="pl-12 pb-12">
									<h3 class="font-heading text-3xl font-bold text-white">Into the metaverse</h3>
									<p class="font-heading flex items-start text-xl font-bold text-white">
										<img
											class="mt-1 mr-2 w-6 rounded-xl"
											src="https://s2.coinmarketcap.com/static/img/coins/64x64/11808.png"
										/>
										<span class="mt-1/2">400</span>
									</p>
								</div>
							</a>
						</div>
						<div
							class="relative h-64 w-full bg-cover bg-center bg-no-repeat"
							style="background-image: url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/abstract-tree-art-original-painting-rainbow-colors-beautiful-artwork-megan-duncanson-megan-duncanson.jpg');"
						>
							<span
								class="font-heading mt-4 ml-4 inline-block rounded-full border-2 border-blue-500 bg-white px-2 py-1 text-xs font-bold text-blue-500"
								>-New</span
							>
							<a class="absolute inset-0 flex items-end" href="#">
								<div class="pl-12 pb-12">
									<h3 class="font-heading text-3xl font-bold text-white">Tennis racket Sanks 2</h3>
									<p class="font-heading flex items-start text-xl font-bold text-white">
										<img
											class="mt-1 mr-2 w-6 rounded-xl"
											src="https://s2.coinmarketcap.com/static/img/coins/64x64/11808.png"
										/>
										<span class="mt-1/2 mr-1">600</span>
										<span class="mt-1 text-sm font-normal line-through">800</span>
									</p>
								</div>
							</a>
						</div>
					</div>
					<div class="w-full px-3 lg:w-1/2">
						<div
							class="relative mb-6 inline-block h-96 w-full bg-cover bg-no-repeat lg:h-full"
							style="background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/183cd902-83c2-4c16-93d0-7157d5b54edb/df4mjbh-0f158e33-ee6d-4d80-9b05-032193d53722.jpg/v1/fill/w_1600,h_1143,q_75,strp/city_of_blackholes_by_penguart_mbp_df4mjbh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE0MyIsInBhdGgiOiJcL2ZcLzE4M2NkOTAyLTgzYzItNGMxNi05M2QwLTcxNTdkNWI1NGVkYlwvZGY0bWpiaC0wZjE1OGUzMy1lZTZkLTRkODAtOWIwNS0wMzIxOTNkNTM3MjIuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WV9c8d2Iw9NF4w7tcnJXAMvhSIbHsqQuGdnNOVQaqwM');"
						>
							<span
								class="font-heading ml-4 mt-4 inline-block rounded-full border-2 border-blue-400 bg-white px-2 py-1 text-xs font-bold uppercase text-blue-500"
								>Featured</span
							>
							<div class="absolute bottom-0 left-0 pb-20 pl-12">
								<span class="font-heading text-xl font-bold text-orange-300">NFT of the month</span>
								<h3 class="font-heading mt-3 mb-2 text-3xl font-bold text-white">
									City of blackholes
								</h3>
								<p class="font-heading mb-4 flex items-start text-xl font-bold text-white">
									<img
										class="mt-1 mr-2 w-6 rounded-xl"
										src="https://s2.coinmarketcap.com/static/img/coins/64x64/11808.png"
									/>
									<span class="mt-1/2">400</span>
								</p>
								<a
									class="font-heading inline-block rounded-md bg-orange-400 py-4 px-8 font-bold uppercase text-white transition duration-200 hover:bg-orange-400"
									href="#">Buy</a
								>
							</div>
						</div>
					</div>
				</div>
				<a
					class="font-heading rounded-md bg-orange-400 py-6 px-8 font-bold uppercase text-white hover:bg-blue-900"
					href="#">All NFT's</a
				>
			</div>
		</section>

		<section class="bg-gray-100 py-12">
			<div class="container mx-auto px-4">
				<h2 class="font-heading mb-16 text-4xl font-bold md:mb-24 md:text-5xl">
					Discover new NFT's
				</h2>
				<div class="-mx-4 mb-8 flex flex-wrap">
					<DiscoverCard />
					<DiscoverCard />
					<DiscoverCard />
					<DiscoverCard />
					<DiscoverCard />
					<DiscoverCard />
				</div>
				<div class="text-center">
					<a
						class="font-heading inline-block rounded-md bg-orange-300 py-6 px-8 font-bold uppercase text-white hover:bg-orange-400"
						href="#">Show More</a
					>
				</div>
			</div>
		</section>

		<section class="bg-gray-100 py-20">
			<div class="container mx-auto px-4">
				<h2 class="font-heading mb-16 text-4xl font-bold">FAQs</h2>
				<ul class="space-y-4">
					<li class="bg-gray-50 py-6 pr-8 md:pr-12">
						<div class="border-l-2 border-blue-300">
							<button
								class="flex w-full items-center justify-between pl-8 text-left md:pl-16 lg:pl-28"
							>
								<span class="font-heading mr-4 text-xl font-bold"
									>Sed eget accumsan ipsum. Praesent dignissim?</span
								>
								<svg
									class="flex-shrink-0"
									width="18"
									height="10"
									viewbox="0 0 18 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.0185 0.201172C16.2905 -0.0668276 16.7275 -0.0668276 16.9975 0.201172C17.2675 0.469172 17.2685 0.902172 16.9975 1.17017L9.0895 9.00017C8.8195 9.26817 8.3825 9.26817 8.1105 9.00017L0.2025 1.17017C-0.0674999 0.902172 -0.0674999 0.469172 0.2025 0.201172C0.4735 -0.0668278 0.9115 -0.0668278 1.1815 0.201172L8.6005 7.34217L16.0185 0.201172Z"
										fill="#1F40FF"
									/>
								</svg>
							</button>
							<p class="mt-4 hidden max-w-4xl pl-8 pr-20 text-gray-500 md:pl-16 lg:pl-28">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed
								tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum
								quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius.
								Maecenas rhoncus consectetur rutrum.
							</p>
						</div>
					</li>
					<li class="bg-gray-50 pr-8 pt-12 pb-16 md:pr-12">
						<div class="border-l-2 border-blue-300">
							<button
								class="flex w-full items-center justify-between pl-8 text-left md:pl-16 lg:pl-28"
							>
								<span class="font-heading mr-4 text-2xl font-bold text-blue-300"
									>After curabitur eu laoreet libero eget en vel odio?</span
								>
								<svg
									class="flex-shrink-0"
									width="18"
									height="10"
									viewbox="0 0 18 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1.18072 9C0.90872 9.268 0.471719 9.268 0.201719 9C-0.0682816 8.732 -0.069281 8.299 0.201719 8.031L8.10972 0.201C8.37972 -0.0670004 8.81672 -0.0670004 9.08872 0.201L16.9967 8.031C17.2667 8.299 17.2667 8.732 16.9967 9C16.7257 9.268 16.2877 9.268 16.0177 9L8.59872 1.859L1.18072 9Z"
										fill="#1F40FF"
									/>
								</svg>
							</button>
							<p class="mt-8 max-w-4xl pl-8 pr-20 text-gray-500 md:pl-16 lg:pl-28">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed
								tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum
								quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius.
								Maecenas rhoncus consectetur rutrum.
							</p>
						</div>
					</li>
					<li class="bg-gray-50 py-6 pr-8 md:pr-12">
						<div class="border-l-2 border-blue-300">
							<button
								class="flex w-full items-center justify-between pl-8 text-left md:pl-16 lg:pl-28"
							>
								<span class="font-heading mr-4 text-xl font-bold"
									>A eget euismod dignissim, felis tortor mollis eros, non ultricies turpis eget
									leo?</span
								>
								<svg
									class="flex-shrink-0"
									width="18"
									height="10"
									viewbox="0 0 18 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.0185 0.201172C16.2905 -0.0668276 16.7275 -0.0668276 16.9975 0.201172C17.2675 0.469172 17.2685 0.902172 16.9975 1.17017L9.0895 9.00017C8.8195 9.26817 8.3825 9.26817 8.1105 9.00017L0.2025 1.17017C-0.0674999 0.902172 -0.0674999 0.469172 0.2025 0.201172C0.4735 -0.0668278 0.9115 -0.0668278 1.1815 0.201172L8.6005 7.34217L16.0185 0.201172Z"
										fill="#1F40FF"
									/>
								</svg>
							</button>
							<p class="mt-4 hidden max-w-4xl pl-28 pr-20 text-gray-500">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed
								tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum
								quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius.
								Maecenas rhoncus consectetur rutrum.
							</p>
						</div>
					</li>
					<li class="bg-gray-50 py-6 pr-8 md:pr-12">
						<div class="border-l-2 border-blue-300">
							<button
								class="flex w-full items-center justify-between pl-8 text-left md:pl-16 lg:pl-28"
							>
								<span class="font-heading mr-4 text-xl font-bold"
									>Curabitur elementum eu metus ut consequat?</span
								>
								<svg
									class="flex-shrink-0"
									width="18"
									height="10"
									viewbox="0 0 18 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.0185 0.201172C16.2905 -0.0668276 16.7275 -0.0668276 16.9975 0.201172C17.2675 0.469172 17.2685 0.902172 16.9975 1.17017L9.0895 9.00017C8.8195 9.26817 8.3825 9.26817 8.1105 9.00017L0.2025 1.17017C-0.0674999 0.902172 -0.0674999 0.469172 0.2025 0.201172C0.4735 -0.0668278 0.9115 -0.0668278 1.1815 0.201172L8.6005 7.34217L16.0185 0.201172Z"
										fill="#1F40FF"
									/>
								</svg>
							</button>
							<p class="mt-4 hidden max-w-4xl pl-8 pr-20 text-gray-500 md:pl-16 lg:pl-28">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed
								tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum
								quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius.
								Maecenas rhoncus consectetur rutrum.
							</p>
						</div>
					</li>
					<li class="bg-gray-50 py-6 pr-8 md:pr-12">
						<div class="border-l-2 border-blue-300">
							<button
								class="flex w-full items-center justify-between pl-8 text-left md:pl-16 lg:pl-28"
							>
								<span class="font-heading mr-4 text-xl font-bold"
									>Sed eget accumsan ipsum. Praesent dignissim?</span
								>
								<svg
									class="flex-shrink-0"
									width="18"
									height="10"
									viewbox="0 0 18 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.0185 0.201172C16.2905 -0.0668276 16.7275 -0.0668276 16.9975 0.201172C17.2675 0.469172 17.2685 0.902172 16.9975 1.17017L9.0895 9.00017C8.8195 9.26817 8.3825 9.26817 8.1105 9.00017L0.2025 1.17017C-0.0674999 0.902172 -0.0674999 0.469172 0.2025 0.201172C0.4735 -0.0668278 0.9115 -0.0668278 1.1815 0.201172L8.6005 7.34217L16.0185 0.201172Z"
										fill="#1F40FF"
									/>
								</svg>
							</button>
							<p class="mt-4 hidden max-w-4xl pl-8 pr-20 text-gray-500 md:pl-16 lg:pl-28">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed
								tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum
								quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius.
								Maecenas rhoncus consectetur rutrum.
							</p>
						</div>
					</li>
				</ul>
				<div class="mt-20 text-center">
					<a
						class="font-heading inline-block rounded-md bg-blue-300 py-5 px-8 font-bold uppercase text-white hover:bg-blue-400"
						href="#">More</a
					>
				</div>
			</div>
		</section>

		<section class="bg-gray-100">
			<div class="flex flex-wrap">
				<div class="w-full bg-white py-20 px-6 md:w-5/12 lg:w-3/12">
					<div class="mx-auto max-w-xs">
						<a class="font-heading mb-12 inline-block text-3xl font-bold" href="#">
							<img class="h-9" src="yofte-assets/logos/yofte-logo.svg" alt="" width="auto" />
						</a>
						<div class="mb-12">
							<h1 class="mb-4 text-2xl font-semibold">Our manifesto</h1>
							<p class="mb-4 font-medium">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed
								tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum
								quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius.
								Maecenas rhoncus consectetur rutrum.
							</p>
							<p class="font-light">- Founder "Name of founder"</p>
						</div>
						<div class="mb-16 flex md:mb-40">
							<a class="mr-2 inline-flex h-12 w-12 items-center justify-center" href="#">
								<img src="https://img.icons8.com/offices/344/twitter.png" alt="" />
							</a>
							<a
								class="mr-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-300"
								href="#"
							>
								<img src="yofte-assets/buttons/instagram-circle.svg" alt="" />
							</a>
							<a
								class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-300"
								href="#"
							>
								<img src="yofte-assets/buttons/twitter-circle.svg" alt="" />
							</a>
						</div>
						<div class="flex flex-wrap">
							<div class="mb-2 w-1/3 px-1 lg:mb-0">
								<img class="w-full" src="yofte-assets/brands/visa.svg" alt="" />
							</div>
							<div class="mb-2 w-1/3 px-1 lg:mb-0">
								<img class="w-full" src="yofte-assets/brands/paypal.svg" alt="" />
							</div>
							<div class="mb-2 w-1/3 px-1 lg:mb-0">
								<img class="w-full" src="yofte-assets/brands/mastercard.svg" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div class="w-full py-12 px-6 md:w-7/12 lg:w-9/12 lg:pl-40">
					<div class="-mx-4 mt-16 flex flex-wrap border-b pb-20">
						<div class="mb-10 w-full px-4 md:w-1/2 lg:mb-0 lg:w-1/3">
							<h3 class="font-heading mb-8 text-xl font-bold">Row 1</h3>
							<ul>
								<li class="mb-6"><a class="hover:underline" href="#">Item 1</a></li>
								<li class="mb-6"><a class="hover:underline" href="#">Item 2</a></li>
								<li class="mb-6"><a class="hover:underline" href="#">Item 3</a></li>
								<li class="mb-6"><a class="hover:underline" href="#">Item 4</a></li>
								<li class="mb-6"><a class="hover:underline" href="#">Item 5</a></li>
								<li class="mb-6"><a class="hover:underline" href="#">Item 6</a></li>
								<li><a class="hover:underline" href="#">Item 7</a></li>
							</ul>
						</div>
						<div class="mb-10 w-full px-4 md:w-1/2 lg:mb-0 lg:w-1/3">
							<h3 class="font-heading mb-8 text-xl font-bold">Row 2</h3>
							<ul>
								<li class="mb-6"><a class="hover:underline" href="#">Item 1</a></li>
								<li class="mb-6"><a class="hover:underline" href="#">Item 2</a></li>
								<li class="mb-6"><a class="hover:underline" href="#">Item 3</a></li>
								<li class="mb-6"><a class="hover:underline" href="#">Item 4</a></li>
								<li class="mb-6"><a class="hover:underline" href="#">Item 5</a></li>
								<li class="mb-6"><a class="hover:underline" href="#">Item 6</a></li>
								<li><a class="hover:underline" href="#">Item 7</a></li>
							</ul>
						</div>
						<div class="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
							<h3 class="font-heading mb-8 text-xl font-bold">Contact Us</h3>
							<ul>
								<li class="mb-6">
									<h4 class="mb-2">Twitter</h4>
									<a class="text-blue-500 hover:underline" href="#">{twitterTag}</a>
								</li>
								<li class="mb-6">
									<h4 class="mb-2">Email</h4>
									<a class="text-blue-500 hover:underline" href="#">{companyEmail}</a>
								</li>
								<li>
									<h4 class="mb-2">Customer support</h4>
									<a class="text-blue-500 hover:underline" href="#">Support forum</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="relative mt-8 pb-32 lg:pb-0">
						<p class="font-heading font-semibold">© Copyright {currentYear} "Your project name"</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</body>
