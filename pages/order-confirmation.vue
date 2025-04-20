<template>
    <TopBar />
    <Header />
  
    <main class="container mx-auto px-4 py-12 text-center">
      <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div class="text-emerald-500 text-6xl mb-4">
          <i class="ri-check-double-line"></i>
        </div>
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Order Confirmed!</h1>
        <p class="text-gray-600 mb-6">Thank you for shopping with us. Your order has been placed successfully and is on its way.</p>
  
        <div class="bg-gray-50 p-6 rounded-lg text-left mb-6">
          <h2 class="text-lg font-semibold text-gray-700 mb-4">What happens next?</h2>
          <ul class="list-disc list-inside text-sm text-gray-600 space-y-2">
            <li>You’ll receive a confirmation email with order details.</li>
            <li>We’ll prepare and pack your order for shipping.</li>
            <li>You can expect delivery within 1–5 working days depending on your selected method.</li>
          </ul>
        </div>
  
        <NuxtLink to="/"
          class="inline-block bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-lg text-sm font-medium transition">
          Continue Shopping
        </NuxtLink>
      </div>
    </main>
  
    <Footer />
  </template>
  
  <script setup>
  import TopBar from '@/components/common/TopBar.vue'
  import Header from '@/components/common/Header.vue'
  import Footer from '@/components/common/Footer.vue'
  
  // Optional: Clear cart after confirmation (if not already cleared in checkout)
  import { useCartStore } from '@/stores/cart'
  const cart = useCartStore()
  cart.clearCart()
  </script>
  
  <style scoped>
  .ri-check-double-line {
    font-size: 3rem;
  }
  </style>
  