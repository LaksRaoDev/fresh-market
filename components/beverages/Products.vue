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
                <label v-for="diet in dietaryOptions" :key="diet" class="flex items-center">
                  <input type="checkbox" :value="diet"
                         v-model="filters.dietary"
                         class="form-checkbox text-emerald-500 rounded"/>
                  <span class="ml-2 text-gray-700">{{ diet }}</span>
                </label>
              </div>
            </div>
          </section>

          <!-- Brands -->
          <section class="border-b border-gray-200">
            <div class="p-4">
              <h3 class="font-semibold text-gray-800 mb-3">Brands</h3>
              <div class="space-y-2">
                <label v-for="brand in brandOptions" :key="brand" class="flex items-center">
                  <input type="checkbox" :value="brand"
                         v-model="filters.brands"
                         class="form-checkbox text-emerald-500 rounded"/>
                  <span class="ml-2 text-gray-700">{{ brand }}</span>
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
import SparklingWater     from '@/assets/images/Sparkling Lemonad.webp'
import OrganicOrangeJuice from '@/assets/images/Organic Orange Juice.webp'
import ColdBrewCoffee     from '@/assets/images/Cold Brew Coffee.webp'
import GreenTea           from '@/assets/images/Green Tea.webp'
import HerbalInfusion     from '@/assets/images/Herbal Infusion.webp'
import SmoothieBlend      from '@/assets/images/Smoothie Blend.webp'
import CraftBeer          from '@/assets/images/Craft Beer.webp'
import RedWine            from '@/assets/images/Red Wine.webp'
import WhiteWine          from '@/assets/images/White Wine.webp'
import SparklingLemonade  from '@/assets/images/Sparkling Lemonad.webp'
import IcedTea            from '@/assets/images/Iced Tea.webp'
import EnergyDrink        from '@/assets/images/Energy Drink.webp'

/* products (+ metadata for filtering) */
const products = ref([
  { image:SparklingWater,     title:'Sparkling Water',     description:'500 ml bottle',   price:1.99, originalPrice:2.49, discount:20, badge:'New',        badgeColor:'blue-500',   category:'Soft Drinks',          dietary:[],                     brand:'RefreshCo',      rating:4, detailsLink:'/product-details/sparkling-water' },
  { image:SparklingLemonade,  title:'Sparkling Lemonade',  description:'Citrus burst',    price:2.99, originalPrice:3.49, discount:14, badge:'Fresh',      badgeColor:'yellow-500', category:'Soft Drinks',          dietary:[],                     brand:'RefreshCo',      rating:4, detailsLink:'/product-details/sparkling-lemonade' },
  { image:IcedTea,            title:'Iced Tea',            description:'400 ml bottle',   price:1.99,                       badge:'New',        badgeColor:'green-500', category:'Soft Drinks',          dietary:[],                     brand:'RefreshCo',      rating:4, detailsLink:'/product-details/iced-tea' },

  { image:OrganicOrangeJuice, title:'Organic Orange Juice',description:'1 L carton',      price:3.49,                       badge:'Organic',    badgeColor:'green-500', category:'Juices',               dietary:['Organic'],            brand:'Nature\'s Best', rating:5, detailsLink:'/product-details/organic-orange-juice' },
  { image:SmoothieBlend,      title:'Smoothie Blend',      description:'350 ml bottle',   price:4.99, originalPrice:5.99, discount:17, badge:'New',        badgeColor:'blue-500',  category:'Juices',               dietary:['Organic'],            brand:'Nature\'s Best', rating:4, detailsLink:'/product-details/smoothie-blend' },

  { image:ColdBrewCoffee,     title:'Cold Brew Coffee',    description:'250 ml can',      price:2.99, originalPrice:3.49, discount:15, badge:'Bestseller', badgeColor:'purple-500',category:'Coffee & Tea',         dietary:['Sugar-Free'],         brand:'PureLife',       rating:5, detailsLink:'/product-details/cold-brew-coffee' },
  { image:GreenTea,           title:'Green Tea',           description:'200 ml bottle',   price:1.49,                       badge:'Fresh',      badgeColor:'yellow-500',category:'Coffee & Tea',         dietary:[],                     brand:'PureLife',       rating:4, detailsLink:'/product-details/green-tea' },
  { image:HerbalInfusion,     title:'Herbal Infusion',     description:'300 ml bottle',   price:2.49,                       badge:'Low‑Sugar',  badgeColor:'orange-500',category:'Coffee & Tea',         dietary:['Sugar-Free'],         brand:'PureLife',       rating:3, detailsLink:'/product-details/herbal-infusion' },

  { image:CraftBeer,          title:'Craft Beer',          description:'330 ml bottle',   price:5.99, originalPrice:6.99, discount:14, badge:'Bestseller', badgeColor:'purple-500',category:'Alcoholic Beverages', dietary:[],                     brand:'RefreshCo',      rating:5, detailsLink:'/product-details/craft-beer' },
  { image:RedWine,            title:'Red Wine',            description:'750 ml bottle',   price:7.99,                       badge:'Premium',    badgeColor:'red-500',   category:'Alcoholic Beverages', dietary:[],                     brand:'Beverly\'s',     rating:5, detailsLink:'/product-details/red-wine' },
  { image:WhiteWine,          title:'White Wine',          description:'750 ml bottle',   price:8.99,                       badge:'Premium',    badgeColor:'red-500',   category:'Alcoholic Beverages', dietary:[],                     brand:'Beverly\'s',     rating:4, detailsLink:'/product-details/white-wine' },

  { image:EnergyDrink,        title:'Energy Drink',        description:'250 ml can',      price:2.49,                       badge:'Low‑Sugar',  badgeColor:'orange-500',category:'Energy Drinks',        dietary:['Sugar-Free'],         brand:'PureLife',       rating:3, detailsLink:'/product-details/energy-drink' }
])

/* option lists */
const categoryOptions = ['Soft Drinks','Juices','Coffee & Tea','Alcoholic Beverages','Energy Drinks']
const dietaryOptions  = ['Organic','Sugar-Free']
const brandOptions    = ['RefreshCo','Nature\'s Best','PureLife','Beverly\'s']

/* filter state */
const filters = ref({
  categories: [],
  dietary: [],
  brands: [],
  ratings: [],
  priceRange: { min: 0, max: 10 }
})
const appliedFilters = ref({ ...filters.value })

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

/* computed result */
const filteredProducts = computed(() => {
  const { categories, dietary, brands, ratings, priceRange } = appliedFilters.value
  return products.value.filter(p => {
    const cat   = categories.length === 0 || categories.includes(p.category)
    const diet  = dietary.length  === 0 || dietary.every(d => p.dietary?.includes(d))
    const br    = brands.length   === 0 || brands.includes(p.brand)
    const rate  = ratings.length  === 0 || ratings.some(r => p.rating >= r)
    const price = p.price >= priceRange.min && p.price <= priceRange.max
    return cat && diet && br && rate && price
  })
})
</script>
