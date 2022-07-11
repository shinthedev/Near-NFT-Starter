<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import DiscoverCard from '$lib/components/discoverCard.svelte';
	import { image1, image2, image3 } from '$lib/models/details';
	import '@fontsource/inter';
	import '@fontsource/poppins';
	import '@fontsource/space-mono';
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
							style="background-image: url({image1.image});"
						>
							<span
								class="font-heading mt-4 ml-4 inline-block rounded-full border-2 border-blue-500 bg-white px-2 py-1 text-xs font-bold text-blue-500"
								>New</span
							>
							<a class="absolute inset-0 flex items-end" href="#">
								<div class="pl-12 pb-12">
									<h3 class="font-heading text-3xl font-bold text-white">{image1.name}</h3>
									<p class="font-heading flex items-start text-xl font-bold text-white">
										<img
											class="mt-1 mr-2 w-6 rounded-xl"
											src="https://s2.coinmarketcap.com/static/img/coins/64x64/11808.png"
										/>
										<span class="mt-1/2">{image1.price}</span>
									</p>
								</div>
							</a>
						</div>
						<div
							class="relative h-64 w-full bg-cover bg-center bg-no-repeat"
							style="background-image: url({image2.image});"
						>
							<span
								class="font-heading mt-4 ml-4 inline-block rounded-full border-2 border-blue-500 bg-white px-2 py-1 text-xs font-bold text-blue-500"
								>New</span
							>
							<a class="absolute inset-0 flex items-end" href="#">
								<div class="pl-12 pb-12">
									<h3 class="font-heading text-3xl font-bold text-white">{image2.name}</h3>
									<p class="font-heading flex items-start text-xl font-bold text-white">
										<img
											class="mt-1 mr-2 w-6 rounded-xl"
											src="https://s2.coinmarketcap.com/static/img/coins/64x64/11808.png"
										/>
										<span class="mt-1/2 mr-1">{image2.price}</span>
									</p>
								</div>
							</a>
						</div>
					</div>
					<div class="w-full px-3 lg:w-1/2">
						<div
							class="relative mb-6 inline-block h-96 w-full bg-cover bg-no-repeat lg:h-full"
							style="background-image: url({image3.image});"
						>
							<span
								class="font-heading ml-4 mt-4 inline-block rounded-full border-2 border-blue-400 bg-white px-2 py-1 text-xs font-bold uppercase text-blue-500"
								>Featured</span
							>
							<div class="absolute bottom-0 left-0 pb-20 pl-12">
								<span class="font-heading text-xl font-bold text-orange-300">NFT of the month</span>
								<h3 class="font-heading mt-3 mb-2 text-3xl font-bold text-white">
									{image3.name}
								</h3>
								<p class="font-heading mb-4 flex items-start text-xl font-bold text-white">
									<img
										class="mt-1 mr-2 w-6 rounded-xl"
										src="https://s2.coinmarketcap.com/static/img/coins/64x64/11808.png"
									/>
									<span class="mt-1/2">{image3.price}</span>
								</p>
								<a
									class="font-heading inline-block rounded-md bg-orange-400 py-4 px-8 font-bold uppercase text-white transition duration-200 hover:bg-orange-400"
									href="/product">Buy</a
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
			</div>
		</section>
		<div class="overflow-hidden bg-gray-100 py-8">
			<div class="container m-auto text-gray-500 md:px-6">
				<div>
					<span class="font-heading mb-16 text-4xl font-bold text-gray-600 md:mb-24 md:text-5xl"
						>Main features</span
					>
					<h2 class="mt-4 text-2xl font-bold text-gray-900 md:text-4xl">
						A technology-first approach to payments <br class="lg:block" hidden /> and finance
					</h2>
				</div>
				<div
					class="mt-16 grid divide-x divide-y overflow-hidden rounded-xl border sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-4"
				>
					<div class="group relative bg-white transition hover:z-[1] hover:shadow-2xl">
						<div class="relative space-y-8 p-8">
							<img
								src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png"
								class="w-10"
								width="512"
								height="512"
								alt="burger illustration"
							/>

							<div class="space-y-2">
								<h5
									class="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600"
								>
									First feature
								</h5>
								<p class="text-sm text-gray-600">
									Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
								</p>
							</div>
							<a href="#" class="flex items-center justify-between group-hover:text-yellow-600">
								<span class="text-sm">Read more</span>
								<span
									class="-translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
									>&RightArrow;</span
								>
							</a>
						</div>
					</div>
					<div class="group relative bg-white transition hover:z-[1] hover:shadow-2xl">
						<div class="relative space-y-8 p-8">
							<img
								src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png"
								class="w-10"
								width="512"
								height="512"
								alt="burger illustration"
							/>

							<div class="space-y-2">
								<h5
									class="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600"
								>
									Second feature
								</h5>
								<p class="text-sm text-gray-600">
									Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
								</p>
							</div>
							<a href="#" class="flex items-center justify-between group-hover:text-yellow-600">
								<span class="text-sm">Read more</span>
								<span
									class="-translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
									>&RightArrow;</span
								>
							</a>
						</div>
					</div>
					<div class="group relative bg-white transition hover:z-[1] hover:shadow-2xl">
						<div class="relative space-y-8 p-8">
							<img
								src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png"
								class="w-10"
								width="512"
								height="512"
								alt="burger illustration"
							/>

							<div class="space-y-2">
								<h5
									class="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600"
								>
									Third feature
								</h5>
								<p class="text-sm text-gray-600">
									Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
								</p>
							</div>
							<a href="#" class="flex items-center justify-between group-hover:text-yellow-600">
								<span class="text-sm">Read more</span>
								<span
									class="-translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
									>&RightArrow;</span
								>
							</a>
						</div>
					</div>
					<div
						class="group relative bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block"
					>
						<div
							class="relative space-y-8 rounded-lg border-dashed p-8 transition duration-300 group-hover:scale-90 group-hover:border group-hover:bg-white"
						>
							<img
								src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png"
								class="w-10"
								width="512"
								height="512"
								alt="burger illustration"
							/>

							<div class="space-y-2">
								<h5
									class="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600"
								>
									More features
								</h5>
								<p class="text-sm text-gray-600">
									Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
								</p>
							</div>
							<a href="#" class="flex items-center justify-between group-hover:text-yellow-600">
								<span class="text-sm">Read more</span>
								<span
									class="-translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
									>&RightArrow;</span
								>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

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
						class="font-heading inline-block rounded-md bg-orange-400 py-5 px-8 font-bold uppercase text-white hover:bg-orange-300"
						href="#">More</a
					>
				</div>
			</div>
		</section>
	</div>
</body>
