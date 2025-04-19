<template>
  <main class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row gap-6">

      <!-- ─── Filter Sidebar ───────────────────────────────────────────────────────────── -->
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
              <input type="range" min="0" max="100" v-model.number="filters.priceRange.max"
                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
              <div class="flex justify-between text-sm text-gray-600 mt-2">
                <span>${{ filters.priceRange.min }}</span>
                <span>${{ filters.priceRange.max }}</span>
              </div>
              <div class="mt-4 flex space-x-2">
                <div class="w-1/2">
                  <label class="text-xs text-gray-600">Min</label>
                  <input type="number" v-model.number="filters.priceRange.min" min="0" max="100"
                    class="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div class="w-1/2">
                  <label class="text-xs text-gray-600">Max</label>
                  <input type="number" v-model.number="filters.priceRange.max" min="0" max="100"
                    class="w-full p-2 border border-gray-300 rounded" />
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
                  <input type="checkbox" :value="diet" v-model="filters.dietary"
                    class="form-checkbox text-emerald-500 rounded" />
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
                  <input type="checkbox" :value="brand" v-model="filters.brands"
                    class="form-checkbox text-emerald-500 rounded" />
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
                <label v-for="r in [5, 4, 3]" :key="r" class="flex items-center">
                  <input type="checkbox" :value="r" v-model="filters.ratings"
                    class="form-checkbox text-emerald-500 rounded" />
                  <span class="ml-2 flex items-center">
                    <span class="flex text-yellow-400">{{ '★★★★★'.slice(0, r) }}</span><span v-if="r < 5"
                      class="text-gray-300">{{ '★★★★★'.slice(0, 5 - r) }}</span>
                    <span class="ml-1 text-sm text-gray-600">{{ r }} &amp; up</span>
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
            <button @click="clearFilters" class="w-full text-gray-600 py-2 px-4 mt-2 hover:text-emerald-600 transition">
              Clear All
            </button>
          </div>
        </div>
      </aside>

      <!-- ─── PRODUCT GRID ──────────────────────────────────────────────────────────────── -->
      <div class="flex-1 max-w-6xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard v-for="(product, i) in filteredProducts" :key="i" v-bind="product" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductCard from '@/components/common/ProductCard.vue'

/* ────── Imports (all 24) ────── */
import OrganicApples from '@/assets/images/apple.webp'
import FreshAvocados from '@/assets/images/avocados.webp'
import OrganicCarrots from '@/assets/images/carrots.webp'
import JuicyBananas from '@/assets/images/Juicy Bananas.webp'
import CitrusOranges from '@/assets/images/Citrus Oranges.webp'
import CrispLettuce from '@/assets/images/Crisp Lettuce.webp'
import RedTomatoes from '@/assets/images/Red Tomatoes.webp'
import GreenGrapes from '@/assets/images/Green Grapes.webp'
import ExoticMangoes from '@/assets/images/Exotic Mangoes.webp'
import TropicalPineapple from '@/assets/images/Tropical Pineapple.webp'
import FreshBlueberries from '@/assets/images/Fresh Blueberries.webp'
import RipeStrawberries from '@/assets/images/Ripe Strawberries.webp'
import OrganicBroccoli from '@/assets/images/Organic Broccoli.webp'
import FreshCauliflower from '@/assets/images/Fresh Cauliflower.webp'
import GardenPeas from '@/assets/images/Garden Peas.webp'
import OrganicPotatoes from '@/assets/images/Organic Potatoes.webp'
import FreshOnions from '@/assets/images/Fresh Onions.webp'
import AromaticGarlic from '@/assets/images/Aromatic Garlic.webp'
import OrganicSpinach from '@/assets/images/Organic Spinach.webp'
import KaleLeaves from '@/assets/images/Kale Leaves.webp'
import OrganicCucumbers from '@/assets/images/Organic Cucumbers.webp'
import FreshBellPeppers from '@/assets/images/Fresh Bell Peppers.webp'
import OrganicZucchini from '@/assets/images/Organic Zucchini.webp'
import FreshMushrooms from '@/assets/images/Fresh Mushrooms.webp'

/* ────── Product list (metadata added) ────── */
const products = ref([
  /* Fresh Fruits */
  { image: OrganicApples, title: 'Organic Apples', description: 'Farm Fresh, 1kg pack', price: 4.99, originalPrice: 6.99, discount: 29, badge: 'Organic', badgeColor: 'emerald-500', category: 'Fresh Fruits', dietary: ['Organic', 'Non-GMO'], brand: 'Farm Fresh', rating: 5, detailsLink: '/product-details/organic-apples' },
  { image: FreshAvocados, title: 'Fresh Avocados', description: 'Creamy and delicious', price: 2.99, badge: 'New', badgeColor: 'blue-500', category: 'Fresh Fruits', dietary: ['Locally Sourced'], brand: 'Green Earth', rating: 4, detailsLink: '/product-details/fresh-avocados' },
  { image: ExoticMangoes, title: 'Exotic Mangoes', description: 'Sweet & tropical', price: 5.49, originalPrice: 6.49, discount: 15, badge: 'Bestseller', badgeColor: 'purple-500', category: 'Exotic Fruits', dietary: ['Non-GMO'], brand: 'Natural Harvest', rating: 5, detailsLink: '/product-details/exotic-mangoes' },
  { image: TropicalPineapple, title: 'Tropical Pineapple', description: 'Juicy & tangy', price: 4.29, badge: 'Limited', badgeColor: 'red-500', category: 'Exotic Fruits', dietary: ['Non-GMO'], brand: 'Natural Harvest', rating: 4, detailsLink: '/product-details/tropical-pineapple' },
  { image: FreshBlueberries, title: 'Fresh Blueberries', description: 'Bursting with flavour', price: 3.99, originalPrice: 4.99, discount: 20, badge: 'Fresh', badgeColor: 'teal-500', category: 'Fresh Fruits', dietary: ['Locally Sourced'], brand: 'Green Earth', rating: 4, detailsLink: '/product-details/fresh-blueberries' },
  { image: RipeStrawberries, title: 'Ripe Strawberries', description: 'Sweet & juicy', price: 4.49, originalPrice: 5.49, discount: 18, badge: 'Seasonal', badgeColor: 'pink-500', category: 'Fresh Fruits', dietary: ['Locally Sourced'], brand: 'Green Earth', rating: 5, detailsLink: '/product-details/ripe-strawberries' },
  { image: GreenGrapes, title: 'Green Grapes', description: 'Seedless snack', price: 3.79, badge: 'New', badgeColor: 'blue-500', category: 'Fresh Fruits', dietary: [], brand: 'Farm Fresh', rating: 4, detailsLink: '/product-details/green-grapes' },
  { image: JuicyBananas, title: 'Juicy Bananas', description: 'Naturally sweet', price: 1.99, originalPrice: 2.49, discount: 20, badge: 'Fresh', badgeColor: 'yellow-500', category: 'Fresh Fruits', dietary: ['Locally Sourced'], brand: 'Farm Fresh', rating: 5, detailsLink: '/product-details/juicy-bananas' },
  { image: CitrusOranges, title: 'Citrus Oranges', description: 'Zesty & refreshing', price: 3.99, badge: 'Citrus', badgeColor: 'orange-500', category: 'Fresh Fruits', dietary: ['Non-GMO'], brand: 'Farm Fresh', rating: 4, detailsLink: '/product-details/citrus-oranges' },

  /* Fresh Vegetables */
  { image: OrganicCarrots, title: 'Organic Carrots', description: 'Crunchy snack', price: 3.49, originalPrice: 4.49, discount: 22, badge: 'Bestseller', badgeColor: 'purple-500', category: 'Fresh Vegetables', dietary: ['Organic'], brand: 'Organic Valley', rating: 5, detailsLink: '/product-details/organic-carrots' },
  { image: RedTomatoes, title: 'Red Tomatoes', description: 'Perfect for cooking', price: 3.29, originalPrice: 4.29, discount: 24, badge: 'Organic', badgeColor: 'emerald-500', category: 'Fresh Vegetables', dietary: ['Organic'], brand: 'Organic Valley', rating: 4, detailsLink: '/product-details/red-tomatoes' },
  { image: CrispLettuce, title: 'Crisp Lettuce', description: 'Ideal for salads', price: 2.49, originalPrice: 3.49, discount: 29, badge: 'Green', badgeColor: 'green-500', category: 'Herbs & Greens', dietary: ['Locally Sourced'], brand: 'Farm Fresh', rating: 3, detailsLink: '/product-details/crisp-lettuce' },
  { image: OrganicBroccoli, title: 'Organic Broccoli', description: 'Nutrient rich', price: 2.99, originalPrice: 3.49, discount: 14, badge: 'Organic', badgeColor: 'emerald-500', category: 'Fresh Vegetables', dietary: ['Organic'], brand: 'Organic Valley', rating: 5, detailsLink: '/product-details/organic-broccoli' },
  { image: FreshCauliflower, title: 'Fresh Cauliflower', description: 'Versatile veggie', price: 3.59, badge: 'New', badgeColor: 'blue-500', category: 'Fresh Vegetables', dietary: ['Non-GMO'], brand: 'Green Earth', rating: 4, detailsLink: '/product-details/fresh-cauliflower' },
  { image: GardenPeas, title: 'Garden Peas', description: 'Sweet & tender', price: 2.79, badge: 'Popular', badgeColor: 'teal-500', category: 'Fresh Vegetables', dietary: ['Non-GMO'], brand: 'Farm Fresh', rating: 4, detailsLink: '/product-details/garden-peas' },
  { image: OrganicPotatoes, title: 'Organic Potatoes', description: 'Versatile staple', price: 3.29, originalPrice: 3.99, discount: 18, badge: 'Organic', badgeColor: 'emerald-500', category: 'Fresh Vegetables', dietary: ['Organic'], brand: 'Organic Valley', rating: 4, detailsLink: '/product-details/organic-potatoes' },
  { image: FreshOnions, title: 'Fresh Onions', description: 'Kitchen staple', price: 1.99, badge: 'Fresh', badgeColor: 'blue-500', category: 'Fresh Vegetables', dietary: [], brand: 'Farm Fresh', rating: 3, detailsLink: '/product-details/fresh-onions' },
  { image: AromaticGarlic, title: 'Aromatic Garlic', description: 'Flavor booster', price: 2.49, originalPrice: 2.99, discount: 17, badge: 'New', badgeColor: 'purple-500', category: 'Fresh Vegetables', dietary: ['Pesticide-Free'], brand: 'Green Earth', rating: 4, detailsLink: '/product-details/aromatic-garlic' },
  { image: OrganicCucumbers, title: 'Organic Cucumbers', description: 'Cool & crisp', price: 1.89, badge: 'Organic', badgeColor: 'emerald-500', category: 'Fresh Vegetables', dietary: ['Organic'], brand: 'Organic Valley', rating: 4, detailsLink: '/product-details/organic-cucumbers' },
  { image: FreshBellPeppers, title: 'Fresh Bell Peppers', description: 'Colorful & crunchy', price: 2.99, originalPrice: 3.49, discount: 14, badge: 'Colorful', badgeColor: 'red-500', category: 'Fresh Vegetables', dietary: ['Non-GMO'], brand: 'Farm Fresh', rating: 5, detailsLink: '/product-details/fresh-bell-peppers' },
  { image: OrganicZucchini, title: 'Organic Zucchini', description: 'Great for grilling', price: 2.59, badge: 'Organic', badgeColor: 'emerald-500', category: 'Fresh Vegetables', dietary: ['Organic'], brand: 'Organic Valley', rating: 4, detailsLink: '/product-details/organic-zucchini' },
  { image: FreshMushrooms, title: 'Fresh Mushrooms', description: 'Earthy & tender', price: 3.49, originalPrice: 4.19, discount: 17, badge: 'New', badgeColor: 'blue-500', category: 'Fresh Vegetables', dietary: ['Organic'], brand: 'Farm Fresh', rating: 5, detailsLink: '/product-details/fresh-mushrooms' },

  /* Herbs & Greens */
  { image: OrganicSpinach, title: 'Organic Spinach', description: 'Leafy green', price: 2.99, originalPrice: 3.49, discount: 14, badge: 'Organic', badgeColor: 'emerald-500', category: 'Herbs & Greens', dietary: ['Organic'], brand: 'Organic Valley', rating: 5, detailsLink: '/product-details/organic-spinach' },
  { image: KaleLeaves, title: 'Kale Leaves', description: 'Vitamin rich', price: 3.19, originalPrice: 3.99, discount: 20, badge: 'Healthy', badgeColor: 'green-500', category: 'Herbs & Greens', dietary: ['Organic'], brand: 'Organic Valley', rating: 4, detailsLink: '/product-details/kale-leaves' }
])

/* filter options for loops */
const categoryOptions = ['Fresh Fruits', 'Fresh Vegetables', 'Herbs & Greens', 'Exotic Fruits']
const dietaryOptions = ['Organic', 'Non-GMO', 'Locally Sourced', 'Pesticide-Free']
const brandOptions = ['Farm Fresh', 'Organic Valley', 'Green Earth', 'Natural Harvest']

/* Filter state */
const filters = ref({
  categories: [],
  dietary: [],
  brands: [],
  ratings: [],
  priceRange: { min: 0, max: 100 }
})

const appliedFilters = ref({ ...filters.value })

/* helpers */
function applyFilters() {
  appliedFilters.value = { ...filters.value }
}

function clearFilters() {
  filters.value = {
    categories: [],
    dietary: [],
    brands: [],
    ratings: [],
    priceRange: { min: 0, max: 100 }
  }
  appliedFilters.value = { ...filters.value }
}

/* computed list */
const filteredProducts = computed(() => {
  const { categories, dietary, brands, ratings, priceRange } = appliedFilters.value

  return products.value.filter(p => {
    // Category filter - show if no categories selected OR product matches any selected category
    const categoryMatch = categories.length === 0 || categories.includes(p.category)

    // Dietary filter - show if no dietary selected OR product has all selected dietary tags
    const dietaryMatch = dietary.length === 0 || dietary.every(d => p.dietary?.includes(d))

    // Brand filter - show if no brands selected OR product matches any selected brand
    const brandMatch = brands.length === 0 || brands.includes(p.brand)

    // Rating filter - show if no ratings selected OR product matches any selected rating
    const ratingMatch = ratings.length === 0 || ratings.some(r => p.rating >= r)

    // Price filter - show if product is within price range
    const priceMatch = p.price >= priceRange.min && p.price <= priceRange.max

    return categoryMatch && dietaryMatch && brandMatch && ratingMatch && priceMatch
  })
})
</script>