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
                  <span class="ml-2 text-gray-700">Soft Drinks</span>
                  <span class="ml-1 text-xs text-gray-500">(15)</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Juices</span>
                  <span class="ml-1 text-xs text-gray-500">(10)</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Coffee & Tea</span>
                  <span class="ml-1 text-xs text-gray-500">(8)</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Alcoholic Beverages</span>
                  <span class="ml-1 text-xs text-gray-500">(12)</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Energy Drinks</span>
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
                  <input type="number" placeholder="$0" class="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div class="w-1/2">
                  <label class="text-xs text-gray-600">Max</label>
                  <input type="number" placeholder="$100" class="w-full p-2 border border-gray-300 rounded" />
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
                  <span class="ml-2 text-gray-700">Sugar-Free</span>
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
                  <span class="ml-2 text-gray-700">RefreshCo</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Nature's Best</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">PureLife</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Beverly's</span>
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
              <p class="text-xs text-gray-600">On select juices</p>
            </div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
              <p class="text-sm font-medium text-gray-800">15% Off</p>
              <p class="text-xs text-gray-600">On coffee & tea</p>
            </div>
            <div class="bg-green-50 border border-green-200 rounded-lg p-3">
              <p class="text-sm font-medium text-gray-800">Free Shipping</p>
              <p class="text-xs text-gray-600">On orders over $40</p>
            </div>
          </div>
        </div>
      </aside>

      <!-- Product Content - Right Side -->
      <div class="flex-1 max-w-6xl mx-auto">
        <!-- Products Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <ProductCard v-for="(product, index) in drinkProducts" :key="index" v-bind="product" />

        </div>
      </div>
    </div>
  </main>

</template>

<script setup>
import ProductCard from '@/components/common/ProductCard.vue'
import SparklingWater from '@/assets/images/Sparkling Lemonad.webp'
import OrganicOrangeJuice from '@/assets/images/Organic Orange Juice.webp'
import ColdBrewCoffee from '@/assets/images/Cold Brew Coffee.webp'
import GreenTea from '@/assets/images/Green Tea.webp'
import HerbalInfusion from '@/assets/images/Herbal Infusion.webp'
import SmoothieBlend from '@/assets/images/Smoothie Blend.webp'
import CraftBeer from '@/assets/images/Craft Beer.webp'
import RedWine from '@/assets/images/Red Wine.webp'
import WhiteWine from '@/assets/images/White Wine.webp'
import SparklingLemonad from '@/assets/images/Sparkling Lemonad.webp'
import IcedTea from '@/assets/images/Iced Tea.webp'
import EnergyDrink from '@/assets/images/Energy Drink.webp'

const drinkProducts = [
  {
    image: SparklingWater,
    title: 'Sparkling Water',
    description: 'Refreshing and fizzy, 500ml bottle',
    price: 1.99,
    originalPrice: 2.49,
    discount: 20,
    badge: 'New',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/sparkling-water'
  },
  {
    image: OrganicOrangeJuice,
    title: 'Organic Orange Juice',
    description: 'Freshly squeezed, 1L carton',
    price: 3.49,
    badge: 'Organic',
    badgeColor: 'green-500',
    detailsLink: '/product-details/organic-orange-juice'
  },
  {
    image: ColdBrewCoffee,
    title: 'Cold Brew Coffee',
    description: 'Smooth and bold, 250ml can',
    price: 2.99,
    originalPrice: 3.49,
    discount: 15,
    badge: 'Bestseller',
    badgeColor: 'purple-500',
    detailsLink: '/product-details/cold-brew-coffee'
  },
  {
    image: GreenTea,
    title: 'Green Tea',
    description: 'Soothing and aromatic, 200ml bottle',
    price: 1.49,
    badge: 'Fresh',
    badgeColor: 'yellow-500',
    detailsLink: '/product-details/green-tea'
  },
  {
    image: HerbalInfusion,
    title: 'Herbal Infusion',
    description: 'Calming blend, 300ml bottle',
    price: 2.49,
    badge: 'Low-Sugar',
    badgeColor: 'orange-500',
    detailsLink: '/product-details/herbal-infusion'
  },
  {
    image: SmoothieBlend,
    title: 'Smoothie Blend',
    description: 'Mixed fruit smoothie, 350ml bottle',
    price: 4.99,
    originalPrice: 5.99,
    discount: 17,
    badge: 'New',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/smoothie-blend'
  },
  {
    image: CraftBeer,
    title: 'Craft Beer',
    description: 'Artisan brewed, 330ml bottle',
    price: 5.99,
    originalPrice: 6.99,
    discount: 14,
    badge: 'Bestseller',
    badgeColor: 'purple-500',
    detailsLink: '/product-details/craft-beer'
  },
  {
    image: RedWine,
    title: 'Red Wine',
    description: 'Full-bodied, 750ml bottle',
    price: 7.99,
    badge: 'Premium',
    badgeColor: 'red-500',
    detailsLink: '/product-details/red-wine'
  },
  {
    image: WhiteWine,
    title: 'White Wine',
    description: 'Crisp and refreshing, 750ml bottle',
    price: 8.99,
    badge: 'Premium',
    badgeColor: 'red-500',
    detailsLink: '/product-details/white-wine'
  },
  {
    image: SparklingLemonad,
    title: 'Sparkling Lemonade',
    description: 'Citrus burst, 500ml bottle',
    price: 2.99,
    originalPrice: 3.49,
    discount: 14,
    badge: 'Fresh',
    badgeColor: 'yellow-500',
    detailsLink: '/product-details/sparkling-lemonade'
  },
  {
    image: IcedTea,
    title: 'Iced Tea',
    description: 'Cool and refreshing, 400ml bottle',
    price: 1.99,
    badge: 'New',
    badgeColor: 'green-500',
    detailsLink: '/product-details/iced-tea'
  },
  {
    image: EnergyDrink,
    title: 'Energy Drink',
    description: 'Boost your energy, 250ml can',
    price: 2.49,
    badge: 'Low-Sugar',
    badgeColor: 'orange-500',
    detailsLink: '/product-details/energy-drink'
  }
]

</script>