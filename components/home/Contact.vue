<template>

    <!-- Contact Section -->
    <section class="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
       <!-- Decorative Elements -->
       <div class="absolute -right-24 -top-24 w-96 h-96 bg-emerald-100 rounded-full opacity-30"></div>
       <div class="absolute -left-16 -bottom-16 w-80 h-80 bg-emerald-100 rounded-full opacity-30"></div>

       <div class="container mx-auto px-4 relative">
           <!-- Section Header -->
           <div class="text-center max-w-2xl mx-auto mb-12">
               <span class="inline-block bg-emerald-100 text-emerald-600 px-4 py-1 rounded-full text-sm mb-4">
                   Get in Touch
               </span>
               <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                   Contact Fresh Market
               </h2>
               <p class="text-gray-600">
                   Have questions or need assistance? Our team is here to help you 24/7
               </p>
           </div>

           <!-- Contact Content -->
           <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
               <!-- Contact Form -->
               <div class="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                   <form class="space-y-6">
                       <div>
                           <label class="block text-gray-700 mb-2 font-medium">Full Name</label>
                           <input type="text"
                               class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                               placeholder="John Doe">
                       </div>

                       <div>
                           <label class="block text-gray-700 mb-2 font-medium">Email Address</label>
                           <input type="email"
                               class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                               placeholder="hello@example.com">
                       </div>

                       <div>
                           <label class="block text-gray-700 mb-2 font-medium">Phone Number</label>
                           <input type="tel"
                               class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                               placeholder="+1 (555) 000-0000">
                       </div>

                       <div>
                           <label class="block text-gray-700 mb-2 font-medium">Message</label>
                           <textarea
                               class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all h-32"
                               placeholder="How can we help you?"></textarea>
                       </div>

                       <button type="submit"
                           class="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg">
                           Send Message
                       </button>
                   </form>
               </div>

               <!-- Contact Info -->
               <div class="space-y-8">
                   <!-- Info Cards -->
                   <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                       <div class="flex items-start space-x-4">
                           <div
                               class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                               <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor"
                                   viewBox="0 0 24 24">
                                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                               </svg>
                           </div>
                           <div>
                               <h3 class="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
                               <p class="text-gray-600">24/7 Customer Support</p>
                               <p class="text-emerald-600 font-medium">(555) 123-4567</p>
                           </div>
                       </div>
                   </div>

                   <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                       <div class="flex items-start space-x-4">
                           <div
                               class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                               <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor"
                                   viewBox="0 0 24 24">
                                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                               </svg>
                           </div>
                           <div>
                               <h3 class="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
                               <p class="text-gray-600">Quick Response Time</p>
                               <p class="text-emerald-600 font-medium">support@freshmarket.com</p>
                           </div>
                       </div>
                   </div>

                   <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                       <div class="flex items-start space-x-4">
                           <div
                               class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                               <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor"
                                   viewBox="0 0 24 24">
                                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                               </svg>
                           </div>
                           <div>
                               <h3 class="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
                               <p class="text-gray-600">Our Headquarters</p>
                               <p class="text-emerald-600 font-medium">123 Green Valley Road<br>Organic City, CA 90210
                               </p>
                           </div>
                       </div>
                   </div>

                   <!-- Map -->
                   <div class="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                       <iframe
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119263355!2d-0.38178406930702025!3d51.52873519756609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1648826316140!5m2!1sen!2sus"
                           class="w-full h-64 border-0" allowfullscreen="" loading="lazy"
                           referrerpolicy="no-referrer-when-downgrade">
                       </iframe>
                   </div>
               </div>
           </div>
       </div>
   </section>
</template>