<template>
    <TopBar />
    <Header />
    
    <main class="container mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Left Column - Delivery & Payment -->
        <div class="lg:w-2/3">
          <!-- Progress Steps -->
          <div class="mb-8">
            <div class="flex justify-between items-center mb-4">
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-1">
                  <span>1</span>
                </div>
                <span class="text-sm font-medium text-emerald-600">Delivery</span>
              </div>
              <div class="flex-1 h-1 bg-gray-200 mx-2 relative">
                <div class="absolute top-0 left-0 h-full bg-emerald-500 w-1/2"></div>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center mb-1">
                  <span>2</span>
                </div>
                <span class="text-sm font-medium text-gray-500">Payment</span>
              </div>
              <div class="flex-1 h-1 bg-gray-200 mx-2"></div>
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center mb-1">
                  <span>3</span>
                </div>
                <span class="text-sm font-medium text-gray-500">Review</span>
              </div>
            </div>
          </div>
  
          <!-- Delivery Information -->
          <section class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 class="text-xl font-bold text-gray-800 mb-4">Delivery Information</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" v-model="delivery.firstName" class="w-full p-2 border border-gray-300 rounded focus:ring-emerald-500 focus:border-emerald-500">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" v-model="delivery.lastName" class="w-full p-2 border border-gray-300 rounded focus:ring-emerald-500 focus:border-emerald-500">
              </div>
            </div>
            
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input type="text" v-model="delivery.address" class="w-full p-2 border border-gray-300 rounded focus:ring-emerald-500 focus:border-emerald-500">
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input type="text" v-model="delivery.city" class="w-full p-2 border border-gray-300 rounded focus:ring-emerald-500 focus:border-emerald-500">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">State/Region</label>
                <input type="text" v-model="delivery.state" class="w-full p-2 border border-gray-300 rounded focus:ring-emerald-500 focus:border-emerald-500">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                <input type="text" v-model="delivery.postalCode" class="w-full p-2 border border-gray-300 rounded focus:ring-emerald-500 focus:border-emerald-500">
              </div>
            </div>
            
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="tel" v-model="delivery.phone" class="w-full p-2 border border-gray-300 rounded focus:ring-emerald-500 focus:border-emerald-500">
            </div>
            
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-1">Delivery Instructions (Optional)</label>
              <textarea v-model="delivery.instructions" rows="3" class="w-full p-2 border border-gray-300 rounded focus:ring-emerald-500 focus:border-emerald-500"></textarea>
            </div>
          </section>
  
          <!-- Delivery Method -->
          <section class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 class="text-xl font-bold text-gray-800 mb-4">Delivery Method</h2>
            
            <div class="space-y-4">
              <label class="flex items-start p-4 border rounded-lg cursor-pointer hover:border-emerald-500" :class="{'border-emerald-500 bg-emerald-50': delivery.method === 'standard'}">
                <input type="radio" v-model="delivery.method" value="standard" class="mt-1 text-emerald-500 focus:ring-emerald-500">
                <div class="ml-3">
                  <h3 class="font-medium text-gray-800">Standard Delivery</h3>
                  <p class="text-sm text-gray-600">3-5 business days</p>
                  <p class="text-sm font-medium text-gray-800 mt-1">Free</p>
                </div>
              </label>
              
              <label class="flex items-start p-4 border rounded-lg cursor-pointer hover:border-emerald-500" :class="{'border-emerald-500 bg-emerald-50': delivery.method === 'express'}">
                <input type="radio" v-model="delivery.method" value="express" class="mt-1 text-emerald-500 focus:ring-emerald-500">
                <div class="ml-3">
                  <h3 class="font-medium text-gray-800">Express Delivery</h3>
                  <p class="text-sm text-gray-600">1-2 business days</p>
                  <p class="text-sm font-medium text-gray-800 mt-1">$5.99</p>
                </div>
              </label>
            </div>
          </section>
  
          <!-- Payment Method -->
          <section class="bg-white rounded-lg shadow-sm p-6">
            <h2 class="text-xl font-bold text-gray-800 mb-4">Payment Method</h2>
            
            <div class="space-y-4">
              <label class="flex items-start p-4 border rounded-lg cursor-pointer hover:border-emerald-500" :class="{'border-emerald-500 bg-emerald-50': payment.method === 'credit'}">
                <input type="radio" v-model="payment.method" value="credit" class="mt-1 text-emerald-500 focus:ring-emerald-500">
                <div class="ml-3 w-full">
                  <h3 class="font-medium text-gray-800">Credit/Debit Card</h3>
                  
                  <div v-if="payment.method === 'credit'" class="mt-4 space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                      <input type="text" v-model="payment.cardNumber" placeholder="1234 5678 9012 3456" class="w-full p-2 border border-gray-300 rounded focus:ring-emerald-500 focus:border-emerald-500">
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                        <input type="text" v-model="payment.expiry" placeholder="MM/YY" class="w-full p-2 border border-gray-300 rounded focus:ring-emerald-500 focus:border-emerald-500">
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                        <input type="text" v-model="payment.cvv" placeholder="123" class="w-full p-2 border border-gray-300 rounded focus:ring-emerald-500 focus:border-emerald-500">
                      </div>
                    </div>
                    
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                      <input type="text" v-model="payment.cardName" class="w-full p-2 border border-gray-300 rounded focus:ring-emerald-500 focus:border-emerald-500">
                    </div>
                  </div>
                </div>
              </label>
              
              <label class="flex items-start p-4 border rounded-lg cursor-pointer hover:border-emerald-500" :class="{'border-emerald-500 bg-emerald-50': payment.method === 'paypal'}">
                <input type="radio" v-model="payment.method" value="paypal" class="mt-1 text-emerald-500 focus:ring-emerald-500">
                <div class="ml-3">
                  <h3 class="font-medium text-gray-800">PayPal</h3>
                  <p class="text-sm text-gray-600">You'll be redirected to PayPal</p>
                </div>
              </label>
              
              <label class="flex items-start p-4 border rounded-lg cursor-pointer hover:border-emerald-500" :class="{'border-emerald-500 bg-emerald-50': payment.method === 'cod'}">
                <input type="radio" v-model="payment.method" value="cod" class="mt-1 text-emerald-500 focus:ring-emerald-500">
                <div class="ml-3">
                  <h3 class="font-medium text-gray-800">Cash on Delivery</h3>
                  <p class="text-sm text-gray-600">Pay when you receive your order</p>
                </div>
              </label>
            </div>
          </section>
        </div>
  
        <!-- Right Column - Order Summary -->
        <div class="lg:w-1/3">
          <div class="bg-white rounded-lg shadow-sm p-6 sticky top-4">
            <h2 class="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
            
            <div class="space-y-4 mb-6">
              <div v-for="item in cart.items" :key="item.title" class="flex items-center">
                <img :src="item.image" :alt="item.title" class="w-16 h-16 object-cover rounded-lg">
                <div class="ml-4 flex-1">
                  <h3 class="text-sm font-medium text-gray-800">{{ item.title }}</h3>
                  <p class="text-xs text-gray-500">Qty: {{ item.qty }}</p>
                </div>
                <span class="text-sm font-medium text-gray-800">${{ (item.price * item.qty).toFixed(2) }}</span>
              </div>
            </div>
            
            <div class="space-y-3 border-t pt-4">
              <div class="flex justify-between">
                <span class="text-gray-600">Subtotal</span>
                <span class="font-medium text-gray-800">${{ cart.totalPrice.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Delivery</span>
                <span class="font-medium text-gray-800">{{ deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}` }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Tax</span>
                <span class="font-medium text-gray-800">${{ tax.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between border-t pt-3">
                <span class="text-lg font-bold text-gray-800">Total</span>
                <span class="text-lg font-bold text-gray-800">${{ totalWithTaxAndDelivery.toFixed(2) }}</span>
              </div>
            </div>
            
            <button @click="placeOrder" class="w-full mt-6 bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-4 rounded-lg font-medium transition-colors">
              Place Order
            </button>
            
            <p class="text-xs text-gray-500 mt-4 text-center">
              By placing your order, you agree to our <a href="#" class="text-emerald-500 hover:underline">Terms of Service</a> and <a href="#" class="text-emerald-500 hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </main>
    
    <Footer />
  </template>
  
  <script setup>
  import TopBar from '~/components/common/TopBar.vue'
  import Header from '~/components/common/Header.vue'
  import Footer from '~/components/common/Footer.vue'
  import { useCartStore } from '~/stores/cart'
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  
  const cart = useCartStore()
  const router = useRouter()
  
  // Delivery information
  const delivery = ref({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    phone: '',
    instructions: '',
    method: 'standard'
  })
  
  // Payment information
  const payment = ref({
    method: 'credit',
    cardNumber: '',
    expiry: '',
    cvv: '',
    cardName: ''
  })
  
  // Calculate fees and totals
  const deliveryFee = computed(() => {
    return delivery.value.method === 'express' ? 5.99 : 0
  })
  
  const tax = computed(() => {
    return (cart.totalPrice * 0.1) // 10% tax
  })
  
  const totalWithTaxAndDelivery = computed(() => {
    return cart.totalPrice + tax.value + deliveryFee.value
  })
  
  // Place order function
  const placeOrder = () => {
    // Validate form
    if (!delivery.value.firstName || !delivery.value.lastName || !delivery.value.address || 
        !delivery.value.city || !delivery.value.state || !delivery.value.postalCode || 
        !delivery.value.phone) {
      alert('Please fill in all required delivery information')
      return
    }
    
    if (payment.value.method === 'credit' && 
        (!payment.value.cardNumber || !payment.value.expiry || !payment.value.cvv || !payment.value.cardName)) {
      alert('Please fill in all required payment information')
      return
    }
    
    // In a real app, you would process the payment here
    console.log('Processing order...', {
      delivery: delivery.value,
      payment: payment.value,
      items: cart.items,
      total: totalWithTaxAndDelivery.value
    })
    
    // Redirect to order confirmation
    router.push('/order-confirmation')
  }
  </script>
  
  <style scoped>
  /* Custom styling for radio buttons */
  input[type="radio"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid #ccc;
    border-radius: 50%;
    outline: none;
    transition: all 0.2s ease;
  }
  
  input[type="radio"]:checked {
    border-color: #10b981;
    background-color: #10b981;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E");
  }
  </style>