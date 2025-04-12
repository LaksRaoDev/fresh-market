<template>
    <!-- Main Content - Products with Filter Sidebar -->
    <main class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row gap-6">
            <!-- Filter Sidebar - Left Side -->
            <aside class="w-full md:w-64 lg:w-72 flex-shrink-0">


                <!-- Filter Content -->
                <div class=" md:block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
                    <!-- Categories Filter -->
                    <div class="border-b border-gray-200">
                        <div class="p-4">
                            <h3 class="font-semibold text-gray-800 mb-3">Categories</h3>
                            <div class="space-y-2">
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" checked />
                                    <span class="ml-2 text-gray-700">All Products</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Fresh Fruits</span>
                                    <span class="ml-1 text-xs text-gray-500">(24)</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Fresh Vegetables</span>
                                    <span class="ml-1 text-xs text-gray-500">(18)</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Organic</span>
                                    <span class="ml-1 text-xs text-gray-500">(32)</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Exotic Fruits</span>
                                    <span class="ml-1 text-xs text-gray-500">(8)</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Herbs & Greens</span>
                                    <span class="ml-1 text-xs text-gray-500">(12)</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Price Range Filter -->
                    <div class="border-b border-gray-200">
                        <div class="p-4">
                            <h3 class="font-semibold text-gray-800 mb-3">Price Range</h3>
                            <input type="range" min="0" max="100"
                                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
                            <div class="flex justify-between text-sm text-gray-600 mt-2">
                                <span>$0</span>
                                <span>$100</span>
                            </div>
                            <div class="mt-4 flex space-x-2">
                                <div class="w-1/2">
                                    <label class="text-xs text-gray-600">Min</label>
                                    <input type="number" placeholder="$0"
                                        class="w-full p-2 border border-gray-300 rounded" />
                                </div>
                                <div class="w-1/2">
                                    <label class="text-xs text-gray-600">Max</label>
                                    <input type="number" placeholder="$100"
                                        class="w-full p-2 border border-gray-300 rounded" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Dietary Preferences -->
                    <div class="border-b border-gray-200">
                        <div class="p-4">
                            <h3 class="font-semibold text-gray-800 mb-3">Dietary Preferences</h3>
                            <div class="space-y-2">
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Organic</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Non-GMO</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Locally Sourced</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Pesticide-Free</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Brand Filter -->
                    <div class="border-b border-gray-200">
                        <div class="p-4">
                            <h3 class="font-semibold text-gray-800 mb-3">Brands</h3>
                            <div class="space-y-2">
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Farm Fresh</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Organic Valley</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Green Earth</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Natural Harvest</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Ratings Filter -->
                    <div>
                        <div class="p-4">
                            <h3 class="font-semibold text-gray-800 mb-3">Customer Ratings</h3>
                            <div class="space-y-2">
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 flex items-center">
                                        <span class="flex text-yellow-400">★★★★★</span>
                                        <span class="ml-1 text-sm text-gray-600">5 stars</span>
                                    </span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 flex items-center">
                                        <span class="flex text-yellow-400">★★★★</span><span
                                            class="text-gray-300">★</span>
                                        <span class="ml-1 text-sm text-gray-600">4 stars & up</span>
                                    </span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 flex items-center">
                                        <span class="flex text-yellow-400">★★★</span><span
                                            class="text-gray-300">★★</span>
                                        <span class="ml-1 text-sm text-gray-600">3 stars & up</span>
                                    </span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 flex items-center">
                                        <span class="flex text-yellow-400">★★</span><span
                                            class="text-gray-300">★★★</span>
                                        <span class="ml-1 text-sm text-gray-600">2 stars & up</span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Apply Filters Button -->
                    <div class="p-4 bg-gray-50">
                        <button
                            class="w-full bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors">
                            Apply Filters
                        </button>
                        <button class="w-full text-gray-600 py-2 px-4 mt-2 hover:text-emerald-600 transition-colors">
                            Clear All
                        </button>
                    </div>
                </div>

                <!-- Current Deals -->
                <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div class="p-4 bg-emerald-50 border-b border-gray-200">
                        <h3 class="font-semibold text-gray-800">Current Deals</h3>
                    </div>
                    <div class="p-4">
                        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-3">
                            <p class="text-sm font-medium text-gray-800">Buy 2 Get 1 Free</p>
                            <p class="text-xs text-gray-600">On all organic fruits</p>
                        </div>
                        <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                            <p class="text-sm font-medium text-gray-800">20% Off</p>
                            <p class="text-xs text-gray-600">On all vegetable bundles</p>
                        </div>
                        <div class="bg-green-50 border border-green-200 rounded-lg p-3">
                            <p class="text-sm font-medium text-gray-800">Free Delivery</p>
                            <p class="text-xs text-gray-600">On orders over $50</p>
                        </div>
                    </div>
                </div>
            </aside>

            <!-- Product Content - Right Side -->
            <div class="flex-1 max-w-6xl mx-auto">
                <!-- Products Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    <ProductCard v-for="(product, index) in fruits" :key="index" v-bind="product" />


                </div>
            </div>

        </div>
    </main>
</template>

<script setup>

import ProductCard from '@/components/common/ProductCard.vue'

import OrganicApples from '@/assets/images/apple.webp'
import FreshAvocados from '@/assets/images/avocados.webp'
import OrganicCarrots from '@/assets/images/carrots.webp'
import JuicyBananas from '@/assets/images/Juicy Bananas.webp'
import CitrusOranges from '@/assets/images/Citrus Oranges.webp'
import CrispLettuce from '@/assets/images/Crisp Lettuce.webp'
import RedTomatoes from '@/assets/images/Red Tomatoes.webp'
import GreenGrapes from '@/assets/images/Green Grapes.webp'
import ExoticMangoes from '@/assets/images/Exotic Mangoes.webp'
import TropicalPineapple from '@/assets/images/Tropical Pineapple.webp'
import FreshBlueberries from '@/assets/images/Fresh Blueberries.webp'
import RipeStrawberries from '@/assets/images/Ripe Strawberries.webp'
import OrganicBroccoli from '@/assets/images/Organic Broccoli.webp'
import FreshCauliflower from '@/assets/images/Fresh Cauliflower.webp'
import GardenPeas from '@/assets/images/Garden Peas.webp'
import OrganicPotatoes from '@/assets/images/Organic Potatoes.webp'
import FreshOnions from '@/assets/images/Fresh Onions.webp'
import AromaticGarlic from '@/assets/images/Aromatic Garlic.webp'
import OrganicSpinach from '@/assets/images/Organic Spinach.webp'
import KaleLeaves from '@/assets/images/Kale Leaves.webp'
import OrganicCucumbers from '@/assets/images/Organic Cucumbers.webp'
import FreshBellPeppers from '@/assets/images/Fresh Bell Peppers.webp'
import OrganicZucchini from '@/assets/images/Organic Zucchini.webp'
import FreshMushrooms from '@/assets/images/Fresh Mushrooms.webp'

const fruits = [
  {
    image: OrganicApples,
    title: 'Organic Apples',
    description: 'Farm Fresh, 1kg pack',
    price: 4.99,
    originalPrice: 6.99,
    discount: 29,
    badge: 'Organic',
    badgeColor: 'emerald-500',
    detailsLink: '/product-details/organic-apples'
  },
  {
    image: FreshAvocados,
    title: 'Fresh Avocados',
    description: 'Creamy and delicious, perfect for salads',
    price: 2.99,
    badge: 'New',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/fresh-avocados'
  },
  {
    image: OrganicCarrots,
    title: 'Organic Carrots',
    description: 'Crunchy and nutritious, perfect for snacking',
    price: 3.49,
    originalPrice: 4.49,
    discount: 22,
    badge: 'Bestseller',
    badgeColor: 'purple-500',
    detailsLink: '/product-details/organic-carrots'
  },
  {
    image: JuicyBananas,
    title: 'Juicy Bananas',
    description: 'Naturally sweet, perfect for a snack',
    price: 1.99,
    originalPrice: 2.49,
    discount: 20,
    badge: 'Fresh',
    badgeColor: 'yellow-500',
    detailsLink: '/product-details/juicy-bananas'
  },
  {
    image: CitrusOranges,
    title: 'Citrus Oranges',
    description: 'Zesty and refreshing, 1kg pack',
    price: 3.99,
    badge: 'Citrus',
    badgeColor: 'orange-500',
    detailsLink: '/product-details/citrus-oranges'
  },
  {
    image: CrispLettuce,
    title: 'Crisp Lettuce',
    description: 'Fresh and crunchy, ideal for salads',
    price: 2.49,
    originalPrice: 3.49,
    discount: 29,
    badge: 'Green',
    badgeColor: 'green-500',
    detailsLink: '/product-details/crisp-lettuce'
  },
  {
    image: RedTomatoes,
    title: 'Red Tomatoes',
    description: 'Ripe and juicy, perfect for cooking',
    price: 3.29,
    originalPrice: 4.29,
    discount: 24,
    badge: 'Organic',
    badgeColor: 'emerald-500',
    detailsLink: '/product-details/red-tomatoes'
  },
  {
    image: GreenGrapes,
    title: 'Green Grapes',
    description: 'Sweet and seedless, a perfect snack',
    price: 3.79,
    badge: 'New',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/green-grapes'
  },
  {
    image: ExoticMangoes,
    title: 'Exotic Mangoes',
    description: 'Sweet and tropical, handpicked for you',
    price: 5.49,
    originalPrice: 6.49,
    discount: 15,
    badge: 'Bestseller',
    badgeColor: 'purple-500',
    detailsLink: '/product-details/exotic-mangoes'
  },
  {
    image: TropicalPineapple,
    title: 'Tropical Pineapple',
    description: 'Juicy and tangy, a taste of the tropics',
    price: 4.29,
    badge: 'Limited',
    badgeColor: 'red-500',
    detailsLink: '/product-details/tropical-pineapple'
  },
  {
    image: FreshBlueberries,
    title: 'Fresh Blueberries',
    description: 'Bursting with flavor, perfect for snacks',
    price: 3.99,
    originalPrice: 4.99,
    discount: 20,
    badge: 'Fresh',
    badgeColor: 'teal-500',
    detailsLink: '/product-details/fresh-blueberries'
  },
  {
    image: RipeStrawberries,
    title: 'Ripe Strawberries',
    description: 'Sweet and juicy, a seasonal delight',
    price: 4.49,
    originalPrice: 5.49,
    discount: 18,
    badge: 'Seasonal',
    badgeColor: 'pink-500',
    detailsLink: '/product-details/ripe-strawberries'
  },
  {
    image: OrganicBroccoli,
    title: 'Organic Broccoli',
    description: 'Packed with nutrients for a healthy diet',
    price: 2.99,
    originalPrice: 3.49,
    discount: 14,
    badge: 'Organic',
    badgeColor: 'emerald-500',
    detailsLink: '/product-details/organic-broccoli'
  },
  {
    image: FreshCauliflower,
    title: 'Fresh Cauliflower',
    description: 'Mild and versatile, great for many recipes',
    price: 3.59,
    badge: 'New',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/fresh-cauliflower'
  },
  {
    image: GardenPeas,
    title: 'Garden Peas',
    description: 'Sweet and tender, straight from the garden',
    price: 2.79,
    badge: 'Popular',
    badgeColor: 'teal-500',
    detailsLink: '/product-details/garden-peas'
  },
  {
    image: OrganicPotatoes,
    title: 'Organic Potatoes',
    description: 'Hearty and versatile, ideal for every meal',
    price: 3.29,
    originalPrice: 3.99,
    discount: 18,
    badge: 'Organic',
    badgeColor: 'emerald-500',
    detailsLink: '/product-details/organic-potatoes'
  },
  {
    image: FreshOnions,
    title: 'Fresh Onions',
    description: 'Mild and flavorful, a kitchen staple',
    price: 1.99,
    badge: 'Fresh',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/fresh-onions'
  },
  {
    image: AromaticGarlic,
    title: 'Aromatic Garlic',
    description: 'Enhance flavor with this kitchen essential',
    price: 2.49,
    originalPrice: 2.99,
    discount: 17,
    badge: 'New',
    badgeColor: 'purple-500',
    detailsLink: '/product-details/aromatic-garlic'
  },
  {
    image: OrganicSpinach,
    title: 'Organic Spinach',
    description: 'Leafy greens for a nutritious meal',
    price: 2.99,
    originalPrice: 3.49,
    discount: 14,
    badge: 'Organic',
    badgeColor: 'emerald-500',
    detailsLink: '/product-details/organic-spinach'
  },
  {
    image: KaleLeaves,
    title: 'Kale Leaves',
    description: 'Rich in vitamins, perfect for smoothies',
    price: 3.19,
    originalPrice: 3.99,
    discount: 20,
    badge: 'Healthy',
    badgeColor: 'green-500',
    detailsLink: '/product-details/kale-leaves'
  },
  {
    image: OrganicCucumbers,
    title: 'Organic Cucumbers',
    description: 'Cool and crisp, great for fresh salads',
    price: 1.89,
    badge: 'Organic',
    badgeColor: 'emerald-500',
    detailsLink: '/product-details/organic-cucumbers'
  },
  {
    image: FreshBellPeppers,
    title: 'Fresh Bell Peppers',
    description: 'Vibrant and crunchy, ideal for stir-fries',
    price: 2.99,
    originalPrice: 3.49,
    discount: 14,
    badge: 'Colorful',
    badgeColor: 'red-500',
    detailsLink: '/product-details/fresh-bell-peppers'
  },
  {
    image: OrganicZucchini,
    title: 'Organic Zucchini',
    description: 'Tender and fresh, perfect for grilling',
    price: 2.59,
    badge: 'Organic',
    badgeColor: 'emerald-500',
    detailsLink: '/product-details/organic-zucchini'
  },
  {
    image: FreshMushrooms,
    title: 'Fresh Mushrooms',
    description: 'Earthy and tender, a gourmet treat',
    price: 3.49,
    originalPrice: 4.19,
    discount: 17,
    badge: 'New',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/fresh-mushrooms'
  }
]
</script>