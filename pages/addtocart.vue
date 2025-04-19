<template>
    <TopBar />
    <Header />
    <main class="container mx-auto px-4 py-8">
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Order Summary -->
      <div class="lg:w-1/3">
        <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 class="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
          <div class="space-y-4">
            <div class="flex justify-between">
              <span class="text-gray-600">Subtotal</span>
              <span class="font-semibold text-gray-800">${{ cart.totalPrice.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Shipping</span>
              <span class="font-semibold text-gray-800">Free</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Tax</span>
              <span class="font-semibold text-gray-800">${{ tax }}</span>
            </div>
            <div class="border-t pt-4">
              <div class="flex justify-between">
                <span class="text-lg font-bold text-gray-800">Total</span>
                <span class="text-lg font-bold text-gray-800">${{ totalWithTax }}</span>
              </div>
            </div>
            <NuxtLink to="/checkout"
              class="block w-full bg-emerald-500 text-white py-3 px-6 rounded-lg text-center font-semibold hover:bg-emerald-600 transition-colors">
              Proceed to Checkout
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Cart Items -->
      <div class="lg:w-2/3">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>

        <div v-if="cart.items.length === 0" class="text-gray-500">Your cart is empty.</div>

        <div v-else class="space-y-6">
          <div v-for="(item, index) in cart.items" :key="index"
            class="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <img :src="item.image" :alt="item.title" class="w-24 h-24 object-cover rounded-lg" />
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-800">{{ item.title }}</h3>
              <p class="text-sm text-gray-600">{{ item.description }}</p>
              <div class="flex items-center justify-between mt-2">
                <span class="text-lg font-bold text-gray-800">${{ item.price }}</span>
                <div class="flex items-center gap-2">
                  <button
                    @click="decreaseQty(item.title)"
                    :disabled="item.qty <= 1"
                    class="text-gray-500 hover:text-emerald-600 transition-colors text-lg font-bold px-2 disabled:opacity-50">
                    −
                  </button>
                  <span class="w-8 text-center">{{ item.qty }}</span>
                  <button
                    @click="increaseQty(item.title)"
                    class="text-gray-500 hover:text-emerald-600 transition-colors text-lg font-bold px-2">
                    +
                  </button>
                </div>
              </div>
            </div>
            <button @click="cart.removeFromCart(item.title)"
              class="text-gray-500 hover:text-red-600 transition-colors">
              <i class="ri-delete-bin-line text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>

    <Footer />
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'

const cart = useCartStore()

const tax = computed(() => (cart.totalPrice * 0.1).toFixed(2)) // 10% tax
const totalWithTax = computed(() => (cart.totalPrice + parseFloat(tax.value)).toFixed(2))

const increaseQty = (title) => {
  const item = cart.items.find(i => i.title === title)
  if (item) cart.updateQty(title, item.qty + 1)
}

const decreaseQty = (title) => {
  const item = cart.items.find(i => i.title === title)
  if (item && item.qty > 1) cart.updateQty(title, item.qty - 1)
}


import TopBar from '~/components/common/TopBar.vue'
import Header from '~/components/common/Header.vue'
import Footer from '~/components/common/Footer.vue'
</script>