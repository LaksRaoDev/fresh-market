<template>
     <!-- Hero Section -->
     <section
        class="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-50">
        <!-- Animated Background Elements -->
        <div class="absolute inset-0 overflow-hidden">
            <!-- Animated circles -->
            <div class="absolute w-[800px] h-[800px] -right-40 -top-40 animate-blob">
                <div class="absolute w-full h-full rounded-full bg-emerald-200 opacity-20 blur-3xl"></div>
            </div>
            <div class="absolute w-[600px] h-[600px] -left-32 -bottom-32 animate-blob animation-delay-2000">
                <div class="absolute w-full h-full rounded-full bg-emerald-300 opacity-20 blur-3xl"></div>
            </div>
            <div class="absolute w-[500px] h-[500px] right-1/4 bottom-1/4 animate-blob animation-delay-4000">
                <div class="absolute w-full h-full rounded-full bg-emerald-400 opacity-10 blur-3xl"></div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="container mx-auto px-4 py-12 lg:py-20 relative">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Left Column -->
                <div class="space-y-8 lg:pr-12">
                    <!-- Main Heading with Animated Text -->
                    <div class="space-y-4">
                        <h1
                            class="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight animate-fade-in-up">
                            Fresh & Healthy
                            <span class="block text-emerald-600 animate-fade-in-up animation-delay-300">Groceries</span>
                            <span class="block animate-fade-in-up animation-delay-600">Delivered</span>
                        </h1>
                        <p class="text-lg md:text-xl text-gray-600 max-w-xl animate-fade-in-up animation-delay-900">
                            Experience premium quality farm-fresh produce delivered right to your doorstep.
                        </p>
                    </div>

                    <!-- Features Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div
                            class="group bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div class="flex items-center space-x-4">
                                <div
                                    class="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                                    <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-800">Free Delivery</h3>
                                    <p class="text-sm text-gray-600">On orders above $50</p>
                                </div>
                            </div>
                        </div>

                        <div
                            class="group bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div class="flex items-center space-x-4">
                                <div
                                    class="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                                    <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-800">Same Day Delivery</h3>
                                    <p class="text-sm text-gray-600">Order before 2 PM</p>
                                </div>
                            </div>
                        </div>

                        <div
                            class="group bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div class="flex items-center space-x-4">
                                <div
                                    class="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                                    <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-800">Quality Guarantee</h3>
                                    <p class="text-sm text-gray-600">100% satisfaction</p>
                                </div>
                            </div>
                        </div>

                        <div
                            class="group bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div class="flex items-center space-x-4">
                                <div
                                    class="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                                    <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-800">Best Prices</h3>
                                    <p class="text-sm text-gray-600">Market-leading rates</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 pt-6">
                        <button
                            class="group relative px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold overflow-hidden shadow-lg">
                            <span class="relative z-10 group-hover:text-white transition-colors duration-300">Shop
                                Now</span>
                            <div
                                class="absolute inset-0 bg-emerald-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300">
                            </div>
                        </button>
                        <button
                            class="group relative px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold border-2 border-emerald-600 overflow-hidden">
                            <span class="relative z-10 group-hover:text-white transition-colors duration-300">View
                                Offers</span>
                            <div
                                class="absolute inset-0 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300">
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Right Column -->
                <div class="relative">
                    <!-- Main Image Container -->
                    <div
                        class="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                        <img :src="Fresh" alt="Fresh Groceries" class="w-full h-auto object-cover" />

                        <!-- Floating Badge 1 -->
                        <div
                            class="absolute left-0 top-1/4 flex items-center bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg transform hover:scale-110 transition duration-300 hover:-translate-x-1">
                            <div
                                class="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-2xl shadow-md">
                                🥕
                            </div>
                            <div class="ml-3">
                                <p class="font-semibold text-gray-800">Fresh Vegetables</p>
                                <p class="text-sm text-gray-600">Locally Sourced</p>
                            </div>
                        </div>

                        <!-- Floating Badge 2 -->
                        <div
                            class="absolute right-0 bottom-1/4 flex items-center bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg transform hover:scale-110 transition duration-300 hover:translate-x-1">
                            <div
                                class="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center text-2xl shadow-md">
                                🍎
                            </div>
                            <div class="ml-3">
                                <p class="font-semibold text-gray-800">Fresh Fruits</p>
                                <p class="text-sm text-gray-600">Organic Only</p>
                            </div>
                        </div>

                        <!-- Floating Badge 3 (New - Dairy Products) -->
                        <div
                            class="absolute left-1/2 -translate-x-1/2 bottom-4 flex items-center bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg transform hover:scale-110 transition duration-300">
                            <div
                                class="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-2xl shadow-md">
                                🥛
                            </div>
                            <div class="ml-3">
                                <p class="font-semibold text-gray-800">Dairy Products</p>
                                <p class="text-sm text-gray-600">Fresh & Healthy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Trust Badges -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                <div
                    class="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                    <p class="font-bold text-3xl text-emerald-600 group-hover:scale-110 transition-transform">10k+</p>
                    <p class="text-gray-600 mt-2">Happy Customers</p>
                </div>
                <div
                    class="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                    <p class="font-bold text-3xl text-emerald-600 group-hover:scale-110 transition-transform">5k+</p>
                    <p class="text-gray-600 mt-2">Products</p>
                </div>
                <div
                    class="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                    <p class="font-bold text-3xl text-emerald-600 group-hover:scale-110 transition-transform">98%</p>
                    <p class="text-gray-600 mt-2">Satisfaction Rate</p>
                </div>
                <div
                    class="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                    <p class="font-bold text-3xl text-emerald-600 group-hover:scale-110 transition-transform">24/7</p>
                    <p class="text-gray-600 mt-2">Support</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
        @keyframes blob {
            0% {
                transform: translate(0, 0) scale(1);
            }

            33% {
                transform: translate(30px, -50px) scale(1.1);
            }

            66% {
                transform: translate(-20px, 20px) scale(0.9);
            }

            100% {
                transform: translate(0, 0) scale(1);
            }
        }

        .animate-blob {
            animation: blob 7s infinite;
        }

        .animation-delay-2000 {
            animation-delay: 2s;
        }

        .animation-delay-4000 {
            animation-delay: 4s;
        }

        .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .animation-delay-300 {
            animation-delay: 0.3s;
        }

        .animation-delay-600 {
            animation-delay: 0.6s;
        }

        .animation-delay-900 {
            animation-delay: 0.9s;
        }
    </style>

<script setup>
import Fresh from '@/assets/images/10929810.png'
</script>