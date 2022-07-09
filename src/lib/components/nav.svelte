<script lang="ts">
	let walletAddress: string = 'yaboimeek.near';
	let addressLength: number;
	addressLength = walletAddress.length;

	let shortAddress = walletAddress.slice(0 - 11);
</script>

<div class="relative flex justify-between bg-blue-50 bg-opacity-30">
	<div class="flex w-full items-center px-12 py-8">
		<a class="font-heading flex-shrink-0 text-3xl font-bold" href="#">
			<img class="h-9" src="" alt="" width="auto" />
		</a>
		<ul
			class="absolute top-1/2 left-1/2 hidden -translate-y-1/2 -translate-x-1/2 transform lg:flex lg:w-auto lg:items-center"
		>
			<li>
				<a class="font-heading mr-12 font-bold hover:text-gray-600" href="#">Page 1</a>
			</li>
			<li>
				<a class="font-heading mr-12 font-bold hover:text-gray-600" href="#">Page 2</a>
			</li>
			<li><a class="font-heading mr-12 font-bold hover:text-gray-600" href="#">Page 3</a></li>
			<li><a class="font-heading mr-12 font-bold hover:text-gray-600" href="#">Page 4</a></li>
			<li><a class="font-heading font-bold hover:text-gray-600" href="#">Page 5</a></li>
		</ul>
	</div>
	<div class="mr-12 hidden items-center justify-end xl:flex">
		<a class="flex items-center" href="#">
			<svg
				class="mr-3"
				width="23"
				height="23"
				viewbox="0 0 23 23"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			<span
				class="font-heading inline-block h-6 w-6 rounded-full bg-orange-300 text-center font-semibold text-white"
				>3</span
			>
		</a>
	</div>
	{#if addressLength == 64}
		<button class="hidden flex-shrink-0 border-l px-8 xl:block">
			<div class="flex items-center">
				<img
					class="mr-2 h-9 w-9 rounded-full object-cover"
					src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg"
					alt=""
				/>
				<span class="mr-2 font-medium">{shortAddress}...</span>
				<span>
					<svg
						width="10"
						height="6"
						viewbox="0 0 10 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1.66797 1.66699L5.0013 5.00033L8.33464 1.66699"
							stroke="black"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</span>
			</div>
		</button>
	{:else}
		<button class="hidden flex-shrink-0 border-l px-8 xl:block">
			<div class="flex items-center">
				<img
					class="mr-2 h-9 w-9 rounded-full object-cover"
					src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg"
					alt=""
				/>
				<span class="mr-2 font-medium">{walletAddress}</span>
				<span>
					<svg
						width="10"
						height="6"
						viewbox="0 0 10 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1.66797 1.66699L5.0013 5.00033L8.33464 1.66699"
							stroke="black"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</span>
			</div>
		</button>
	{/if}
	<a class="mr-6 flex items-center text-gray-900 xl:hidden" href="#">
		<svg
			class="mr-2"
			width="23"
			height="23"
			viewbox="0 0 23 23"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
		<span
			class="font-heading inline-block h-6 w-6 rounded-full bg-orange-300 text-center font-semibold text-white"
			>3</span
		>
	</a>
	<a class="navbar-burger mr-12 self-center xl:hidden" href="#">
		<svg width="20" height="12" viewbox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z"
				fill="currentColor"
			/>
		</svg>
	</a>
</div>
