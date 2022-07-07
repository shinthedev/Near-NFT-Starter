<script>
	import { companyEmail, twitterTag } from '../models/details';
	let currentYear = new Date().getFullYear();
</script>

<section class="bg-gray-100">
	<div class="flex flex-wrap">
		<div class="w-full bg-white py-20 px-6 md:w-5/12 lg:w-3/12">
			<div class="mx-auto max-w-xs">
				<a class="font-heading mb-12 inline-block text-3xl font-bold" href="#">
					<img class="h-9" src="" alt="" width="auto" />
				</a>
				<div class="mb-12">
					<h1 class="mb-4 text-2xl font-semibold">Our manifesto</h1>
					<p class="mb-4 font-medium">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed
						tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum quis
						nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas
						rhoncus consectetur rutrum.
					</p>
					<p class="font-light">- Founder "Name of founder"</p>
				</div>
				<div class="mb-16 flex md:mb-40">
					<a class="mr-2 inline-flex h-12 w-12 items-center justify-center" href="#">
						<img src="https://img.icons8.com/offices/344/twitter.png" alt="" />
					</a>
					<a class="mr-2 inline-flex h-12 w-12 items-center justify-center" href="#">
						<img src="https://img.icons8.com/plasticine/344/discord-logo.png" alt="" />
					</a>
					<a class="inline-flex h-12 w-12 items-center justify-center" href="#">
						<img src="https://img.icons8.com/ios-filled/344/medium-monogram--v1.png" alt="" />
					</a>
				</div>
				<div class="flex flex-wrap">
					<div class="mb-2 w-1/3 px-1 lg:mb-0">
						<img class="w-full" src="" alt="" />
					</div>
					<div class="mb-2 w-1/3 px-1 lg:mb-0">
						<img class="w-full" src="" alt="" />
					</div>
					<div class="mb-2 w-1/3 px-1 lg:mb-0">
						<img class="w-full" src="" alt="" />
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
