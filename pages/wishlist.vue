<template>
   <TopBar />
   <Header />
 
   <main class="container mx-auto px-4 py-8">
     <h2 class="text-2xl font-bold mb-4">My Wishlist ({{ wishlist.wishlistCount }})</h2>
     
     <div v-if="wishlist.items.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       <ProductCard
         v-for="item in wishlist.items"
         :key="item.title"
         v-bind="item"
       />
     </div>
 
     <div v-else class="text-gray-500">No items in your wishlist.</div>
     
     <button @click="wishlist.clearWishlist" v-if="wishlist.items.length" class="mt-8 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
       Clear Wishlist
     </button>
   </main>
 
   <Footer />
 </template>
 
 <script setup>
 import TopBar from '~/components/common/TopBar.vue'
 import Header from '~/components/common/Header.vue'
 import Footer from '~/components/common/Footer.vue'
 import ProductCard from '~/components/common/ProductCard.vue'
 
 import { useWishlistStore } from '@/stores/wishlist.js'
 
 const wishlist = useWishlistStore()
 </script>
 