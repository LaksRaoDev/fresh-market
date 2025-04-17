<template>
  <!-- Main Header -->
  <header class="bg-white shadow-md sticky top-0 z-50">
    <nav class="container mx-auto px-4">
      <!-- Desktop Menu -->
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center">
            <span class="text-2xl font-bold text-emerald-700">Fresh</span>
            <span class="text-2xl font-light text-emerald-500">Market</span>
          </NuxtLink>
        </div>

        <!-- Search Bar - Hidden on Mobile -->
        <div class="hidden md:block flex-grow max-w-2xl mx-6">
          <div class="relative">
            <input type="text" placeholder="Search for products..."
              class="w-full py-2 px-4 pr-10 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none" />
            <button class="absolute right-3 top-2">
              <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Right Menu Items -->
        <div class="flex items-center space-x-6">
          <!-- User Menu -->
          <div class="hidden md:flex items-center space-x-4">
            <NuxtLink to="/account"
              :class="isActive('/account') ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600'"
              class="flex items-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span class="ml-2">Account</span>
            </NuxtLink>


            <NuxtLink to="/wishlist"
              :class="isActive('/wishlist') ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600'"
              class="flex items-center ">
              <div class="relative">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              

              <!-- Wishlist count badge -->
              <span v-if="wishlist.wishlistCount > 0"
                class="absolute -top-2 -right-2 bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {{ wishlist.wishlistCount }}
              </span>
            </div>
            <span class="ml-2 hidden md:inline">Wishlist</span>
            </NuxtLink>

          </div>

          <!-- Cart -->
          <NuxtLink to="/addtocart"
            :class="isActive('/addtocart') ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600'"
            class="flex items-center">
            <div class="relative">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span v-if="cart.cartCount > 0"
                class="absolute -top-2 -right-2 bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {{ cart.cartCount }}
              </span>
            </div>
            <span class="ml-2 hidden md:inline">Cart</span>
          </NuxtLink>


          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu" class="md:hidden text-gray-700 hover:text-emerald-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Categories Menu - Desktop Only -->
      <div class="hidden md:block border-t">
        <div class="flex space-x-8 py-4">
          <NuxtLink to="/"
            :class="isActive('/') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-600'">
            Home</NuxtLink>
          <NuxtLink to="/fruits"
            :class="isActive('/fruits') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-600'">
            Fruits & Vegetables</NuxtLink>
          <NuxtLink to="/dairy"
            :class="isActive('/dairy') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-600'">
            Dairy & Eggs</NuxtLink>
          <NuxtLink to="/meat"
            :class="isActive('/meat') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-600'">
            Meat & Fish</NuxtLink>
          <NuxtLink to="/bakery"
            :class="isActive('/bakery') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-600'">
            Bakery</NuxtLink>
          <NuxtLink to="/beverages"
            :class="isActive('/beverages') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-600'">
            Beverages</NuxtLink>
          <NuxtLink to="/snacks"
            :class="isActive('/snacks') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-600'">
            Snacks</NuxtLink>
          <NuxtLink to="/household"
            :class="isActive('/household') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-600'">
            Household</NuxtLink>
          <NuxtLink to="/personalcare"
            :class="isActive('/personalcare') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-600'">
            Personal Care</NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-show="isMobileMenuOpen" class="md:hidden bg-white shadow-lg">
      <div class="px-4 py-2 space-y-4">
        <NuxtLink to="/"
          :class="isActive('/') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-600'"
          class="block">Home</NuxtLink>
        <NuxtLink to="/fruits"
          :class="isActive('/fruits') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-600'"
          class="block">Fruits & Vegetables</NuxtLink>
        <NuxtLink to="/dairy"
          :class="isActive('/dairy') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-600'"
          class="block">Dairy & Eggs</NuxtLink>
        <NuxtLink to="/meat"
          :class="isActive('/meat') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-600'"
          class="block">Meat & Fish</NuxtLink>
        <NuxtLink to="/bakery"
          :class="isActive('/bakery') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-600'"
          class="block">Bakery</NuxtLink>
        <NuxtLink to="/beverages"
          :class="isActive('/beverages') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-600'"
          class="block">Beverages</NuxtLink>
        <NuxtLink to="/snacks"
          :class="isActive('/snacks') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-600'"
          class="block">Snacks</NuxtLink>
        <NuxtLink to="/household"
          :class="isActive('/household') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-600'"
          class="block">Household</NuxtLink>
        <NuxtLink to="/personalcare"
          :class="isActive('/personalcare') ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700 hover:text-emerald-600'"
          class="block">Personal Care</NuxtLink>
      </div>
    </div>

    <!-- Mobile Search -->
    <div class="md:hidden px-4 py-3 bg-gray-50">
      <div class="relative">
        <input type="text" placeholder="Search for products..."
          class="w-full py-2 px-4 pr-10 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none" />
        <button class="absolute right-3 top-2">
          <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useWishlistStore } from '@/stores/wishlist.js'
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()

const route = useRoute()
const wishlist = useWishlistStore()

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const isActive = (path) => {
  return route.path === path
}
</script>
