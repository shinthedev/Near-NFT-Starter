<script>
	import { image1, image3 } from '$lib/models/details';
</script>

<section class="pt-20">
	<div class="container mx-auto px-4">
		<div class="-mx-4 mb-24 flex flex-wrap items-center lg:mb-52">
			<div class="mb-10 w-full px-4 lg:mb-0 lg:w-1/3">
				<span class="text-gray-500">Artist name</span>
				<h2 class="font-heading mt-2 mb-8 max-w-xl text-5xl font-bold md:text-6xl">
					{image3.name}
				</h2>
				<p class="font-heading inline-block text-2xl font-bold text-blue-300">
					<span>{image1.price}</span>
				</p>
				<p class="mt-8 max-w-md text-gray-500">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod feugiat nunc vitae
					pulvinar. Phasellus luctus id velit eget varius. Sed non aliquet leo. Vestibulum rhoncus
					libero in eleifend facilisis. Curabitur ac maximus mauris. Donec a est justo. Aenean vitae
					lobortis lorem. Fusce eget erat vel metus suscipit pellentesque sit.
				</p>
			</div>
			<div class="mb-40 w-full px-4 lg:mb-0 lg:w-1/3">
				<div class="relative" style="height: 564px;">
					<img class="h-full w-full object-cover" src={image3.image} alt="" />
				</div>
			</div>
			<div class="w-full px-4 lg:w-1/3">
				<div class="-mx-4 mb-12 flex">
					<div class="w-1/2 px-4">
						<span class="font-heading mb-4 block font-bold uppercase text-gray-400">QTY</span>
						<div
							class="font-heading inline-flex items-center rounded-md border border-gray-200 px-4 font-semibold text-gray-500 focus:border-blue-300 focus:ring-blue-300"
						>
							<button class="py-2 hover:text-gray-700">
								<svg
									width="12"
									height="2"
									viewBox="0 0 12 2"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g opacity="0.35"
										><rect
											x="12"
											width="2"
											height="12"
											transform="rotate(90 12 0)"
											fill="currentColor"
										/></g
									></svg
								>
							</button>
							<input
								class="m-0 w-12 rounded-md border-0 px-2 py-4 text-center focus:outline-none focus:ring-transparent md:text-right"
								type="number"
								placeholder="1"
							/>
							<button class="py-2 hover:text-gray-700">
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g opacity="0.35"
										><rect x="5" width="2" height="12" fill="currentColor" /><rect
											x="12"
											y="5"
											width="2"
											height="12"
											transform="rotate(90 12 5)"
											fill="currentColor"
										/></g
									></svg
								>
							</button>
						</div>
					</div>
				</div>
				<div class="mb-14 flex items-center">
					<a
						class="font-heading mr-6 inline-block w-full rounded-md bg-orange-300 py-5 px-8 text-center font-bold uppercase text-white transition duration-200 hover:bg-orange-400"
						href="#">Add to cart</a
					>
				</div>
				<div class="flex items-center">
					<span class="font-heading mr-8 font-bold uppercase text-gray-500">SHARE IT</span>
					<a class="mr-4 h-16 w-16" href="#">
						<img src="https://img.icons8.com/offices/344/twitter.png" alt="" />
					</a>
					<a class="mr-1 h-8 w-8" href="#">
						<img src="https://img.icons8.com/plasticine/344/discord-logo.png" alt="" />
					</a>
					<a class="h-8 w-8" href="#">
						<img src="https://img.icons8.com/ios-filled/344/medium-monogram--v1.png" alt="" />
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-gray-100">
		<div class="container mx-auto px-4">
			<div class="relative pt-12 pb-20 lg:pt-20">
				<ul class="top-0 mb-8 flex flex-wrap lg:absolute lg:-mt-16 lg:mb-0">
					<li class="w-1/2 text-center lg:w-auto">
						<a
							class="font-heading inline-block bg-white py-8 px-2 font-bold text-gray-500 shadow-2xl md:px-10"
							href="#">Description</a
						>
					</li>
					<li class="w-1/2 text-center lg:w-auto">
						<a
							class="font-heading inline-block py-6 px-2 font-bold text-gray-500 hover:text-gray-700 md:px-10"
							href="#">Artist bio</a
						>
					</li>
				</ul>
				<h3 class="font-heading mb-8 text-6xl font-bold text-blue-300">
					{image3.name}
				</h3>
				<p class="max-w-2xl text-gray-500">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue id elit a lacinia.
					Aliquam faucibus eros velit, vel commodo nunc ullamcorper at. Vivamus pharetra mattis
					tristique. Vestibulum dolor erat, lobortis eu commodo sit amet, venenatis quis nibh. Donec
					commodo convallis sodales. Aliquam at odio dignissim dolor euismod suscipit. Sed eleifend
					velit elementum, eleifend magna ac, semper nibh. Fusce ipsum nisi, pharetra ornare turpis
					at, malesuada maximus nisi. Ut ut condimentum velit, eget vestibulum elit. Morbi vulputate
					dolor eu lectus varius dignissim.<n /> Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Nullam enim ipsum, pretium ac gravida vel, ultricies ac nunc.
					Proin scelerisque ligula porta justo feugiat, nec mattis eros semper. Praesent blandit, neque
					eget scelerisque lobortis, eros purus cursus elit, ut venenatis magna elit quis leo. Nullam
					commodo felis et lorem volutpat commodo. Fusce vitae sem facilisis, blandit elit in, gravida
					mauris. Aenean metus libero, sodales eget pulvinar eu, accumsan et nulla. Vestibulum aliquam
					elit suscipit convallis aliquam. Donec diam nulla, lacinia nec eleifend non, fringilla eget
					orci. Cras bibendum porta fringilla. Aliquam erat volutpat. Interdum et malesuada fames ac
					ante ipsum primis in faucibus. Nunc in fringilla odio. Duis vestibulum lorem tellus, sed eleifend
					leo molestie in. Pellentesque tempus elementum ipsum, in mattis sapien commodo at. Aenean convallis,
					justo at feugiat condimentum, urna risus molestie tortor, vel tincidunt libero purus lobortis
					justo. In quis nunc aliquet, pharetra ipsum sit amet, fermentum risus. Nunc nec velit dictum,
					bibendum odio quis, tempus ex. Phasellus semper neque sagittis.
				</p>
			</div>
		</div>
	</div>
</section>
