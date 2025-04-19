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
                <input type="range" min="0" max="12" step="0.1"
                       v-model.number="filters.priceRange.max"
                       class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"/>
                <div class="flex justify-between text-sm text-gray-600 mt-2">
                  <span>${{ filters.priceRange.min.toFixed(2) }}</span>
                  <span>${{ filters.priceRange.max.toFixed(2) }}</span>
                </div>
                <div class="mt-4 flex space-x-2">
                  <div class="w-1/2">
                    <label class="text-xs text-gray-600">Min</label>
                    <input type="number" min="0" max="12" step="0.1"
                           v-model.number="filters.priceRange.min"
                           class="w-full p-2 border border-gray-300 rounded"/>
                  </div>
                  <div class="w-1/2">
                    <label class="text-xs text-gray-600">Max</label>
                    <input type="number" min="0" max="12" step="0.1"
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
  import SourdoughBread   from '@/assets/images/Sourdough Bread.webp'
  import Croissant        from '@/assets/images/Croissant.webp'
  import ChocolateCake    from '@/assets/images/Chocolate Cake.webp'
  import BlueberryMuffin  from '@/assets/images/Blueberry Muffin.webp'
  import WholeWheatBread  from '@/assets/images/Whole Wheat Bread.webp'
  import VeganCookies     from '@/assets/images/Vegan Cookies.webp'
  import Baguette         from '@/assets/images/Baguette.webp'
  import CinnamonRoll     from '@/assets/images/Cinnamon Roll.webp'
  import Cheesecake       from '@/assets/images/Cheesecake.webp'
  import BananaBread      from '@/assets/images/Banana Bread.webp'
  import OatmealCookies   from '@/assets/images/Oatmeal Cookies.webp'
  import VeganBrownie     from '@/assets/images/Vegan Brownie.webp'
  
  /* ── products with metadata ── */
  const products = ref([
    { image:SourdoughBread,  title:'Sourdough Bread', description:'Artisan loaf',          price:4.99, originalPrice:5.99, discount:17, badge:'Organic',badgeColor:'emerald-500', category:'Bread',     dietary:['Organic'],          brand:'Artisan Bread Co.', rating:5, detailsLink:'/product-details/sourdough-bread' },
    { image:WholeWheatBread, title:'Whole Wheat Bread',description:'Healthy & hearty',     price:3.49,                         badge:'Low-Sugar',badgeColor:'orange-500', category:'Bread',     dietary:['Low-Sugar'],        brand:'Healthy Bakes',     rating:4, detailsLink:'/product-details/whole-wheat-bread' },
    { image:Baguette,        title:'Baguette',         description:'French‑style',          price:2.99, originalPrice:3.49, discount:14, badge:'Organic',badgeColor:'emerald-500', category:'Bread',     dietary:['Organic'],          brand:'Artisan Bread Co.', rating:4, detailsLink:'/product-details/baguette' },
  
    { image:Croissant,       title:'Croissant',        description:'Buttery & flaky',       price:2.49,                         badge:'New',badgeColor:'blue-500',    category:'Pastries', dietary:[],                     brand:'Sweet Treats',      rating:4, detailsLink:'/product-details/croissant' },
    { image:CinnamonRoll,    title:'Cinnamon Roll',    description:'Sweet & gooey',         price:3.49,                         badge:'New',badgeColor:'blue-500',    category:'Pastries', dietary:[],                     brand:'Sweet Treats',      rating:3, detailsLink:'/product-details/cinnamon-roll' },
    { image:BlueberryMuffin, title:'Blueberry Muffin', description:'Freshly baked',         price:1.99, originalPrice:2.49, discount:20, badge:'Fresh',badgeColor:'yellow-500',  category:'Muffins',  dietary:['Low-Sugar'],        brand:'Local Bakery',      rating:4, detailsLink:'/product-details/blueberry-muffin' },
    { image:BananaBread,     title:'Banana Bread',     description:'Moist & flavourful',    price:5.99,                         badge:'Fresh',badgeColor:'yellow-500',  category:'Muffins',  dietary:['Low-Sugar'],        brand:'Local Bakery',      rating:5, detailsLink:'/product-details/banana-bread' },
  
    { image:ChocolateCake,   title:'Chocolate Cake',   description:'Rich slice',            price:3.99, originalPrice:4.99, discount:20, badge:'Bestseller',badgeColor:'purple-500',category:'Cakes',    dietary:[],                     brand:'Sweet Treats',      rating:5, detailsLink:'/product-details/chocolate-cake' },
    { image:Cheesecake,      title:'Cheesecake',       description:'Creamy slice',          price:4.99, originalPrice:5.99, discount:17, badge:'Bestseller',badgeColor:'purple-500',category:'Cakes',    dietary:[],                     brand:'Sweet Treats',      rating:4, detailsLink:'/product-details/cheesecake' },
  
    { image:VeganCookies,    title:'Vegan Cookies',    description:'Choc‑chip 6‑pack',      price:4.99, originalPrice:5.99, discount:17, badge:'Vegan',badgeColor:'green-500',    category:'Cookies',  dietary:['Vegan'],            brand:'Healthy Bakes',     rating:4, detailsLink:'/product-details/vegan-cookies' },
    { image:OatmealCookies,  title:'Oatmeal Cookies',  description:'Chewy 6‑pack',          price:3.99, originalPrice:4.99, discount:20, badge:'Low-Sugar',badgeColor:'orange-500',category:'Cookies',  dietary:['Low-Sugar'],        brand:'Healthy Bakes',     rating:3, detailsLink:'/product-details/oatmeal-cookies' },
    { image:VeganBrownie,    title:'Vegan Brownie',    description:'Fudgy treat',           price:2.99, originalPrice:3.49, discount:14, badge:'Vegan',badgeColor:'green-500',    category:'Bars',     dietary:['Vegan'],            brand:'Healthy Bakes',     rating:4, detailsLink:'/product-details/vegan-brownie' }
  ])
  
  /* ── option lists ── */
  const categoryOptions = ['Bread','Pastries','Cakes','Cookies','Muffins','Bars']
  const dietaryOptions  = ['Gluten-Free','Vegan','Organic','Low-Sugar']
  const brandOptions    = ['Local Bakery','Artisan Bread Co.','Sweet Treats','Healthy Bakes']
  
  /* ── filters ── */
  const filters = ref({
    categories: [],
    dietary: [],
    brands: [],
    ratings: [],
    priceRange: { min: 0, max: 12 }
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
      priceRange: { min: 0, max: 12 }
    }
    appliedFilters.value = { ...filters.value }
  }
  
  /* ── computed result ── */
  const filteredProducts = computed(() => {
    const { categories, dietary, brands, ratings, priceRange } = appliedFilters.value
    return products.value.filter(p => {
      const cat  = categories.length === 0 || categories.includes(p.category)
      const diet = dietary.length  === 0 || dietary.every(d => p.dietary?.includes(d))
      const br   = brands.length   === 0 || brands.includes(p.brand)
      const rate = ratings.length  === 0 || ratings.some(r => p.rating >= r)
      const price= p.price >= priceRange.min && p.price <= priceRange.max
      return cat && diet && br && rate && price
    })
  })
  </script>
  