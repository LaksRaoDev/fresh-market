<template>
    <main class="container mx-auto px-4 py-8">
      <div class="flex flex-col md:flex-row gap-6">
  
        <!-- ─── FILTER SIDEBAR ─────────────────────────────────────────────────────────── -->
        <aside class="w-full md:w-64 lg:w-72 flex-shrink-0">
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
  
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
  import OrganicMilk        from '@/assets/images/Organic Milk.webp'
  import CheddarCheese      from '@/assets/images/Cheddar Cheese.webp'
  import GreekYogurt        from '@/assets/images/Greek Yogurt.webp'
  import FreeRangeEggs      from '@/assets/images/Free-Range Eggs.webp'
  import OrganicButter      from '@/assets/images/Organic Butter.webp'
  import LactoseFreeMilk    from '@/assets/images/Lactose-Free Milk.webp'
  import OrganicSourCream   from '@/assets/images/Organic Sour Cream.webp'
  import CreamCheese        from '@/assets/images/Cream Cheese.webp'
  import WhippingCream      from '@/assets/images/Whipping Cream.webp'
  import GoatCheese         from '@/assets/images/Goat Cheese.webp'
  import CottageCheese      from '@/assets/images/Cottage Cheese.webp'
  import AlmondMilk         from '@/assets/images/Almond Milk.webp'
  
  /* ── products with metadata for filtering ── */
  const products = ref([
    // Milk
    { image: OrganicMilk,     title: 'Organic Milk',      description: '1 Gallon, fresh from the farm', price: 5.99, originalPrice: 6.99, discount: 14, badge:'Organic',      badgeColor:'emerald-500', category:'Milk',   dietary:['Organic'],                brand:'Organic Valley',  rating:5, detailsLink:'/product-details/organic-milk' },
    { image: LactoseFreeMilk, title: 'Lactose‑Free Milk', description: 'Easy to digest, 1 Gallon',      price: 6.49, originalPrice: 7.49, discount: 13, badge:'Lactose‑Free', badgeColor:'green-500',  category:'Milk',   dietary:['Lactose-Free'],          brand:'Horizon Organic', rating:4, detailsLink:'/product-details/lactose-free-milk' },
    { image: AlmondMilk,      title: 'Almond Milk',       description: 'Unsweetened, 1 Quart',          price: 3.99, originalPrice: 4.49, discount: 11, badge:'Lactose‑Free', badgeColor:'green-500',  category:'Milk',   dietary:['Lactose-Free','Low-Fat'],brand:'Stonyfield',       rating:4, detailsLink:'/product-details/almond-milk' },
  
    // Cheese
    { image: CheddarCheese,   title: 'Cheddar Cheese',    description: 'Sharp & creamy, 1 lb block',    price: 4.99,                                  badge:'New',          badgeColor:'blue-500',   category:'Cheese',dietary:[],                        brand:'Clover Organic',  rating:5, detailsLink:'/product-details/cheddar-cheese' },
    { image: GoatCheese,      title: 'Goat Cheese',       description: 'Creamy & tangy, 8 oz',          price: 5.49,                                  badge:'Fresh',        badgeColor:'yellow-500', category:'Cheese',dietary:['Low-Fat'],                brand:'Organic Valley',  rating:4, detailsLink:'/product-details/goat-cheese' },
    { image: CottageCheese,   title: 'Cottage Cheese',    description: 'High‑protein, 16 oz',           price: 3.29, originalPrice: 3.99, discount:18, badge:'Low‑Fat',      badgeColor:'orange-500', category:'Cheese',dietary:['Low-Fat'],                brand:'Stonyfield',       rating:4, detailsLink:'/product-details/cottage-cheese' },
    { image: CreamCheese,     title: 'Cream Cheese',      description: 'Smooth & spreadable, 8 oz',     price: 2.49,                                  badge:'New',          badgeColor:'blue-500',   category:'Cheese',dietary:[],                        brand:'Clover Organic',  rating:3, detailsLink:'/product-details/cream-cheese' },
  
    // Yogurt / Sour‑cream
    { image: GreekYogurt,     title: 'Greek Yogurt',      description: 'Creamy, protein‑packed, 32 oz', price: 3.49, originalPrice: 4.49, discount:22, badge:'Bestseller',   badgeColor:'purple-500', category:'Yogurt', dietary:['Low-Fat','Organic'],       brand:'Stonyfield',       rating:5, detailsLink:'/product-details/greek-yogurt' },
    { image: OrganicSourCream,title: 'Organic Sour Cream',description: 'Rich & tangy, 16 oz',           price: 2.99, originalPrice: 3.49, discount:14, badge:'Organic',      badgeColor:'emerald-500',category:'Yogurt', dietary:['Organic'],                brand:'Organic Valley',  rating:4, detailsLink:'/product-details/organic-sour-cream' },
  
    // Eggs
    { image: FreeRangeEggs,   title: 'Free‑Range Eggs',   description: '12 Large, cage‑free',           price: 3.99, originalPrice: 4.49, discount:11, badge:'Fresh',        badgeColor:'yellow-500', category:'Eggs',  dietary:['Organic'],                brand:'Horizon Organic', rating:5, detailsLink:'/product-details/free-range-eggs' },
  
    // Butter & cream
    { image: OrganicButter,   title: 'Organic Butter',    description: 'Rich & creamy, 1 lb',           price: 4.29,                                  badge:'Low‑Fat',      badgeColor:'orange-500', category:'Butter',dietary:['Organic'],                brand:'Organic Valley',  rating:4, detailsLink:'/product-details/organic-butter' },
    { image: WhippingCream,   title: 'Whipping Cream',    description: 'Perfect for desserts, 1 pint',  price: 3.99, originalPrice: 4.49, discount:11, badge:'Bestseller',   badgeColor:'purple-500', category:'Butter',dietary:[],                        brand:'Clover Organic',  rating:4, detailsLink:'/product-details/whipping-cream' }
  ])
  
  /* ── option lists for the sidebar ── */
  const categoryOptions = ['Milk','Cheese','Yogurt','Eggs','Butter']
  const dietaryOptions  = ['Organic','Lactose-Free','Low-Fat','Gluten-Free']
  const brandOptions    = ['Organic Valley','Horizon Organic','Stonyfield','Clover Organic']
  
  /* ── reactive filters ── */
  const filters = ref({
    categories: [],
    dietary: [],
    brands: [],
    ratings: [],
    priceRange: { min: 0, max: 20 }
  })
  const appliedFilters = ref({ ...filters.value })
  
  function applyFilters() {
    appliedFilters.value = { ...filters.value }
  }
  function clearFilters() {
    filters.value = {
      categories: [],
      dietary: [],
      brands: [],
      ratings: [],
      priceRange: { min: 0, max: 20 }
    }
    appliedFilters.value = { ...filters.value }
  }
  
  /* ── computed result ── */
  const filteredProducts = computed(() => {
    const { categories, dietary, brands, ratings, priceRange } = appliedFilters.value
  
    return products.value.filter(p => {
      const categoryMatch = categories.length === 0 || categories.includes(p.category)
      const dietaryMatch  = dietary.length  === 0 || dietary.every(d => p.dietary?.includes(d))
      const brandMatch    = brands.length   === 0 || brands.includes(p.brand)
      const ratingMatch   = ratings.length  === 0 || ratings.some(r => p.rating >= r)
      const priceMatch    = p.price >= priceRange.min && p.price <= priceRange.max
  
      return categoryMatch && dietaryMatch && brandMatch && ratingMatch && priceMatch
    })
  })
  </script>
  