<template>
    <!-- Categories Section -->
    <section class="py-16 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div class="container mx-auto px-4">
            <!-- Section Header -->
            <div class="text-center max-w-2xl mx-auto mb-12">
                <span class="text-amber-600 font-medium text-sm">EXPLORE OUR</span>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">Shop By Categories</h2>
                <p class="text-gray-600">Discover our wide range of fresh and quality products across various categories
                </p>
            </div>

            <!-- Categories Grid -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                <!-- Fruits & Vegetables -->
                <a href="#">
                    <div
                        class="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-amber-600/90 to-amber-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        </div>
                        <img :src="Fruits" alt="Fruits & Vegetables"
                            class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                        <div class="p-4 relative z-20">
                            <h3
                                class="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                                Fruits & Vegetables
                            </h3>
                            <p class="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                                Fresh from local farms
                            </p>
                            <span
                                class="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </a>

                <!-- Dairy Products -->
                <a href="#">
                    <div
                        class="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-blue-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        </div>
                        <img :src="Dairy" alt="Dairy Products"
                            class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                        <div class="p-4 relative z-20">
                            <h3
                                class="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                                Dairy Products
                            </h3>
                            <p class="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                                Farm-fresh dairy
                            </p>
                            <span
                                class="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </a>

                <!-- Meat & Fish -->
                <a href="#">
                    <div
                        class="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-red-600/90 to-red-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        </div>
                        <img :src="Meat" alt="Meat & Fish"
                            class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                        <div class="p-4 relative z-20">
                            <h3
                                class="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                                Meat & Fish
                            </h3>
                            <p class="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                                Premium quality cuts
                            </p>
                            <span
                                class="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </a>

                <!-- Bakery -->
                <a href="#">
                    <div
                        class="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-orange-600/90 to-orange-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        </div>
                        <img :src="Bakery" alt="Bakery"
                            class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                        <div class="p-4 relative z-20">
                            <h3
                                class="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                                Bakery
                            </h3>
                            <p class="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                                Freshly baked daily
                            </p>
                            <span
                                class="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </a>

                <!-- Beverages -->
                <a href="#">
                    <div
                        class="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-purple-600/90 to-purple-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        </div>
                        <img :src="Beverages" alt="Beverages"
                            class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                        <div class="p-4 relative z-20">
                            <h3
                                class="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                                Beverages
                            </h3>
                            <p class="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                                Refreshing drinks
                            </p>
                            <span
                                class="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </a>

                <!-- Snacks -->
                <a href="#">
                    <div
                        class="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-green-600/90 to-green-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        </div>
                        <img :src="Snacks" alt="Snacks"
                            class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                        <div class="p-4 relative z-20">
                            <h3
                                class="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                                Snacks
                            </h3>
                            <p class="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                                Delicious treats
                            </p>
                            <span
                                class="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </a>

                <!-- Household -->
                <a href="#">
                    <div
                        class="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-indigo-600/90 to-indigo-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        </div>
                        <img :src="Household" alt="Household"
                            class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                        <div class="p-4 relative z-20">
                            <h3
                                class="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                                Household
                            </h3>
                            <p class="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                                Essential supplies
                            </p>
                            <span
                                class="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </a>

                <!-- Personal Care -->
                <a href="#">
                    <div
                        class="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-pink-600/90 to-pink-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        </div>
                        <img :src="Personal" alt="Personal Care"
                            class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                        <div class="p-4 relative z-20">
                            <h3
                                class="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                                Personal Care
                            </h3>
                            <p class="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                                Health &amp; beauty
                            </p>
                            <span
                                class="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import Fruits from '@/assets/images/Fruits & Vegetables.webp'
import Dairy from '@/assets/images/Dairy Products.webp'
import Meat from '@/assets/images/Meat & Fish.webp'
import Bakery from '@/assets/images/Bakery.webp'
import Beverages from '@/assets/images/Beverages.webp'
import Snacks from '@/assets/images/Snacks.webp'
import Household from '@/assets/images/Household.webp'
import Personal from '@/assets/images/Personal Care.webp'
</script>