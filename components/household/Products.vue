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
                  <span class="ml-2 text-gray-700">All Household</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Cleaning Supplies</span>
                  <span class="ml-1 text-xs text-gray-500">(12)</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Laundry Supplies</span>
                  <span class="ml-1 text-xs text-gray-500">(8)</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Kitchen Tools</span>
                  <span class="ml-1 text-xs text-gray-500">(10)</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Other Essentials</span>
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

          <!-- Eco-Friendly Filter -->
          <div class="border-b border-gray-200">
            <div class="p-4">
              <h3 class="font-semibold text-gray-800 mb-3">Eco-Friendly Options</h3>
              <div class="space-y-2">
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Eco-Friendly</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Biodegradable</span>
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
                  <span class="ml-2 text-gray-700">GreenClean</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">EcoHome</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">PureHouse</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">CleanLiving</span>
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
                    <span class="flex text-yellow-400">★★★★</span><span class="text-gray-300">★</span>
                    <span class="ml-1 text-sm text-gray-600">4 stars & up</span>
                  </span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 flex items-center">
                    <span class="flex text-yellow-400">★★★</span><span class="text-gray-300">★★</span>
                    <span class="ml-1 text-sm text-gray-600">3 stars & up</span>
                  </span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 flex items-center">
                    <span class="flex text-yellow-400">★★</span><span class="text-gray-300">★★★</span>
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
              <p class="text-sm font-medium text-gray-800">Buy 1 Get 1 Free</p>
              <p class="text-xs text-gray-600">On select dish soaps</p>
            </div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
              <p class="text-sm font-medium text-gray-800">15% Off</p>
              <p class="text-xs text-gray-600">On cleaning sprays</p>
            </div>
            <div class="bg-green-50 border border-green-200 rounded-lg p-3">
              <p class="text-sm font-medium text-gray-800">Free Shipping</p>
              <p class="text-xs text-gray-600">On orders over $35</p>
            </div>
          </div>
        </div>
      </aside>

      <!-- Product Content - Right Side -->
      <div class="flex-1 max-w-6xl mx-auto">
        <!-- Products Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <ProductCard v-for="(product, index) in cleaningSupplies" :key="index" v-bind="product" />
        </div>
      </div>
    </div>
  </main>

</template>

<script setup>
import ProductCard from '@/components/common/ProductCard.vue'
import MultiSurfaceCleaner from '@/assets/images/Multi-Surface Cleaner.webp'
import EcoFriendlyDishSoap from '@/assets/images/Eco-Friendly Dish Soap.webp'
import LaundaryDetergent from '@/assets/images/Laundry Detergent.webp'
import FabricSoftener from '@/assets/images/Fabric Softener.jpeg'
import TrashBags from '@/assets/images/Trash Bags.jpeg'
import Sponges from '@/assets/images/Sponges (Pack of 3).jpeg'
import PaperTowls from '@/assets/images/Paper Towels.jpeg'
import ToilerCleaner from '@/assets/images/Toilet Cleaner.jpeg'
import GlassCleaner from '@/assets/images/Glass Cleaner.jpeg'
import Broom from '@/assets/images/Broom & Dustpan Set.jpeg'
import Mop from '@/assets/images/Mop & Bucket Set.jpeg'
import AirFreshener from '@/assets/images/Air Freshener.jpeg'

const cleaningSupplies = [
  {
    image: MultiSurfaceCleaner,
    title: 'Multi-Surface Cleaner',
    description: 'Effective cleaning for all surfaces, 750ml spray',
    price: 3.99,
    originalPrice: 4.99,
    discount: 20,
    badge: 'New',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/multi-surface-cleaner'
  },
  {
    image: EcoFriendlyDishSoap,
    title: 'Eco-Friendly Dish Soap',
    description: 'Gentle on hands, 500ml bottle',
    price: 2.49,
    originalPrice: 2.99,
    discount: 17,
    badge: 'Organic',
    badgeColor: 'green-500',
    detailsLink: '/product-details/eco-friendly-dish-soap'
  },
  {
    image: LaundaryDetergent,
    title: 'Laundry Detergent',
    description: 'Concentrated formula, 1.5L bottle',
    price: 6.99,
    originalPrice: 7.99,
    discount: 13,
    badge: 'Bestseller',
    badgeColor: 'purple-500',
    detailsLink: '/product-details/laundry-detergent'
  },
  {
    image: FabricSoftener,
    title: 'Fabric Softener',
    description: 'Keeps clothes soft, 1L bottle',
    price: 3.49,
    badge: 'Fresh',
    badgeColor: 'yellow-500',
    detailsLink: '/product-details/fabric-softener'
  },
  {
    image: TrashBags,
    title: 'Trash Bags',
    description: 'Durable, 50 pack',
    price: 4.99,
    badge: 'Low-Cost',
    badgeColor: 'orange-500',
    detailsLink: '/product-details/trash-bags'
  },
  {
    image: Sponges,
    title: 'Sponges (Pack of 3)',
    description: 'Non-scratch, multi-purpose',
    price: 1.99,
    badge: 'New',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/sponges'
  },
  {
    image: PaperTowls,
    title: 'Paper Towels',
    description: 'Strong and absorbent, 2-roll pack',
    price: 3.49,
    badge: 'Best Value',
    badgeColor: 'green-500',
    detailsLink: '/product-details/paper-towels'
  },
  {
    image: ToilerCleaner,
    title: 'Toilet Cleaner',
    description: 'Powerful formula, 750ml bottle',
    price: 2.99,
    originalPrice: 3.49,
    discount: 14,
    badge: 'Bestseller',
    badgeColor: 'purple-500',
    detailsLink: '/product-details/toilet-cleaner'
  },
  {
    image: GlassCleaner,
    title: 'Glass Cleaner',
    description: 'Streak-free shine, 500ml bottle',
    price: 2.49,
    badge: 'Fresh',
    badgeColor: 'yellow-500',
    detailsLink: '/product-details/glass-cleaner'
  },
  {
    image: Broom,
    title: 'Broom & Dustpan Set',
    description: 'Efficient cleaning, durable design',
    price: 9.99,
    badge: 'Premium',
    badgeColor: 'red-500',
    detailsLink: '/product-details/broom-and-dustpan'
  },
  {
    image: Mop,
    title: 'Mop & Bucket Set',
    description: 'Complete cleaning kit',
    price: 14.99,
    originalPrice: 16.99,
    discount: 12,
    badge: 'New',
    badgeColor: 'orange-500',
    detailsLink: '/product-details/mop-and-bucket'
  },
  {
    image: AirFreshener,
    title: 'Air Freshener',
    description: 'Long-lasting fragrance, 300ml spray',
    price: 2.99,
    originalPrice: 3.49,
    discount: 14,
    badge: 'Best Seller',
    badgeColor: 'green-500',
    detailsLink: '/product-details/air-freshener'
  }
];

</script>