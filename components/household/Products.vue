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
              <input type="range" min="0" max="20" step="0.1"
                     v-model.number="filters.priceRange.max"
                     class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"/>
              <div class="flex justify-between text-sm text-gray-600 mt-2">
                <span>${{ filters.priceRange.min.toFixed(2) }}</span>
                <span>${{ filters.priceRange.max.toFixed(2) }}</span>
              </div>
              <div class="mt-4 flex space-x-2">
                <div class="w-1/2">
                  <label class="text-xs text-gray-600">Min</label>
                  <input type="number" min="0" max="20" step="0.1"
                         v-model.number="filters.priceRange.min"
                         class="w-full p-2 border border-gray-300 rounded"/>
                </div>
                <div class="w-1/2">
                  <label class="text-xs text-gray-600">Max</label>
                  <input type="number" min="0" max="20" step="0.1"
                         v-model.number="filters.priceRange.max"
                         class="w-full p-2 border border-gray-300 rounded"/>
                </div>
              </div>
            </div>
          </section>

          <!-- Eco options -->
          <section class="border-b border-gray-200">
            <div class="p-4">
              <h3 class="font-semibold text-gray-800 mb-3">Eco‑Friendly Options</h3>
              <div class="space-y-2">
                <label v-for="eco in ecoOptions" :key="eco" class="flex items-center">
                  <input type="checkbox" :value="eco"
                         v-model="filters.eco"
                         class="form-checkbox text-emerald-500 rounded"/>
                  <span class="ml-2 text-gray-700">{{ eco }}</span>
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
import MultiSurfaceCleaner  from '@/assets/images/Multi-Surface Cleaner.webp'
import EcoFriendlyDishSoap  from '@/assets/images/Eco-Friendly Dish Soap.webp'
import LaundryDetergent     from '@/assets/images/Laundry Detergent.webp'
import FabricSoftener       from '@/assets/images/Fabric Softener.jpeg'
import TrashBags            from '@/assets/images/Trash Bags.jpeg'
import Sponges              from '@/assets/images/Sponges (Pack of 3).jpeg'
import PaperTowels          from '@/assets/images/Paper Towels.jpeg'
import ToiletCleaner        from '@/assets/images/Toilet Cleaner.jpeg'
import GlassCleaner         from '@/assets/images/Glass Cleaner.jpeg'
import Broom                from '@/assets/images/Broom & Dustpan Set.jpeg'
import Mop                  from '@/assets/images/Mop & Bucket Set.jpeg'
import AirFreshener         from '@/assets/images/Air Freshener.jpeg'

/* products with filter metadata */
const products = ref([
  { image:MultiSurfaceCleaner , title:'Multi‑Surface Cleaner',  description:'750 ml spray',     price:3.99, originalPrice:4.99, discount:20, badge:'New',        badgeColor:'blue-500',   category:'Cleaning Supplies', dietary:[],                        brand:'GreenClean',  rating:4, detailsLink:'/product-details/multi-surface-cleaner' },
  { image:EcoFriendlyDishSoap , title:'Eco‑Friendly Dish Soap', description:'500 ml bottle',    price:2.49, originalPrice:2.99, discount:17, badge:'Organic',    badgeColor:'green-500',  category:'Cleaning Supplies', dietary:['Eco-Friendly'],           brand:'EcoHome',     rating:5, detailsLink:'/product-details/eco-friendly-dish-soap' },
  { image:LaundryDetergent    , title:'Laundry Detergent',      description:'1.5 L bottle',     price:6.99, originalPrice:7.99, discount:13, badge:'Bestseller', badgeColor:'purple-500', category:'Laundry Supplies',  dietary:[],                        brand:'PureHouse',   rating:5, detailsLink:'/product-details/laundry-detergent' },
  { image:FabricSoftener      , title:'Fabric Softener',        description:'1 L bottle',       price:3.49,                       badge:'Fresh',      badgeColor:'yellow-500', category:'Laundry Supplies',  dietary:[],                        brand:'PureHouse',   rating:4, detailsLink:'/product-details/fabric-softener' },
  { image:TrashBags           , title:'Biodegradable Trash Bags',description:'50‑pack',        price:4.99,                       badge:'Low‑Cost',   badgeColor:'orange-500', category:'Other Essentials',  dietary:['Biodegradable'],         brand:'GreenClean',  rating:3, detailsLink:'/product-details/trash-bags' },
  { image:Sponges             , title:'Sponges (3‑pack)',       description:'Non‑scratch',      price:1.99,                       badge:'New',        badgeColor:'blue-500',   category:'Cleaning Supplies', dietary:['Biodegradable'],         brand:'GreenClean',  rating:4, detailsLink:'/product-details/sponges' },
  { image:PaperTowels         , title:'Paper Towels',           description:'2‑roll pack',      price:3.49,                       badge:'Best Value', badgeColor:'green-500',  category:'Other Essentials',  dietary:['Eco-Friendly'],          brand:'EcoHome',     rating:4, detailsLink:'/product-details/paper-towels' },
  { image:ToiletCleaner       , title:'Toilet Cleaner',         description:'750 ml bottle',    price:2.99, originalPrice:3.49, discount:14, badge:'Bestseller', badgeColor:'purple-500', category:'Cleaning Supplies', dietary:[],                        brand:'CleanLiving', rating:5, detailsLink:'/product-details/toilet-cleaner' },
  { image:GlassCleaner        , title:'Glass Cleaner',          description:'500 ml bottle',    price:2.49,                       badge:'Fresh',      badgeColor:'yellow-500', category:'Cleaning Supplies', dietary:[],                        brand:'CleanLiving', rating:4, detailsLink:'/product-details/glass-cleaner' },
  { image:Broom               , title:'Broom & Dustpan Set',    description:'Durable design',   price:9.99,                       badge:'Premium',    badgeColor:'red-500',    category:'Other Essentials',  dietary:[],                        brand:'GreenClean',  rating:4, detailsLink:'/product-details/broom-and-dustpan' },
  { image:Mop                 , title:'Mop & Bucket Set',       description:'Complete kit',     price:14.99, originalPrice:16.99, discount:12, badge:'New',        badgeColor:'orange-500',category:'Other Essentials',  dietary:[],                        brand:'GreenClean',  rating:4, detailsLink:'/product-details/mop-and-bucket' },
  { image:AirFreshener        , title:'Air Freshener',          description:'300 ml spray',     price:2.99, originalPrice:3.49, discount:14, badge:'Best Seller',badgeColor:'green-500', category:'Other Essentials',  dietary:[],                        brand:'CleanLiving', rating:5, detailsLink:'/product-details/air-freshener' }
])

/* option arrays */
const categoryOptions = ['Cleaning Supplies','Laundry Supplies','Kitchen Tools','Other Essentials']
const ecoOptions      = ['Eco-Friendly','Biodegradable']
const brandOptions    = ['GreenClean','EcoHome','PureHouse','CleanLiving']

/* filter state */
const filters = ref({
  categories: [],
  eco: [],
  brands: [],
  ratings: [],
  priceRange: { min: 0, max: 20 }
})
const appliedFilters = ref({ ...filters.value })

/* actions */
function applyFilters () {
  appliedFilters.value = { ...filters.value }
}
function clearFilters () {
  filters.value = {
    categories: [],
    eco: [],
    brands: [],
    ratings: [],
    priceRange: { min: 0, max: 20 }
  }
  appliedFilters.value = { ...filters.value }
}

/* computed list */
const filteredProducts = computed(() => {
  const { categories, eco, brands, ratings, priceRange } = appliedFilters.value
  return products.value.filter(p => {
    const cat   = categories.length === 0 || categories.includes(p.category)
    const ecoOk = eco.length       === 0 || eco.every(e => p.dietary?.includes(e))
    const br    = brands.length    === 0 || brands.includes(p.brand)
    const rate  = ratings.length   === 0 || ratings.some(r => p.rating >= r)
    const price = p.price >= priceRange.min && p.price <= priceRange.max
    return cat && ecoOk && br && rate && price
  })
})
</script>
