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
                  <span class="ml-2 text-gray-700">All Personal Care</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Hair Care</span>
                  <span class="ml-1 text-xs text-gray-500">(10)</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Skin Care</span>
                  <span class="ml-1 text-xs text-gray-500">(12)</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Oral Care</span>
                  <span class="ml-1 text-xs text-gray-500">(8)</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Fragrances</span>
                  <span class="ml-1 text-xs text-gray-500">(5)</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Bath & Body</span>
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

          <!-- Special Filters -->
          <div class="border-b border-gray-200">
            <div class="p-4">
              <h3 class="font-semibold text-gray-800 mb-3">Preferences</h3>
              <div class="space-y-2">
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Organic</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">Vegan</span>
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
                  <span class="ml-2 text-gray-700">PureEssence</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">NaturalGlow</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">FreshSkin</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">BeautyBoost</span>
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
              </div>
            </div>
          </div>

          <!-- Apply Filters Button -->
          <div class="p-4 bg-gray-50">
            <button class="w-full bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors">
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
              <p class="text-xs text-gray-600">On select shampoos</p>
            </div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
              <p class="text-sm font-medium text-gray-800">20% Off</p>
              <p class="text-xs text-gray-600">On facial cleansers</p>
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
          <ProductCard v-for="(product, index) in personalCare" :key="index" v-bind="product" />

        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import ProductCard from '@/components/common/ProductCard.vue'
import HerbalShampoo from '@/assets/images/Herbal Shampoo.webp'
import Silky from '@/assets/images/Silky Conditioner.webp'
import BodyLotion from '@/assets/images/Body Lotion.webp'
import Facial from '@/assets/images/Facial Wash.webp'
import OrganicToothpaste from '@/assets/images/Organic Toothpaste.webp'
import Deodorant from '@/assets/images/Deodorant.webp'
import Hair from '@/assets/images/Hair Oil.webp'
import Sunscreen from '@/assets/images/Sunscreen SPF 50.webp'
import Perfume from '@/assets/images/Perfume.jpeg'
import Hand from '@/assets/images/Hand Sanitizer.jpeg'
import Face from '@/assets/images/Face Cream.jpeg'
import Exfoliating from '@/assets/images/Exfoliating Scrub.jpeg'

const personalCare = [
  {
    image: HerbalShampoo,
    title: 'Herbal Shampoo',
    description: 'Nourishing formula, 400ml bottle',
    price: 5.99,
    originalPrice: 6.99,
    discount: 14,
    badge: 'New',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/herbal-shampoo'
  },
  {
    image: Silky,
    title: 'Silky Conditioner',
    description: 'Smooth and soft, 400ml bottle',
    price: 5.49,
    badge: 'Organic',
    badgeColor: 'green-500',
    detailsLink: '/product-details/silky-conditioner'
  },
  {
    image: BodyLotion,
    title: 'Body Lotion',
    description: 'Deep hydration, 300ml bottle',
    price: 4.99,
    originalPrice: 5.99,
    discount: 17,
    badge: 'Bestseller',
    badgeColor: 'purple-500',
    detailsLink: '/product-details/body-lotion'
  },
  {
    image: Facial,
    title: 'Facial Wash',
    description: 'Deep cleansing, 200ml bottle',
    price: 3.99,
    badge: 'Fresh',
    badgeColor: 'yellow-500',
    detailsLink: '/product-details/facial-wash'
  },
  {
    image: OrganicToothpaste,
    title: 'Organic Toothpaste',
    description: 'Fresh mint, 100ml tube',
    price: 2.49,
    badge: 'Low-Sugar',
    badgeColor: 'orange-500',
    detailsLink: '/product-details/organic-toothpaste'
  },
  {
    image: Deodorant,
    title: 'Deodorant',
    description: 'Long-lasting freshness, 75ml stick',
    price: 3.49,
    badge: 'New',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/deodorant'
  },
  {
    image: Hair,
    title: 'Hair Oil',
    description: 'For shiny, healthy hair, 150ml bottle',
    price: 4.99,
    badge: 'Organic',
    badgeColor: 'green-500',
    detailsLink: '/product-details/hair-oil'
  },
  {
    image: Sunscreen,
    title: 'Sunscreen SPF 50',
    description: 'Broad spectrum protection, 100ml tube',
    price: 6.99,
    badge: 'Premium',
    badgeColor: 'red-500',
    detailsLink: '/product-details/sunscreen-spf-50'
  },
  {
    image: Perfume,
    title: 'Perfume',
    description: 'Elegant fragrance, 50ml bottle',
    price: 29.99,
    badge: 'Bestseller',
    badgeColor: 'purple-500',
    detailsLink: '/product-details/luxurious-perfume'
  },
  {
    image: Hand,
    title: 'Hand Sanitizer',
    description: 'Kills germs, 250ml bottle',
    price: 2.99,
    badge: 'New',
    badgeColor: 'blue-500',
    detailsLink: '/product-details/hand-sanitizer'
  },
  {
    image: Face,
    title: 'Face Cream',
    description: 'Hydrates & rejuvenates, 50ml jar',
    price: 8.99,
    originalPrice: 9.99,
    discount: 10,
    badge: 'Organic',
    badgeColor: 'green-500',
    detailsLink: '/product-details/face-cream'
  },
  {
    image: Exfoliating,
    title: 'Exfoliating Scrub',
    description: 'Gently removes dead skin, 200ml tube',
    price: 4.49,
    originalPrice: 5.49,
    discount: 18,
    badge: 'Limited',
    badgeColor: 'orange-500',
    detailsLink: '/product-details/exfoliating-scrub'
  }
];

</script>