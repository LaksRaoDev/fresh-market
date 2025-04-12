<template>
    <!-- Special Offers Section -->
    <section class="py-16 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div class="container mx-auto px-4">
            <!-- Section Header -->
            <div class="text-center max-w-2xl mx-auto mb-12">
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Limited
                    Time</span>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">Special Offers & Deals</h2>
                <p class="text-gray-600">Don't miss out on our amazing deals and discounts on your favorite products</p>
            </div>

            <!-- Offers Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Featured Deal -->
                <div class="col-span-1 md:col-span-2 lg:col-span-3">
                    <div class="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl overflow-hidden shadow-xl">
                        <div class="flex flex-col md:flex-row items-center">
                            <div class="md:w-1/2 p-8 text-white">
                                <span class="inline-block bg-white/20 px-4 py-1 rounded-full text-sm mb-4">Featured
                                    Deal</span>
                                <h3 class="text-3xl font-bold mb-4">Weekend Special Sale</h3>
                                <p class="mb-6 text-white/90">Get up to 50% off on fresh fruits and vegetables this
                                    weekend!</p>
                                <button
                                    class="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                                    Shop Now
                                </button>
                            </div>
                            <div class="md:w-1/2 p-8">
                                <img :src="Weekend" alt="Weekend Deal" class="rounded-lg shadow-lg" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Regular Offer Cards -->
                <div
                    class="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    <div class="relative">
                        <img :src="Dairy" alt="Dairy Products" class="w-full h-48 object-cover" />
                        <div
                            class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Save 30%
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Dairy Products</h3>
                        <p class="text-gray-600 mb-4">Get 30% off on all dairy products</p>
                        <div class="flex items-center justify-between">
                            <span class="text-purple-600 font-medium">Valid until 28 Feb</span>
                            <button
                                class="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                View Details
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    <div class="relative">
                        <img :src="Fresh" alt="Fresh Fruits" class="w-full h-48 object-cover" />
                        <div
                            class="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Save 25%
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Fresh Fruits</h3>
                        <p class="text-gray-600 mb-4">25% off on selected fruits</p>
                        <div class="flex items-center justify-between">
                            <span class="text-purple-600 font-medium">Valid until 25 Feb</span>
                            <button
                                class="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                View Details
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    <div class="relative">
                        <img :src="Meat" alt="Meat Products" class="w-full h-48 object-cover" />
                        <div
                            class="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Save 20%
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Meat Products</h3>
                        <p class="text-gray-600 mb-4">20% off on premium meat cuts</p>
                        <div class="flex items-center justify-between">
                            <span class="text-purple-600 font-medium">Valid until 23 Feb</span>
                            <button
                                class="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                View Details
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Promotional Banner -->
            <div class="mt-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl overflow-hidden shadow-lg">
                <div class="flex flex-col md:flex-row items-center justify-between p-8">
                    <div class="text-white text-center md:text-left mb-6 md:mb-0">
                        <h3 class="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                        <p class="text-white/90">Get updates on special offers and new products</p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <input type="email" placeholder="Enter your email"
                            class="px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 min-w-[250px]" />
                        <button
                            class="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Weekend from '@/assets/images/offer.jpg'
import Dairy from '@/assets/images/Dairy Products.webp'
import Fresh from '@/assets/images/Fresh Fruits.webp'
import Meat from '@/assets/images/Meat Products.webp'
</script>