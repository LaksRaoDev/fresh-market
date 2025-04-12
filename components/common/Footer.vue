<template>
    <!-- Footer Section -->
    <footer class="bg-gray-900 text-white py-12">
       <div class="container mx-auto px-4">
           <!-- Footer Grid -->
           <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
               <!-- About Section -->
               <div class="space-y-4">
                   <h3 class="text-xl font-bold text-emerald-500">Fresh Market</h3>
                   <p class="text-gray-400">
                       Fresh Market is your one-stop shop for fresh, organic, and locally sourced groceries. We deliver
                       quality and convenience to your doorstep.
                   </p>
                   <div class="flex space-x-4">
                       <a href="#" class="text-gray-400 hover:text-emerald-500 transition-colors">
                           <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                               <path
                                   d="M24 4.56v14.91c0 .98-.81 1.78-1.79 1.78h-20.5c-.98 0-1.79-.8-1.79-1.78v-14.91c0-.98.81-1.78 1.79-1.78h20.5c.98 0 1.79.8 1.79 1.78zm-11.5 7.6l-6.54 4.09v-8.17l6.54 4.08zm-1-1.08l-6.04-3.77h12.08l-6.04 3.77zm6.54 1.08l6.54-4.09v8.17l-6.54-4.08z" />
                           </svg>
                       </a>
                       <a href="#" class="text-gray-400 hover:text-emerald-500 transition-colors">
                           <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                               <path
                                   d="M22.23 5.924c-.806.358-1.67.598-2.577.707a4.52 4.52 0 001.98-2.49 9.03 9.03 0 01-2.86 1.09 4.51 4.51 0 00-7.69 4.11 12.8 12.8 0 01-9.29-4.71 4.51 4.51 0 001.39 6.02 4.47 4.47 0 01-2.04-.56v.06a4.51 4.51 0 003.62 4.42 4.52 4.52 0 01-2.03.08 4.51 4.51 0 004.21 3.13 9.05 9.05 0 01-5.6 1.93c-.36 0-.72-.02-1.08-.06a12.77 12.77 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.39-.01-.58a9.17 9.17 0 002.26-2.34z" />
                           </svg>
                       </a>
                       <a href="#" class="text-gray-400 hover:text-emerald-500 transition-colors">
                           <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                               <path
                                   d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.95 3.6 9.06 8.31 9.83v-6.96h-2.5v-2.87h2.5v-2.19c0-2.48 1.51-3.84 3.73-3.84 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.61.76-1.61 1.54v1.86h2.73l-.44 2.87h-2.29v6.96c4.71-.77 8.31-4.88 8.31-9.83 0-5.5-4.46-9.96-9.96-9.96z" />
                           </svg>
                       </a>
                   </div>
               </div>

               <!-- Quick Links -->
               <div class="space-y-4">
                   <h4 class="text-lg font-semibold text-emerald-500">Quick Links</h4>
                   <ul class="space-y-2">
                       <li><a href="#" class="text-gray-400 hover:text-emerald-500 transition-colors">About Us</a></li>
                       <li><a href="#" class="text-gray-400 hover:text-emerald-500 transition-colors">Shop</a></li>
                       <li><a href="#" class="text-gray-400 hover:text-emerald-500 transition-colors">Delivery Info</a>
                       </li>
                       <li><a href="#" class="text-gray-400 hover:text-emerald-500 transition-colors">Privacy
                               Policy</a></li>
                       <li><a href="#" class="text-gray-400 hover:text-emerald-500 transition-colors">Terms &
                               Conditions</a></li>
                   </ul>
               </div>

               <!-- Contact Info -->
               <div class="space-y-4">
                   <h4 class="text-lg font-semibold text-emerald-500">Contact Us</h4>
                   <ul class="space-y-2">
                       <li class="text-gray-400">📞 +1 (555) 123-4567</li>
                       <li class="text-gray-400">📧 support@freshmarket.com</li>
                       <li class="text-gray-400">📍 123 Green Valley Road, Organic City, CA 90210</li>
                   </ul>
               </div>

               <!-- Newsletter -->
               <div class="space-y-4">
                   <h4 class="text-lg font-semibold text-emerald-500">Newsletter</h4>
                   <p class="text-gray-400">
                       Subscribe to our newsletter to get the latest updates and offers.
                   </p>
                   <form class="flex flex-col space-y-3">
                       <input type="email" placeholder="Your email"
                           class="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                       <button type="submit"
                           class="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                           Subscribe
                       </button>
                   </form>
               </div>
           </div>

           <!-- Divider -->
           <div class="border-t border-gray-800 my-8"></div>

           <!-- Bottom Footer -->
           <div class="text-center text-gray-400">
               <p>&copy; 2025 Fresh Market. All rights reserved.</p>
           </div>
       </div>
   </footer>
</template>