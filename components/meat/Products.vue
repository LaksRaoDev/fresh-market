<template>
  <!-- Main Content - Products with Filter Sidebar -->
  <main class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row gap-6">
            <!-- Filter Sidebar - Left Side -->
            <aside class="w-full md:w-64 lg:w-72 flex-shrink-0">
               

                <!-- Filter Content -->
                <div 
                    class=" md:block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
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
                                    <span class="ml-2 text-gray-700">Beef</span>
                                    <span class="ml-1 text-xs text-gray-500">(15)</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Pork</span>
                                    <span class="ml-1 text-xs text-gray-500">(10)</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Poultry</span>
                                    <span class="ml-1 text-xs text-gray-500">(12)</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Seafood</span>
                                    <span class="ml-1 text-xs text-gray-500">(20)</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Lamb</span>
                                    <span class="ml-1 text-xs text-gray-500">(8)</span>
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
                                    <span class="ml-2 text-gray-700">Grass-Fed</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Free-Range</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Wild-Caught</span>
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
                                    <span class="ml-2 text-gray-700">Organic Valley</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Applegate</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Wild Planet</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Perdue</span>
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
                            <p class="text-xs text-gray-600">On all organic beef</p>
                        </div>
                        <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                            <p class="text-sm font-medium text-gray-800">20% Off</p>
                            <p class="text-xs text-gray-600">On all seafood products</p>
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
                    <ProductCard v-for="(product, index) in meatAndSeafoodProducts" :key="index" v-bind="product" />

                </div>
            </div>
        </div>
    </main>

</template>

<script setup>
import ProductCard from '@/components/common/ProductCard.vue'
import OrganicBeef from '@/assets/images/Organic Beef.webp'
import SalmonFillet from '@/assets/images/Salmon Fillet.webp'
import ChickenBreast from '@/assets/images/Chicken Breast.webp'
import PorkChops from '@/assets/images/Pork Chops.webp'
import TurkeyBreast from '@/assets/images/Turkey Breast.webp'
import Shrimp from '@/assets/images/Shrimp.webp'
import LambChops from '@/assets/images/Lamb Chops.webp'
import TunaSteak from '@/assets/images/Tuna Steak.webp'
import GroundBeef from '@/assets/images/Ground Beef.webp'
import ChickenThighs from '@/assets/images/Chicken Thighs.webp'
import TurkeyBacon from '@/assets/images/Turkey Bacon.webp'
import CodFillet from '@/assets/images/Cod Fillet.webp'

const meatAndSeafoodProducts = [
  {
    image: OrganicBeef,
    title: 'Organic Beef',
    description: '1lb, Grass-fed and hormone-free',
    price: 9.99,
    originalPrice: 11.99,
    discount: 17,
    badge: 'Organic',
    badgeColor: 'emerald-500',
    detailsLink: '/product-details/organic-beef'
  },
  {
    image: SalmonFillet,
    title: 'Salmon Fillet',
    description: 'Wild-caught, 1lb',
    price: 12.99,
    badge: 'New',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/salmon-fillet'
  },
  {
    image: ChickenBreast,
    title: 'Chicken Breast',
    description: 'Boneless and skinless, 2lb',
    price: 7.99,
    originalPrice: 9.99,
    discount: 20,
    badge: 'Bestseller',
    badgeColor: 'purple-500',
    detailsLink: '/product-details/chicken-breast'
  },
  {
    image: PorkChops,
    title: 'Pork Chops',
    description: 'Bone-in, 1lb',
    price: 6.99,
    originalPrice: 8.99,
    discount: 22,
    badge: 'Fresh',
    badgeColor: 'yellow-500',
    detailsLink: '/product-details/pork-chops'
  },
  {
    image: TurkeyBreast,
    title: 'Turkey Breast',
    description: 'Boneless, 2lb',
    price: 8.99,
    badge: 'Low-Fat',
    badgeColor: 'orange-500',
    detailsLink: '/product-details/turkey-breast'
  },
  {
    image: Shrimp,
    title: 'Shrimp',
    description: 'Large, 1lb',
    price: 14.99,
    originalPrice: 16.99,
    discount: 12,
    badge: 'Wild-Caught',
    badgeColor: 'green-500',
    detailsLink: '/product-details/shrimp'
  },
  {
    image: LambChops,
    title: 'Lamb Chops',
    description: 'Grass-fed, 1lb',
    price: 15.99,
    originalPrice: 17.99,
    discount: 11,
    badge: 'Organic',
    badgeColor: 'emerald-500',
    detailsLink: '/product-details/lamb-chops'
  },
  {
    image: TunaSteak,
    title: 'Tuna Steak',
    description: 'Sushi-grade, 1lb',
    price: 18.99,
    badge: 'New',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/tuna-steak'
  },
  {
    image: GroundBeef,
    title: 'Ground Beef',
    description: '80% Lean, 1lb',
    price: 5.99,
    originalPrice: 7.99,
    discount: 25,
    badge: 'Bestseller',
    badgeColor: 'purple-500',
    detailsLink: '/product-details/ground-beef'
  },
  {
    image: ChickenThighs,
    title: 'Chicken Thighs',
    description: 'Bone-in, 2lb',
    price: 6.49,
    badge: 'Fresh',
    badgeColor: 'yellow-500',
    detailsLink: '/product-details/chicken-thighs'
  },
  {
    image: TurkeyBacon,
    title: 'Turkey Bacon',
    description: 'Low-fat, 12oz',
    price: 4.99,
    originalPrice: 5.99,
    discount: 17,
    badge: 'Low-Fat',
    badgeColor: 'orange-500',
    detailsLink: '/product-details/turkey-bacon'
  },
  {
    image: CodFillet,
    title: 'Cod Fillet',
    description: 'Wild-caught, 1lb',
    price: 10.99,
    originalPrice: 12.99,
    discount: 15,
    badge: 'Wild-Caught',
    badgeColor: 'green-500',
    detailsLink: '/product-details/cod-fillet'
  }
]

</script>