<template>

<TopBar />
<Header />
<main class="container mx-auto px-4 py-8" v-if="product">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Left Column: Product Images -->
      <div>
        <!-- Main Image -->
        <div class="border border-gray-200 rounded-lg overflow-hidden mb-4 cursor-pointer"
          @click="openImageModal(product.image)">
          <img :src="mainImage" alt="Main Product Image" class="w-full object-cover h-96" />
        </div>

        <!-- Thumbnails -->
        <div class="flex space-x-4">
          <div v-for="(thumb, i) in product.thumbnails" :key="i"
            @click="mainImage = thumb"
            class="border border-gray-200 rounded-lg overflow-hidden w-20 h-20 cursor-pointer"
            :class="{ 'border-2 border-emerald-600': mainImage === thumb }">
            <img :src="thumb" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <!-- Right Column: Product Info -->
      <div>
        <h1 class="text-2xl font-semibold text-gray-800 mb-2">{{ product.title }}</h1>
        <div class="flex items-center mb-4">
          <div class="text-yellow-400 flex">
            <i v-for="i in Math.floor(product.rating)" :key="i" class="ri-star-fill"></i>
            <i v-if="product.rating % 1 !== 0" class="ri-star-half-fill"></i>
          </div>
          <span class="text-sm text-gray-600 ml-2">({{ product.rating }} / 5)</span>
        </div>

        <div class="flex items-center mb-4">
          <span class="text-2xl font-bold text-gray-900 mr-2">${{ product.price }}</span>
          <span v-if="product.originalPrice" class="text-base text-gray-500 line-through mr-2">
            ${{ product.originalPrice }}
          </span>
          <span v-if="product.discount" class="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded">
            -{{ product.discount }}%
          </span>
        </div>

        <p class="text-gray-700 mb-4">
          {{ product.description }}
        </p>

        <!-- Quantity + Cart -->
        <div class="flex items-center space-x-4 mb-6">
          <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <button class="px-3 py-2 text-gray-600 hover:bg-gray-100" @click="changeQty(-1)">-</button>
            <input type="number" v-model.number="qty" class="w-12 text-center focus:outline-none" min="1" />
            <button class="px-3 py-2 text-gray-600 hover:bg-gray-100" @click="changeQty(1)">+</button>
          </div>

          <button @click="addToCart"
            class="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg flex items-center text-sm transition-colors">
            <i class="ri-shopping-cart-fill mr-2"></i> Add to Cart
          </button>
        </div>

        <ul class="text-gray-700 mb-6 space-y-2">
          <li><strong>Category:</strong> {{ product.category }}</li>
          <li><strong>Brand:</strong> {{ product.brand }}</li>
          <li><strong>Availability:</strong> <span :class="product.stock ? 'text-green-600' : 'text-red-500'">
              {{ product.stock ? 'In Stock' : 'Out of Stock' }}
            </span></li>
        </ul>
      </div>
    </div>

    <!-- Tabs -->
    <div class="mt-10">
      <div class="border-b mb-4">
        <ul class="flex space-x-8">
          <li @click="activeTab = 'desc'" :class="activeTab === 'desc' ? activeClass : inactiveClass">Description</li>
          <li @click="activeTab = 'reviews'" :class="activeTab === 'reviews' ? activeClass : inactiveClass">Reviews</li>
        </ul>
      </div>

      <div v-if="activeTab === 'desc'">
        <p class="text-gray-700 mb-4">{{ product.longDescription }}</p>
      </div>

      <div v-else>
        <div v-if="product.reviews?.length">
          <div v-for="(review, i) in product.reviews" :key="i" class="p-4 mb-4 bg-gray-50 rounded-lg">
            <div class="flex items-center mb-2">
              <div class="text-yellow-400 flex mr-2">
                <i v-for="i in Math.floor(review.rating)" :key="i" class="ri-star-fill"></i>
                <i v-if="review.rating % 1 !== 0" class="ri-star-half-fill"></i>
              </div>
              <span class="text-sm text-gray-700">{{ review.rating }} / 5</span>
            </div>
            <p class="text-sm text-gray-700">"{{ review.text }}"</p>
            <p class="text-xs text-gray-500 mt-2">- {{ review.name }}</p>
          </div>
        </div>
        <div v-else class="text-gray-500">No reviews yet.</div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal"
      class="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center transition-all">
      <div class="relative">
        <img :src="mainImage" class="max-w-full max-h-screen rounded-lg" />
        <button @click="closeImageModal"
          class="absolute top-2 right-2 bg-black bg-opacity-60 text-white p-2 rounded-full">
          <i class="ri-close-fill text-lg"></i>
        </button>
      </div>
    </div>
  </main>
    <Footer />
  </template>
  
  <script setup>
  import TopBar from '~/components/common/TopBar.vue'
import Header from '~/components/common/Header.vue'
import Footer from '~/components/common/Footer.vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { products } from '@/data/products'
import { useCartStore } from '@/stores/cart'

const route = useRoute()
const router = useRouter()
const cart = useCartStore()

const slug = route.params.slug
const product = products.find(p => p.slug === slug)

if (!product) {
  router.push('/404')
}

const mainImage = ref(product.image)
const qty = ref(1)

const changeQty = (delta) => {
  qty.value = Math.max(1, qty.value + delta)
}

const addToCart = () => {
  cart.addToCart({ ...product, quantity: qty.value })
}

const showModal = ref(false)

const openImageModal = (src) => {
  mainImage.value = src
  showModal.value = true
}

const closeImageModal = () => {
  showModal.value = false
}

// Tabs
const activeTab = ref('desc')
const activeClass = 'py-2 border-b-2 border-emerald-500 text-emerald-500 cursor-pointer'
const inactiveClass = 'py-2 text-gray-700 cursor-pointer hover:text-emerald-500'
  </script>
