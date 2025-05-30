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
                <h3 class="font-semibold text-gray-800 mb-3">Price Range</h3>
                <input type="range" min="0" max="25" step="0.1"
                       v-model.number="filters.priceRange.max"
                       class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"/>
                <div class="flex justify-between text-sm text-gray-600 mt-2">
                  <span>${{ filters.priceRange.min.toFixed(2) }}</span>
                  <span>${{ filters.priceRange.max.toFixed(2) }}</span>
                </div>
                <div class="mt-4 flex space-x-2">
                  <div class="w-1/2">
                    <label class="text-xs text-gray-600">Min</label>
                    <input type="number" min="0" max="25" step="0.1"
                           v-model.number="filters.priceRange.min"
                           class="w-full p-2 border border-gray-300 rounded"/>
                  </div>
                  <div class="w-1/2">
                    <label class="text-xs text-gray-600">Max</label>
                    <input type="number" min="0" max="25" step="0.1"
                           v-model.number="filters.priceRange.max"
                           class="w-full p-2 border border-gray-300 rounded"/>
                  </div>
                </div>
              </div>
            </section>
  
            <!-- Dietary -->
            <section class="border-b border-gray-200">
              <div class="p-4">
                <h3 class="font-semibold text-gray-800 mb-3">Dietary Preferences</h3>
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
                <h3 class="font-semibold text-gray-800 mb-3">Customer Ratings</h3>
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
                Apply Filters
              </button>
              <button @click="clearFilters"
                      class="w-full text-gray-600 py-2 px-4 mt-2 hover:text-emerald-600 transition">
                Clear All
              </button>
            </div>
          </div>
        </aside>
  
        <!-- ─── PRODUCT GRID ─────────────────────────────────────────────────────────────── -->
        <div class="flex-1 max-w-6xl mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard v-for="(product,i) in filteredProducts" :key="i" v-bind="product"/>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import ProductCard from '@/components/common/ProductCard.vue'
  
  /* ── images ── */
  import OrganicBeef     from '@/assets/images/Organic Beef.webp'
  import SalmonFillet    from '@/assets/images/Salmon Fillet.webp'
  import ChickenBreast   from '@/assets/images/Chicken Breast.webp'
  import PorkChops       from '@/assets/images/Pork Chops.webp'
  import TurkeyBreast    from '@/assets/images/Turkey Breast.webp'
  import Shrimp          from '@/assets/images/Shrimp.webp'
  import LambChops       from '@/assets/images/Lamb Chops.webp'
  import TunaSteak       from '@/assets/images/Tuna Steak.webp'
  import GroundBeef      from '@/assets/images/Ground Beef.webp'
  import ChickenThighs   from '@/assets/images/Chicken Thighs.webp'
  import TurkeyBacon     from '@/assets/images/Turkey Bacon.webp'
  import CodFillet       from '@/assets/images/Cod Fillet.webp'
  
  /* ── products with filtering metadata ── */
  const products = ref([
    { image: OrganicBeef,   title:'Organic Beef',   description:'Grass‑fed, 1 lb',          price:9.99,  originalPrice:11.99,discount:17, badge:'Organic',badgeColor:'emerald-500',category:'Beef',     dietary:['Organic','Grass-Fed'],   brand:'Organic Valley', rating:5, detailsLink:'/product-details/organic-beef' },
    { image: GroundBeef,    title:'Ground Beef',    description:'80 % lean, 1 lb',          price:5.99,  originalPrice:7.99, discount:25, badge:'Bestseller',badgeColor:'purple-500',category:'Beef',     dietary:['Grass-Fed'],            brand:'Perdue',         rating:4, detailsLink:'/product-details/ground-beef' },
    { image: LambChops,     title:'Lamb Chops',     description:'Grass‑fed, 1 lb',          price:15.99, originalPrice:17.99,discount:11, badge:'Organic',badgeColor:'emerald-500',category:'Lamb',     dietary:['Organic','Grass-Fed'], brand:'Organic Valley', rating:4, detailsLink:'/product-details/lamb-chops' },
  
    { image: PorkChops,     title:'Pork Chops',     description:'Bone‑in, 1 lb',            price:6.99,  originalPrice:8.99, discount:22, badge:'Fresh',badgeColor:'yellow-500',  category:'Pork',     dietary:[],                      brand:'Applegate',       rating:3, detailsLink:'/product-details/pork-chops' },
    { image: TurkeyBreast,  title:'Turkey Breast',  description:'Boneless, 2 lb',           price:8.99,                          badge:'Low‑Fat',badgeColor:'orange-500',category:'Poultry',  dietary:['Free-Range','Low-Fat'], brand:'Perdue',         rating:4, detailsLink:'/product-details/turkey-breast' },
    { image: TurkeyBacon,   title:'Turkey Bacon',   description:'Low‑fat, 12 oz',           price:4.99,  originalPrice:5.99, discount:17, badge:'Low‑Fat',badgeColor:'orange-500',category:'Poultry',  dietary:['Low-Fat'],              brand:'Perdue',         rating:3, detailsLink:'/product-details/turkey-bacon' },
    { image: ChickenBreast, title:'Chicken Breast', description:'Boneless & skinless, 2 lb',price:7.99,  originalPrice:9.99, discount:20, badge:'Bestseller',badgeColor:'purple-500',category:'Poultry',  dietary:['Free-Range'],          brand:'Perdue',         rating:5, detailsLink:'/product-details/chicken-breast' },
    { image: ChickenThighs, title:'Chicken Thighs', description:'Bone‑in, 2 lb',            price:6.49,                          badge:'Fresh',badgeColor:'yellow-500',  category:'Poultry',  dietary:['Free-Range'],          brand:'Perdue',         rating:4, detailsLink:'/product-details/chicken-thighs' },
  
    { image: SalmonFillet,  title:'Salmon Fillet',  description:'Wild‑caught, 1 lb',        price:12.99,                         badge:'New',badgeColor:'blue-500',    category:'Seafood',  dietary:['Wild-Caught'],         brand:'Wild Planet',    rating:5, detailsLink:'/product-details/salmon-fillet' },
    { image: TunaSteak,     title:'Tuna Steak',     description:'Sushi‑grade, 1 lb',        price:18.99,                         badge:'New',badgeColor:'blue-500',    category:'Seafood',  dietary:['Wild-Caught'],         brand:'Wild Planet',    rating:4, detailsLink:'/product-details/tuna-steak' },
    { image: CodFillet,     title:'Cod Fillet',     description:'Wild‑caught, 1 lb',        price:10.99, originalPrice:12.99,discount:15, badge:'Wild‑Caught',badgeColor:'green-500',category:'Seafood',  dietary:['Wild-Caught'],         brand:'Wild Planet',    rating:4, detailsLink:'/product-details/cod-fillet' },
    { image: Shrimp,        title:'Shrimp',         description:'Large, 1 lb',              price:14.99, originalPrice:16.99,discount:12, badge:'Wild‑Caught',badgeColor:'green-500',category:'Seafood',  dietary:['Wild-Caught'],         brand:'Wild Planet',    rating:4, detailsLink:'/product-details/shrimp' }
  ])
  
  /* ── option lists ── */
  const categoryOptions = ['Beef','Pork','Poultry','Seafood','Lamb']
  const dietaryOptions  = ['Organic','Grass-Fed','Free-Range','Wild-Caught','Low-Fat']
  const brandOptions    = ['Organic Valley','Applegate','Wild Planet','Perdue']
  
  /* ── reactive filters ── */
  const filters = ref({
    categories: [],
    dietary: [],
    brands: [],
    ratings: [],
    priceRange: { min: 0, max: 25 }
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
      priceRange: { min: 0, max: 25 }
    }
    appliedFilters.value = { ...filters.value }
  }
  
  /* ── filtered list ── */
  const filteredProducts = computed(() => {
    const { categories, dietary, brands, ratings, priceRange } = appliedFilters.value
    return products.value.filter(p => {
      const catMatch  = categories.length === 0 || categories.includes(p.category)
      const dietMatch = dietary.length  === 0 || dietary.every(d => p.dietary?.includes(d))
      const brandMatch= brands.length   === 0 || brands.includes(p.brand)
      const rateMatch = ratings.length  === 0 || ratings.some(r => p.rating >= r)
      const priceMatch= p.price >= priceRange.min && p.price <= priceRange.max
      return catMatch && dietMatch && brandMatch && rateMatch && priceMatch
    })
  })
  </script>
  