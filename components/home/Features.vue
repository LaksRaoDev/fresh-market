<template>
    <!-- Features Section -->
    <section class="py-16 bg-gradient-to-b from-slate-50 to-slate-100">
        <!-- Main Container -->
        <div class="container mx-auto px-4">
            <!-- Section Header -->
            <div class="text-center max-w-2xl mx-auto mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                    Why Choose Fresh Market?
                </h2>
                <p class="text-slate-600">
                    Experience the perfect blend of quality, convenience, and exceptional service with our premium
                    grocery delivery.
                </p>
            </div>

            <!-- Features Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Feature Card 1 - Fresh Products -->
                <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-800 ml-4">Fresh Products</h3>
                    </div>
                    <p class="text-slate-600 mb-4">
                        Hand-picked fresh produce sourced directly from local farms and trusted suppliers.
                    </p>
                    <ul class="space-y-2">
                        <li class="flex items-center text-slate-600">
                            <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            Daily quality checks
                        </li>
                        <li class="flex items-center text-slate-600">
                            <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            Farm-fresh guarantee
                        </li>
                    </ul>
                </div>

                <!-- Feature Card 2 - Fast Delivery -->
                <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-800 ml-4">Fast Delivery</h3>
                    </div>
                    <p class="text-slate-600 mb-4">
                        Swift and reliable delivery service to ensure your groceries arrive fresh and on time.
                    </p>
                    <ul class="space-y-2">
                        <li class="flex items-center text-slate-600">
                            <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            Same-day delivery
                        </li>
                        <li class="flex items-center text-slate-600">
                            <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            Real-time tracking
                        </li>
                    </ul>
                </div>

                <!-- Feature Card 3 - Best Prices -->
                <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div class="flex items-center mb-6">
                        <div
                            class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-800 ml-4">Best Prices</h3>
                    </div>
                    <p class="text-slate-600 mb-4">
                        Competitive prices and regular deals to give you the best value for your money.
                    </p>
                    <ul class="space-y-2">
                        <li class="flex items-center text-slate-600">
                            <span class="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            Weekly deals
                        </li>
                        <li class="flex items-center text-slate-600">
                            <span class="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            Price match guarantee
                        </li>
                    </ul>
                </div>

                <!-- Feature Card 4 - Quality Assurance -->
                <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div class="flex items-center mb-6">
                        <div
                            class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-800 ml-4">Quality Assurance</h3>
                    </div>
                    <p class="text-slate-600 mb-4">
                        Rigorous quality control measures to ensure only the best products reach you.
                    </p>
                    <ul class="space-y-2">
                        <li class="flex items-center text-slate-600">
                            <span class="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                            Multiple inspections
                        </li>
                        <li class="flex items-center text-slate-600">
                            <span class="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                            Satisfaction guarantee
                        </li>
                    </ul>
                </div>

                <!-- Feature Card 5 - Easy Returns -->
                <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-800 ml-4">Easy Returns</h3>
                    </div>
                    <p class="text-slate-600 mb-4">
                        Hassle-free return policy with quick refunds and replacements.
                    </p>
                    <ul class="space-y-2">
                        <li class="flex items-center text-slate-600">
                            <span class="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                            No questions asked
                        </li>
                        <li class="flex items-center text-slate-600">
                            <span class="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                            Instant refunds
                        </li>
                    </ul>
                </div>

                <!-- Feature Card 6 - Customer Support -->
                <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div class="flex items-center mb-6">
                        <div
                            class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-800 ml-4">24/7 Support</h3>
                    </div>
                    <p class="text-slate-600 mb-4">
                        Round-the-clock customer support to assist you with any queries or concerns.
                    </p>
                    <ul class="space-y-2">
                        <li class="flex items-center text-slate-600">
                            <span class="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                            Always available
                        </li>
                        <li class="flex items-center text-slate-600">
                            <span class="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                            Expert assistance
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>