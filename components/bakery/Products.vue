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
                                    <span class="ml-2 text-gray-700">Bread</span>
                                    <span class="ml-1 text-xs text-gray-500">(12)</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Pastries</span>
                                    <span class="ml-1 text-xs text-gray-500">(8)</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Cakes</span>
                                    <span class="ml-1 text-xs text-gray-500">(6)</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Cookies</span>
                                    <span class="ml-1 text-xs text-gray-500">(10)</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Muffins</span>
                                    <span class="ml-1 text-xs text-gray-500">(7)</span>
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
                                    <span class="ml-2 text-gray-700">Gluten-Free</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Vegan</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Organic</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Low-Sugar</span>
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
                                    <span class="ml-2 text-gray-700">Local Bakery</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Artisan Bread Co.</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Sweet Treats</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                                    <span class="ml-2 text-gray-700">Healthy Bakes</span>
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
                            <p class="text-xs text-gray-600">On all cookies</p>
                        </div>
                        <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                            <p class="text-sm font-medium text-gray-800">20% Off</p>
                            <p class="text-xs text-gray-600">On all pastries</p>
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
                    
                    <ProductCard v-for="(product, index) in bakeryProducts" :key="index" v-bind="product" />


                </div>
            </div>
        </div>
    </main>
</template>


<script setup>
import ProductCard from '@/components/common/ProductCard.vue'
import SourdoughBread from '@/assets/images/Sourdough Bread.webp'
import Croissant from '@/assets/images/Croissant.webp'
import ChocolateCake from '@/assets/images/Chocolate Cake.webp'
import BlueberryMuffin from '@/assets/images/Blueberry Muffin.webp'
import WholeWheatBread from '@/assets/images/Whole Wheat Bread.webp'
import VeganCookies from '@/assets/images/Vegan Cookies.webp'
import Baguette from '@/assets/images/Baguette.webp'
import CinnamonRoll from '@/assets/images/Cinnamon Roll.webp'
import Cheesecake from '@/assets/images/Cheesecake.webp'
import BananaBread from '@/assets/images/Banana Bread.webp'
import OatmealCookies from '@/assets/images/Oatmeal Cookies.webp'
import VeganBrownie from '@/assets/images/Vegan Brownie.webp'

const bakeryProducts = [
  {
    image: SourdoughBread,
    title: 'Sourdough Bread',
    description: 'Artisan sourdough, 1 loaf',
    price: 4.99,
    originalPrice: 5.99,
    discount: 17,
    badge: 'Organic',
    badgeColor: 'emerald-500',
    detailsLink: '/product-details/sourdough-bread'
  },
  {
    image: Croissant,
    title: 'Croissant',
    description: 'Buttery and flaky, 1 piece',
    price: 2.49,
    badge: 'New',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/croissant'
  },
  {
    image: ChocolateCake,
    title: 'Chocolate Cake',
    description: 'Rich and decadent, 1 slice',
    price: 3.99,
    originalPrice: 4.99,
    discount: 20,
    badge: 'Bestseller',
    badgeColor: 'purple-500',
    detailsLink: '/product-details/chocolate-cake'
  },
  {
    image: BlueberryMuffin,
    title: 'Blueberry Muffin',
    description: 'Freshly baked, 1 piece',
    price: 1.99,
    originalPrice: 2.49,
    discount: 20,
    badge: 'Fresh',
    badgeColor: 'yellow-500',
    detailsLink: '/product-details/blueberry-muffin'
  },
  {
    image: WholeWheatBread,
    title: 'Whole Wheat Bread',
    description: 'Healthy and hearty, 1 loaf',
    price: 3.49,
    badge: 'Low-Sugar',
    badgeColor: 'orange-500',
    detailsLink: '/product-details/whole-wheat-bread'
  },
  {
    image: VeganCookies,
    title: 'Vegan Cookies',
    description: 'Chocolate chip, 6 pieces',
    price: 4.99,
    originalPrice: 5.99,
    discount: 17,
    badge: 'Vegan',
    badgeColor: 'green-500',
    detailsLink: '/product-details/vegan-cookies'
  },
  {
    image: Baguette,
    title: 'Baguette',
    description: 'French-style, 1 piece',
    price: 2.99,
    originalPrice: 3.49,
    discount: 14,
    badge: 'Organic',
    badgeColor: 'emerald-500',
    detailsLink: '/product-details/baguette'
  },
  {
    image: CinnamonRoll,
    title: 'Cinnamon Roll',
    description: 'Sweet and gooey, 1 piece',
    price: 3.49,
    badge: 'New',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/cinnamon-roll'
  },
  {
    image: Cheesecake,
    title: 'Cheesecake',
    description: 'Creamy and rich, 1 slice',
    price: 4.99,
    originalPrice: 5.99,
    discount: 17,
    badge: 'Bestseller',
    badgeColor: 'purple-500',
    detailsLink: '/product-details/cheesecake'
  },
  {
    image: BananaBread,
    title: 'Banana Bread',
    description: 'Moist and flavorful, 1 loaf',
    price: 5.99,
    badge: 'Fresh',
    badgeColor: 'yellow-500',
    detailsLink: '/product-details/banana-bread'
  },
  {
    image: OatmealCookies,
    title: 'Oatmeal Cookies',
    description: 'Healthy and chewy, 6 pieces',
    price: 3.99,
    originalPrice: 4.99,
    discount: 20,
    badge: 'Low-Sugar',
    badgeColor: 'orange-500',
    detailsLink: '/product-details/oatmeal-cookies'
  },
  {
    image: VeganBrownie,
    title: 'Vegan Brownie',
    description: 'Fudgy and rich, 1 piece',
    price: 2.99,
    originalPrice: 3.49,
    discount: 14,
    badge: 'Vegan',
    badgeColor: 'green-500',
    detailsLink: '/product-details/vegan-brownie'
  }
]

</script>