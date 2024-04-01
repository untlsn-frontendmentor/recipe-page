// @refresh reload
import 'untcss-reset';
import 'uno.css';


export default function App() {
	return (
		<div class="bg-bg-primary lg:py-24">
			<main class="max-w-screen-lg lg:rounded-xl bg-white mx-auto">
				<div class="lg:p-8">
					<img src="/images/image-omelette.jpeg" alt="omelette" class="lg:rounded-xl w-full" />
				</div>
				<h1 class="text-4xl font-serif m-8">Simple Omelette Recipe</h1>
				<h3 class="m-8 mb-8">
					An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
					to perfection, optionally filled with your choice of cheese, vegetables, or meats.
				</h3>
				<section class="bg-purple-bg text-text-gray m-8 p-8 rounded-lg">
					<h2 class="text-purple-text font-bold text-xl">Preparation time</h2>
					<ul class="space-y-2 mt-4">
						<li class="relative pl-6 before:(c-dot absolute inset-0 my-auto h-fit text-purple-text)">
							<b>Total</b>: Approximately 10 minutes
						</li>
						<li class="relative pl-6 before:(c-dot absolute inset-0 my-auto h-fit text-purple-text)">
							<b>Preparation</b>: 5 minutes
						</li>
						<li class="relative pl-6 before:(c-dot absolute inset-0 my-auto h-fit text-purple-text)">
							<b>Cooking</b>: 5 minutes
						</li>
					</ul>
				</section>
				<section class="m-8 p-8">
					<h2 class="font-bold text-xl text-text-brown font-serif">Ingredients</h2>
					<ul class="space-y-2 mt-4">
						<li class="relative pl-6 before:(c-dot absolute inset-0 my-auto h-fit text-text-brown)">2-3 large eggs</li>
						<li class="relative pl-6 before:(c-dot absolute inset-0 my-auto h-fit text-text-brown)">Salt, to taste</li>
						<li class="relative pl-6 before:(c-dot absolute inset-0 my-auto h-fit text-text-brown)">Pepper, to taste</li>
						<li class="relative pl-6 before:(c-dot absolute inset-0 my-auto h-fit text-text-brown)">1 tablespoon of butter or oil</li>
						<li class="relative pl-6 before:(c-dot absolute inset-0 my-auto h-fit text-text-brown)">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
					</ul>
				</section>
				<section class="m-8 p-8">
					<h2 class="font-bold text-xl text-text-brown font-serif">Instructions</h2>

					<ol class="list-decimal ml-4 mt-4">
						<li class="marker:(text-text-brown font-bold) pl-2">
							<b>Beat the eggs</b>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
							You can add a tablespoon of water or milk for a fluffier texture.
						</li>
						<li class="marker:(text-text-brown font-bold) pl-2">
							<b>Heat the pan</b>: Place a non-stick frying pan over medium heat and add butter or oil.
						</li>
						<li class="marker:(text-text-brown font-bold) pl-2">
							<b>Cook the omelette</b>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
							the eggs evenly coat the surface.
						</li>
						<li class="marker:(text-text-brown font-bold) pl-2">
							<b>Add fillings (optional)</b>: When the eggs begin to set at the edges but are still slightly runny in the
							middle, sprinkle your chosen fillings over one half of the omelette.
						</li>
						<li class="marker:(text-text-brown font-bold) pl-2">
							<b>Fold and serve</b>: As the omelette continues to cook, carefully lift one edge and fold it over the
							fillings. Let it cook for another minute, then slide it onto a plate.
						</li>
						<li class="marker:(text-text-brown font-bold) pl-2">
							<b>Enjoy</b>: Serve hot, with additional salt and pepper if needed.
						</li>
					</ol>
				</section>
				<section class="m-8 p-8">
					<h2 class="font-bold text-xl text-text-brown font-serif">Nutrition</h2>
					<h3 class="mt-4 mb-2">The table below shows nutritional values per serving without the additional fillings.</h3>
					<ul class="divide-y-1">
						<li class="grid-(~ cols-2) py-2 px-6">
							<p>Calories</p>
							<p class="font-bold text-text-brown">277kcal</p>
						</li>
						<li class="grid-(~ cols-2) py-2 px-6">
							<p>Carbs</p>
							<p class="font-bold text-text-brown">0g</p>
						</li>
						<li class="grid-(~ cols-2) py-2 px-6">
							<p>Protein</p>
							<p class="font-bold text-text-brown">20g</p>
						</li>
						<li class="grid-(~ cols-2) py-2 px-6">
							<p>Fat</p>
							<p class="font-bold text-text-brown">22g</p>
						</li>
					</ul>
				</section>
			</main>
		</div>
	);
}
