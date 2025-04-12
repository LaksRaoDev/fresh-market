<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
    <div class="relative">
      <!-- Badge -->
      <span v-if="badge"
        :class="`absolute top-2 left-2 bg-${badgeColor} text-white text-xs font-bold px-2 py-1 rounded`">
        {{ badge }}
      </span>

      <!-- Wishlist Icon -->
      <button @click="toggleWishlist"
        class="absolute top-2 right-2 text-white bg-green-500 hover:bg-green-600 rounded-full p-2 shadow transition-all">
        <i :class="isWishlisted ? 'ri-heart-fill' : 'ri-heart-line'"></i>
      </button>

      <img :src="image" :alt="title" class="w-full h-48 object-cover" />
    </div>

    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-800">{{ title }}</h3>
      <p class="text-sm text-gray-600 mb-3">{{ description }}</p>
      <div class="flex items-center mb-4" v-if="price">
        <span class="text-lg font-bold text-gray-800">${{ price }}</span>
        <span v-if="originalPrice" class="text-sm text-gray-500 line-through ml-2">${{ originalPrice }}</span>
        <span v-if="discount" class="ml-2 bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded">-{{ discount }}%</span>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg flex items-center text-sm transition-colors w-full mr-2">
          <i class="ri-shopping-cart-fill mr-2"></i>Add to Cart
        </button>
        <NuxtLink :to="detailsLink || '#'"
          class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg flex items-center justify-center text-sm transition-colors">
          <i class="ri-information-line"></i>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWishlistStore } from '~/stores/wishlist'
import { computed } from 'vue'

const props = defineProps({
  image: String,
  title: String,
  description: String,
  price: [String, Number],
  originalPrice: [String, Number],
  discount: [String, Number],
  badge: String,
  badgeColor: { type: String, default: 'emerald-500' },
  detailsLink: String
})

const wishlist = useWishlistStore()

const product = props

const isWishlisted = computed(() => {
  return wishlist.items.some(item => item.title === product.title)
})

const toggleWishlist = () => {
  if (isWishlisted.value) {
    wishlist.removeFromWishlist(product)
  } else {
    wishlist.addToWishlist(product)
  }
}
</script>
