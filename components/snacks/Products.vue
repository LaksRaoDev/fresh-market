<template>
  <main class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row gap-6">

      <!-- ─── FILTER SIDEBAR ─────────────────────────────────────────────────────────── -->
      <aside class="w-full md:w-64 lg:w-72 flex-shrink-0">
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">

          <!-- Categories -->
          <!-- Categories -->
          <section class="border-b border-gray-200">
            <div class="p-4">
              <h3 class="font-semibold text-gray-800 mb-3">Categories</h3>
              <div class="space-y-2">
                <label class="flex items-center">
                  <input type="checkbox" :checked="filters.categories.length === 0" @change="clearCategories"
                    class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">All Products</span>
                </label>
                <label v-for="cat in categoryOptions" :key="cat" class="flex items-center">
                  <input type="checkbox" :value="cat" v-model="filters.categories"
                    class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 text-gray-700">{{ cat }}</span>
                </label>
              </div>
            </div>
          </section>

          <!-- Price -->
          <section class="border-b border-gray-200">
            <div class="p-4">
              <h3 class="font-semibold text-gray-800 mb-3">Price Range</h3>
              <input type="range" min="0" max="10" step="0.1"
                     v-model.number="filters.priceRange.max"
                     class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"/>
              <div class="flex justify-between text-sm text-gray-600 mt-2">
                <span>${{ filters.priceRange.min.toFixed(2) }}</span>
                <span>${{ filters.priceRange.max.toFixed(2) }}</span>
              </div>
              <div class="mt-4 flex space-x-2">
                <div class="w-1/2">
                  <label class="text-xs text-gray-600">Min</label>
                  <input type="number" min="0" max="10" step="0.1"
                         v-model.number="filters.priceRange.min"
                         class="w-full p-2 border border-gray-300 rounded"/>
                </div>
                <div class="w-1/2">
                  <label class="text-xs text-gray-600">Max</label>
                  <input type="number" min="0" max="10" step="0.1"
                         v-model.number="filters.priceRange.max"
                         class="w-full p-2 border border-gray-300 rounded"/>
                </div>
              </div>
            </div>
          </section>

          <!-- Dietary -->
          <section class="border-b border-gray-200">
            <div class="p-4">
              <h3 class="font-semibold text-gray-800 mb-3">Dietary Preferences</h3>
              <div class="space-y-2">
                <label v-for="d in dietaryOptions" :key="d" class="flex items-center">
                  <input type="checkbox" :value="d"
                         v-model="filters.dietary"
                         class="form-checkbox text-emerald-500 rounded"/>
                  <span class="ml-2 text-gray-700">{{ d }}</span>
                </label>
              </div>
            </div>
          </section>

          <!-- Brands -->
          <section class="border-b border-gray-200">
            <div class="p-4">
              <h3 class="font-semibold text-gray-800 mb-3">Brands</h3>
              <div class="space-y-2">
                <label v-for="b in brandOptions" :key="b" class="flex items-center">
                  <input type="checkbox" :value="b"
                         v-model="filters.brands"
                         class="form-checkbox text-emerald-500 rounded"/>
                  <span class="ml-2 text-gray-700">{{ b }}</span>
                </label>
              </div>
            </div>
          </section>

          <!-- Ratings -->
          <section>
            <div class="p-4">
              <h3 class="font-semibold text-gray-800 mb-3">Customer Ratings</h3>
              <div class="space-y-2">
                <label v-for="r in [5,4,3]" :key="r" class="flex items-center">
                  <input type="checkbox" :value="r"
                         v-model="filters.ratings"
                         class="form-checkbox text-emerald-500 rounded"/>
                  <span class="ml-2 flex items-center">
                    <span class="flex text-yellow-400">{{ '★★★★★'.slice(0,r) }}</span>
                    <span v-if="r<5" class="text-gray-300">{{ '★★★★★'.slice(0,5-r) }}</span>
                    <span class="ml-1 text-sm text-gray-600">{{ r }} &amp; up</span>
                  </span>
                </label>
              </div>
            </div>
          </section>

          <!-- Buttons -->
          <div class="p-4 bg-gray-50">
            <button @click="applyFilters"
                    class="w-full bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition">
              Apply Filters
            </button>
            <button @click="clearFilters"
                    class="w-full text-gray-600 py-2 px-4 mt-2 hover:text-emerald-600 transition">
              Clear All
            </button>
          </div>
        </div>
      </aside>

      <!-- ─── PRODUCT GRID ─────────────────────────────────────────────────────────────── -->
      <div class="flex-1 max-w-6xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard v-for="(p,i) in filteredProducts" :key="i" v-bind="p"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductCard from '@/components/common/ProductCard.vue'

/* images */
import PotatoChips            from '@/assets/images/Potato Chips.webp'
import PretzelSticks          from '@/assets/images/Pretzel Sticks.webp'
import MicrowavePopcorn       from '@/assets/images/Microwave Popcorn.webp'
import MixedNuts              from '@/assets/images/Mixed Nuts.webp'
import GranolaBars            from '@/assets/images/Granola Bars.webp'
import ChocolateChipCookies   from '@/assets/images/Chocolate Chip Cookies.webp'
import FruitSnacks            from '@/assets/images/Fruit Snacks.webp'
import VeggieChips            from '@/assets/images/Veggie Chips.webp'
import EnergyBar              from '@/assets/images/Energy Bar.webp'
import RiceCakes              from '@/assets/images/Rice Cakes.webp'
import TrailMix               from '@/assets/images/Trail Mix.webp'
import CaramelPopcorn         from '@/assets/images/Caramel Popcorn.webp'

/* product list with metadata */
const products = ref([
  { image:PotatoChips,          title:'Potato Chips',          description:'150 g bag', price:2.49, originalPrice:2.99, discount:17, badge:'New',        badgeColor:'blue-500',   category:'Chips & Crisps',       dietary:[],                        brand:'SnackTime',   rating:4, detailsLink:'/product-details/potato-chips' },
  { image:PretzelSticks,        title:'Pretzel Sticks',        description:'100 g pack',price:1.99,                       badge:'Organic',    badgeColor:'green-500',  category:'Pretzels & Crackers',   dietary:['Organic','Low-Sugar'],   brand:'CrunchyBites',rating:5, detailsLink:'/product-details/pretzel-sticks' },
  { image:MicrowavePopcorn,     title:'Microwave Popcorn',     description:'3‑pack',    price:3.49, originalPrice:3.99, discount:13, badge:'Bestseller', badgeColor:'purple-500', category:'Chips & Crisps',       dietary:['Gluten-Free'],          brand:'SnackTime',   rating:5, detailsLink:'/product-details/microwave-popcorn' },
  { image:MixedNuts,            title:'Mixed Nuts',            description:'200 g pack',price:4.99,                       badge:'Fresh',      badgeColor:'yellow-500', category:'Nuts & Trail Mix',      dietary:['Low-Sugar'],            brand:'Nutty Snacks',rating:4, detailsLink:'/product-details/mixed-nuts' },
  { image:GranolaBars,          title:'Granola Bars',          description:'Box of 6',  price:3.99,                       badge:'Low-Sugar',  badgeColor:'orange-500', category:'Cookies & Bars',        dietary:['Gluten-Free','Low-Sugar'],brand:'YummyTreats',rating:4, detailsLink:'/product-details/granola-bars' },
  { image:ChocolateChipCookies, title:'Chocolate Chip Cookies',description:'Pack of 12',price:2.99, originalPrice:3.49, discount:14, badge:'New',        badgeColor:'blue-500',   category:'Cookies & Bars',        dietary:[],                       brand:'YummyTreats', rating:4, detailsLink:'/product-details/chocolate-chip-cookies' },
  { image:FruitSnacks,          title:'Fruit Snacks',          description:'80 g pack', price:1.49, originalPrice:1.99, discount:25, badge:'Bestseller', badgeColor:'purple-500', category:'Candy & Chocolate',    dietary:['Gluten-Free'],          brand:'SnackTime',   rating:5, detailsLink:'/product-details/fruit-snacks' },
  { image:VeggieChips,          title:'Veggie Chips',          description:'120 g bag', price:2.99,                       badge:'Healthy',    badgeColor:'green-500',  category:'Chips & Crisps',       dietary:['Gluten-Free','Organic'], brand:'CrunchyBites',rating:4, detailsLink:'/product-details/veggie-chips' },
  { image:EnergyBar,            title:'Energy Bar',            description:'50 g bar',  price:1.49,                       badge:'Low-Sugar',  badgeColor:'orange-500', category:'Cookies & Bars',        dietary:['Low-Sugar'],           brand:'Nutty Snacks',rating:3, detailsLink:'/product-details/energy-bar' },
  { image:RiceCakes,            title:'Rice Cakes',            description:'3‑pack',    price:1.99, originalPrice:2.49, discount:20, badge:'New',        badgeColor:'blue-500',   category:'Pretzels & Crackers',   dietary:['Gluten-Free'],          brand:'CrunchyBites',rating:4, detailsLink:'/product-details/rice-cakes' },
  { image:TrailMix,             title:'Trail Mix',             description:'150 g pack',price:3.49,                       badge:'Healthy',    badgeColor:'green-500',  category:'Nuts & Trail Mix',      dietary:['Low-Sugar','Organic'],  brand:'Nutty Snacks',rating:5, detailsLink:'/product-details/trail-mix' },
  { image:CaramelPopcorn,       title:'Caramel Popcorn',       description:'100 g bag', price:2.99, originalPrice:3.49, discount:14, badge:'Premium',    badgeColor:'red-500',    category:'Candy & Chocolate',    dietary:[],                       brand:'YummyTreats', rating:4, detailsLink:'/product-details/caramel-popcorn' }
])

/* option arrays */
const categoryOptions = ['Chips & Crisps','Pretzels & Crackers','Cookies & Bars','Nuts & Trail Mix','Candy & Chocolate']
const dietaryOptions  = ['Gluten-Free','Low-Sugar','Organic']
const brandOptions    = ['SnackTime','CrunchyBites','YummyTreats','Nutty Snacks']

/* filter state */
const filters = ref({
  categories: [],
  dietary: [],
  brands: [],
  ratings: [],
  priceRange: { min: 0, max: 10 }
})
const appliedFilters = ref({ ...filters.value })

/* actions */
function applyFilters () {
  appliedFilters.value = { ...filters.value }
}
function clearFilters () {
  filters.value = {
    categories: [],
    dietary: [],
    brands: [],
    ratings: [],
    priceRange: { min: 0, max: 10 }
  }
  appliedFilters.value = { ...filters.value }
}

/* computed list */
const filteredProducts = computed(() => {
  const { categories, dietary, brands, ratings, priceRange } = appliedFilters.value
  return products.value.filter(p => {
    const cat = categories.length === 0 || categories.includes(p.category)
    const diet = dietary.length === 0 || dietary.every(d => p.dietary?.includes(d))
    const br = brands.length === 0 || brands.includes(p.brand)
    const rate = ratings.length === 0 || ratings.some(r => p.rating >= r)
    const pr = p.price >= priceRange.min && p.price <= priceRange.max
    return cat && diet && br && rate && pr
  })
})
</script>
