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
                                    <span class="ml-2 text-gray-700">Milk</span>
                                    <span class="ml-1 text-xs text-gray-500">(12)</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Cheese</span>
                                    <span class="ml-1 text-xs text-gray-500">(18)</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Yogurt</span>
                                    <span class="ml-1 text-xs text-gray-500">(10)</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Eggs</span>
                                    <span class="ml-1 text-xs text-gray-500">(8)</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Butter</span>
                                    <span class="ml-1 text-xs text-gray-500">(6)</span>
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
                                    <span class="ml-2 text-gray-700">Lactose-Free</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Low-Fat</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Gluten-Free</span>
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
                                    <span class="ml-2 text-gray-700">Horizon Organic</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Stonyfield</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Clover Organic</span>
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
                            <p class="text-xs text-gray-600">On all organic milk</p>
                        </div>
                        <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                            <p class="text-sm font-medium text-gray-800">20% Off</p>
                            <p class="text-xs text-gray-600">On all cheese products</p>
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
                    
                    <ProductCard v-for="(product, index) in dairyProducts" :key="index" v-bind="product" />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import ProductCard from '@/components/common/ProductCard.vue'

import OrganicMilk from '@/assets/images/Organic Milk.webp'
import CheddarCheese from '@/assets/images/Cheddar Cheese.webp'
import GreekYogurt from '@/assets/images/Greek Yogurt.webp'
import FreeRangeEggs from '@/assets/images/Free-Range Eggs.webp'
import OrganicButter from '@/assets/images/Organic Butter.webp'
import LactoseFreeMilk from '@/assets/images/Lactose-Free Milk.webp'
import OrganicSourCream from '@/assets/images/Organic Sour Cream.webp'
import CreamCheese from '@/assets/images/Cream Cheese.webp'
import WhippingCream from '@/assets/images/Whipping Cream.webp'
import GoatCheese from '@/assets/images/Goat Cheese.webp'
import CottageCheese from '@/assets/images/Cottage Cheese.webp'
import AlmondMilk from '@/assets/images/Almond Milk.webp'

const dairyProducts = [
  {
    image: OrganicMilk,
    title: 'Organic Milks',
    description: '1 Gallon, Fresh from the farm',
    price: 5.99,
    originalPrice: 6.99,
    discount: 14,
    badge: 'Organic',
    badgeColor: 'emerald-500',
    detailsLink: '/product-details/organic-milk'
  },
  {
    image: CheddarCheese,
    title: 'Cheddar Cheese',
    description: 'Sharp and creamy, 1lb block',
    price: 4.99,
    badge: 'New',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/cheddar-cheese'
  },
  {
    image: GreekYogurt,
    title: 'Greek Yogurt',
    description: 'Creamy and protein-packed, 32oz',
    price: 3.49,
    originalPrice: 4.49,
    discount: 22,
    badge: 'Bestseller',
    badgeColor: 'purple-500',
    detailsLink: '/product-details/greek-yogurt'
  },
  {
    image: FreeRangeEggs,
    title: 'Free-Range Eggs',
    description: '12 Large Eggs, Cage-Free',
    price: 3.99,
    originalPrice: 4.49,
    discount: 11,
    badge: 'Fresh',
    badgeColor: 'yellow-500',
    detailsLink: '/product-details/free-range-eggs'
  },
  {
    image: OrganicButter,
    title: 'Organic Butter',
    description: 'Rich and creamy, 1lb',
    price: 4.29,
    badge: 'Low-Fat',
    badgeColor: 'orange-500',
    detailsLink: '/product-details/organic-butter'
  },
  {
    image: LactoseFreeMilk,
    title: 'Lactose-Free Milk',
    description: '1 Gallon, Easy to digest',
    price: 6.49,
    originalPrice: 7.49,
    discount: 13,
    badge: 'Lactose-Free',
    badgeColor: 'green-500',
    detailsLink: '/product-details/lactose-free-milk'
  },
  {
    image: OrganicSourCream,
    title: 'Organic Sour Cream',
    description: 'Rich and tangy, 16oz',
    price: 2.99,
    originalPrice: 3.49,
    discount: 14,
    badge: 'Organic',
    badgeColor: 'emerald-500',
    detailsLink: '/product-details/organic-sour-cream'
  },
  {
    image: CreamCheese,
    title: 'Cream Cheese',
    description: 'Smooth and spreadable, 8oz',
    price: 2.49,
    badge: 'New',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/cream-cheese'
  },
  {
    image: WhippingCream,
    title: 'Whipping Cream',
    description: 'Perfect for desserts, 1 pint',
    price: 3.99,
    originalPrice: 4.49,
    discount: 11,
    badge: 'Bestseller',
    badgeColor: 'purple-500',
    detailsLink: '/product-details/whipping-cream'
  },
  {
    image: GoatCheese,
    title: 'Goat Cheese',
    description: 'Creamy and tangy, 8oz',
    price: 5.49,
    badge: 'Fresh',
    badgeColor: 'yellow-500',
    detailsLink: '/product-details/goat-cheese'
  },
  {
    image: CottageCheese,
    title: 'Cottage Cheese',
    description: 'High-protein, 16oz',
    price: 3.29,
    originalPrice: 3.99,
    discount: 18,
    badge: 'Low-Fat',
    badgeColor: 'orange-500',
    detailsLink: '/product-details/cottage-cheese'
  },
  {
    image: AlmondMilk,
    title: 'Almond Milk',
    description: 'Unsweetened, 1 Quart',
    price: 3.99,
    originalPrice: 4.49,
    discount: 11,
    badge: 'Lactose-Free',
    badgeColor: 'green-500',
    detailsLink: '/product-details/almond-milk'
  }
]

</script>