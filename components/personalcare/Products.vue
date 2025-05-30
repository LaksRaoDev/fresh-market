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

          <!-- Price range -->
          <section class="border-b border-gray-200">
            <div class="p-4">
              <h3 class="font-semibold text-gray-800 mb-3">Price Range</h3>
              <input type="range" min="0" max="30" step="0.1"
                     v-model.number="filters.priceRange.max"
                     class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"/>
              <div class="flex justify-between text-sm text-gray-600 mt-2">
                <span>${{ filters.priceRange.min.toFixed(2) }}</span>
                <span>${{ filters.priceRange.max.toFixed(2) }}</span>
              </div>
              <div class="mt-4 flex space-x-2">
                <div class="w-1/2">
                  <label class="text-xs text-gray-600">Min</label>
                  <input type="number" min="0" max="30" step="0.1"
                         v-model.number="filters.priceRange.min"
                         class="w-full p-2 border border-gray-300 rounded"/>
                </div>
                <div class="w-1/2">
                  <label class="text-xs text-gray-600">Max</label>
                  <input type="number" min="0" max="30" step="0.1"
                         v-model.number="filters.priceRange.max"
                         class="w-full p-2 border border-gray-300 rounded"/>
                </div>
              </div>
            </div>
          </section>

          <!-- Preferences -->
          <section class="border-b border-gray-200">
            <div class="p-4">
              <h3 class="font-semibold text-gray-800 mb-3">Preferences</h3>
              <div class="space-y-2">
                <label v-for="p in prefOptions" :key="p" class="flex items-center">
                  <input type="checkbox" :value="p"
                         v-model="filters.prefs"
                         class="form-checkbox text-emerald-500 rounded"/>
                  <span class="ml-2 text-gray-700">{{ p }}</span>
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
                <label v-for="r in [5,4]" :key="r" class="flex items-center">
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
import HerbalShampoo       from '@/assets/images/Herbal Shampoo.webp'
import Silky               from '@/assets/images/Silky Conditioner.webp'
import BodyLotion          from '@/assets/images/Body Lotion.webp'
import Facial              from '@/assets/images/Facial Wash.webp'
import OrganicToothpaste   from '@/assets/images/Organic Toothpaste.webp'
import Deodorant           from '@/assets/images/Deodorant.webp'
import Hair                from '@/assets/images/Hair Oil.webp'
import Sunscreen           from '@/assets/images/Sunscreen SPF 50.webp'
import Perfume             from '@/assets/images/Perfume.jpeg'
import Hand                from '@/assets/images/Hand Sanitizer.jpeg'
import Face                from '@/assets/images/Face Cream.jpeg'
import Exfoliating         from '@/assets/images/Exfoliating Scrub.jpeg'

/* product list with metadata */
const products = ref([
  { image:HerbalShampoo,      title:'Herbal Shampoo',        description:'400 ml bottle', price:5.99,  originalPrice:6.99, discount:14, badge:'New',        badgeColor:'blue-500',  category:'Hair Care',      prefs:['Organic'],  brand:'PureEssence', rating:4, detailsLink:'/product-details/herbal-shampoo' },
  { image:Silky,              title:'Silky Conditioner',     description:'400 ml bottle', price:5.49,                       badge:'Organic',    badgeColor:'green-500', category:'Hair Care',      prefs:['Organic','Vegan'], brand:'PureEssence', rating:5, detailsLink:'/product-details/silky-conditioner' },
  { image:BodyLotion,         title:'Body Lotion',           description:'300 ml bottle', price:4.99,  originalPrice:5.99, discount:17, badge:'Bestseller', badgeColor:'purple-500',category:'Skin Care',      prefs:['Vegan'],    brand:'NaturalGlow', rating:5, detailsLink:'/product-details/body-lotion' },
  { image:Facial,             title:'Facial Wash',           description:'200 ml bottle', price:3.99,                       badge:'Fresh',      badgeColor:'yellow-500',category:'Skin Care',      prefs:['Vegan'],    brand:'FreshSkin',   rating:4, detailsLink:'/product-details/facial-wash' },
  { image:OrganicToothpaste,  title:'Organic Toothpaste',    description:'100 ml tube',   price:2.49,                       badge:'Vegan',      badgeColor:'orange-500',category:'Oral Care',      prefs:['Organic','Vegan'], brand:'FreshSkin',   rating:4, detailsLink:'/product-details/organic-toothpaste' },
  { image:Deodorant,          title:'Deodorant',             description:'75 ml stick',   price:3.49,                       badge:'New',        badgeColor:'blue-500',  category:'Bath & Body',   prefs:[],          brand:'BeautyBoost', rating:4, detailsLink:'/product-details/deodorant' },
  { image:Hair,               title:'Hair Oil',              description:'150 ml bottle', price:4.99,                       badge:'Organic',    badgeColor:'green-500', category:'Hair Care',      prefs:['Organic'],  brand:'BeautyBoost', rating:5, detailsLink:'/product-details/hair-oil' },
  { image:Sunscreen,          title:'Sunscreen SPF 50',      description:'100 ml tube',   price:6.99,                       badge:'Premium',    badgeColor:'red-500',   category:'Skin Care',      prefs:[],          brand:'NaturalGlow', rating:5, detailsLink:'/product-details/sunscreen-spf-50' },
  { image:Perfume,            title:'Perfume',               description:'50 ml bottle',  price:29.99,                      badge:'Bestseller', badgeColor:'purple-500',category:'Fragrances',     prefs:[],          brand:'BeautyBoost', rating:5, detailsLink:'/product-details/luxurious-perfume' },
  { image:Hand,               title:'Hand Sanitizer',        description:'250 ml bottle', price:2.99,                       badge:'New',        badgeColor:'blue-500',  category:'Bath & Body',   prefs:['Vegan'],    brand:'FreshSkin',   rating:4, detailsLink:'/product-details/hand-sanitizer' },
  { image:Face,               title:'Face Cream',            description:'50 ml jar',     price:8.99,  originalPrice:9.99, discount:10, badge:'Organic',    badgeColor:'green-500', category:'Skin Care',      prefs:['Organic'],  brand:'NaturalGlow', rating:4, detailsLink:'/product-details/face-cream' },
  { image:Exfoliating,        title:'Exfoliating Scrub',     description:'200 ml tube',   price:4.49,  originalPrice:5.49, discount:18, badge:'Limited',    badgeColor:'orange-500',category:'Skin Care',      prefs:[],          brand:'PureEssence', rating:4, detailsLink:'/product-details/exfoliating-scrub' }
])

/* filter option arrays */
const categoryOptions = ['Hair Care','Skin Care','Oral Care','Fragrances','Bath & Body']
const prefOptions     = ['Organic','Vegan']
const brandOptions    = ['PureEssence','NaturalGlow','FreshSkin','BeautyBoost']

/* filter state */
const filters = ref({
  categories: [],
  prefs: [],
  brands: [],
  ratings: [],
  priceRange: { min: 0, max: 30 }
})
const appliedFilters = ref({ ...filters.value })

/* actions */
function applyFilters () {
  appliedFilters.value = { ...filters.value }
}
function clearFilters () {
  filters.value = {
    categories: [],
    prefs: [],
    brands: [],
    ratings: [],
    priceRange: { min: 0, max: 30 }
  }
  appliedFilters.value = { ...filters.value }
}

/* computed list */
const filteredProducts = computed(() => {
  const { categories, prefs, brands, ratings, priceRange } = appliedFilters.value
  return products.value.filter(p => {
    const cat  = categories.length === 0 || categories.includes(p.category)
    const pref = prefs.length     === 0 || prefs.every(d => p.prefs?.includes(d))
    const br   = brands.length    === 0 || brands.includes(p.brand)
    const rate = ratings.length   === 0 || ratings.some(r => p.rating >= r)
    const pr   = p.price >= priceRange.min && p.price <= priceRange.max
    return cat && pref && br && rate && pr
  })
})
</script>
