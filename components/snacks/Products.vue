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
                  <span class="ml-2 text-gray-700">All Snacks</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Chips & Crisps</span>
                  <span class="ml-1 text-xs text-gray-500">(20)</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Pretzels & Crackers</span>
                  <span class="ml-1 text-xs text-gray-500">(15)</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Cookies & Bars</span>
                  <span class="ml-1 text-xs text-gray-500">(18)</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Nuts & Trail Mix</span>
                  <span class="ml-1 text-xs text-gray-500">(12)</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Candy & Chocolate</span>
                  <span class="ml-1 text-xs text-gray-500">(10)</span>
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
                  <span class="ml-2 text-gray-700">Low-Sugar</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Organic</span>
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
                  <span class="ml-2 text-gray-700">SnackTime</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">CrunchyBites</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">YummyTreats</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Nutty Snacks</span>
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
              <p class="text-sm font-medium text-gray-800">Buy 2 Get 1 Free</p>
              <p class="text-xs text-gray-600">On select chips</p>
            </div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
              <p class="text-sm font-medium text-gray-800">10% Off</p>
              <p class="text-xs text-gray-600">On all cookies</p>
            </div>
            <div class="bg-green-50 border border-green-200 rounded-lg p-3">
              <p class="text-sm font-medium text-gray-800">Free Shipping</p>
              <p class="text-xs text-gray-600">On orders over $30</p>
            </div>
          </div>
        </div>
      </aside>

      <!-- Product Content - Right Side -->
      <div class="flex-1 max-w-6xl mx-auto">
        <!-- Products Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         
          <ProductCard v-for="(product, index) in snackProducts" :key="index" v-bind="product" />

        </div>
      </div>
    </div>
  </main>

</template>


<script setup>
import ProductCard from '@/components/common/ProductCard.vue'
import PotatoChips from '@/assets/images/Potato Chips.webp'
import PretzelSticks from '@/assets/images/Pretzel Sticks.webp'
import MicrowavePopcorn from '@/assets/images/Microwave Popcorn.webp'
import MixedNuts from '@/assets/images/Mixed Nuts.webp'
import GranolaBars from '@/assets/images/Granola Bars.webp'
import ChocolateChipsCookies from '@/assets/images/Chocolate Chip Cookies.webp'
import FruitSnacks from '@/assets/images/Fruit Snacks.webp'
import VeggieChips from '@/assets/images/Veggie Chips.webp'
import EnergyBar from '@/assets/images/Energy Bar.webp'
import RiceCakes from '@/assets/images/Rice Cakes.webp'
import TrailMix from '@/assets/images/Trail Mix.webp'
import CaramelPopcorn from '@/assets/images/Caramel Popcorn.webp'

const snackProducts = [
  {
    image: PotatoChips,
    title: 'Potato Chips',
    description: 'Crunchy and salty, 150g bag',
    price: 2.49,
    originalPrice: 2.99,
    discount: 17,
    badge: 'New',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/potato-chips'
  },
  {
    image: PretzelSticks,
    title: 'Pretzel Sticks',
    description: 'Crunchy snack, 100g pack',
    price: 1.99,
    badge: 'Organic',
    badgeColor: 'green-500',
    detailsLink: '/product-details/pretzel-sticks'
  },
  {
    image: MicrowavePopcorn,
    title: 'Microwave Popcorn',
    description: 'Buttery flavor, 3-pack',
    price: 3.49,
    originalPrice: 3.99,
    discount: 13,
    badge: 'Bestseller',
    badgeColor: 'purple-500',
    detailsLink: '/product-details/microwave-popcorn'
  },
  {
    image: MixedNuts,
    title: 'Mixed Nuts',
    description: 'Assorted and roasted, 200g pack',
    price: 4.99,
    badge: 'Fresh',
    badgeColor: 'yellow-500',
    detailsLink: '/product-details/mixed-nuts'
  },
  {
    image: GranolaBars,
    title: 'Granola Bars',
    description: 'Healthy snack, 6 bars per box',
    price: 3.99,
    badge: 'Low-Sugar',
    badgeColor: 'orange-500',
    detailsLink: '/product-details/granola-bars'
  },
  {
    image: ChocolateChipsCookies,
    title: 'Chocolate Chip Cookies',
    description: 'Classic cookies, 12 pieces per pack',
    price: 2.99,
    originalPrice: 3.49,
    discount: 14,
    badge: 'New',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/chocolate-chip-cookies'
  },
  {
    image: FruitSnacks,
    title: 'Fruit Snacks',
    description: 'Chewy and fruity, 80g pack',
    price: 1.49,
    originalPrice: 1.99,
    discount: 25,
    badge: 'Bestseller',
    badgeColor: 'purple-500',
    detailsLink: '/product-details/fruit-snacks'
  },
  {
    image: VeggieChips,
    title: 'Veggie Chips',
    description: 'Lightly salted, 120g bag',
    price: 2.99,
    badge: 'Healthy',
    badgeColor: 'green-500',
    detailsLink: '/product-details/veggie-chips'
  },
  {
    image: EnergyBar,
    title: 'Energy Bar',
    description: 'Nutritious and filling, 50g bar',
    price: 1.49,
    badge: 'Low-Sugar',
    badgeColor: 'orange-500',
    detailsLink: '/product-details/energy-bar'
  },
  {
    image: RiceCakes,
    title: 'Rice Cakes',
    description: 'Light and crispy, 3-pack',
    price: 1.99,
    originalPrice: 2.49,
    discount: 20,
    badge: 'New',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/rice-cakes'
  },
  {
    image: TrailMix,
    title: 'Trail Mix',
    description: 'A blend of nuts and dried fruits, 150g pack',
    price: 3.49,
    badge: 'Healthy',
    badgeColor: 'green-500',
    detailsLink: '/product-details/trail-mix'
  },
  {
    image: CaramelPopcorn,
    title: 'Caramel Popcorn',
    description: 'Sweet and crunchy, 100g bag',
    price: 2.99,
    originalPrice: 3.49,
    discount: 14,
    badge: 'Premium',
    badgeColor: 'red-500',
    detailsLink: '/product-details/caramel-popcorn'
  }
]

</script>